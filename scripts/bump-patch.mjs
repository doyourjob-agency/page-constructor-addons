/* eslint-disable no-console */
import {spawnSync} from 'node:child_process';
import {existsSync, readFileSync} from 'node:fs';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');

process.chdir(rootDir);

function run(command, args, {capture = false} = {}) {
    if (!capture) {
        console.log(`> ${command} ${args.join(' ')}`);
    }

    const result = spawnSync(command, args, {
        encoding: 'utf8',
        stdio: capture ? 'pipe' : 'inherit',
    });

    if (result.error) {
        throw result.error;
    }

    if (result.status !== 0) {
        const details = capture ? result.stderr.trim() : '';
        throw new Error(
            [`${command} ${args.join(' ')} failed with exit code ${result.status}`, details]
                .filter(Boolean)
                .join('\n'),
        );
    }

    return capture ? result.stdout.trim() : '';
}

function getPackageVersion() {
    const packageJson = JSON.parse(readFileSync(resolve(rootDir, 'package.json'), 'utf8'));

    return packageJson.version;
}

function getNextPatchVersion(version) {
    const match = version.match(/^(\d+)\.(\d+)\.(\d+)$/);

    if (!match) {
        throw new Error(`Cannot bump non-standard package version: ${version}`);
    }

    const [, major, minor, patch] = match;

    return `${major}.${minor}.${Number(patch) + 1}`;
}

function ensureCleanWorkingTree() {
    const status = run('git', ['status', '--porcelain'], {capture: true});

    if (status) {
        throw new Error(`Working tree must be clean before bumping a release:\n${status}`);
    }
}

function getUpstream() {
    const currentBranch = run('git', ['rev-parse', '--abbrev-ref', 'HEAD'], {capture: true});

    if (currentBranch === 'HEAD') {
        throw new Error('Cannot bump a release from a detached HEAD');
    }

    const upstreamRef = run(
        'git',
        ['rev-parse', '--abbrev-ref', '--symbolic-full-name', '@{upstream}'],
        {capture: true},
    );
    const remotes = run('git', ['remote'], {capture: true})
        .split('\n')
        .filter(Boolean)
        .sort((a, b) => b.length - a.length);
    const remote = remotes.find(
        (item) => upstreamRef === item || upstreamRef.startsWith(`${item}/`),
    );

    if (!remote) {
        throw new Error(`Cannot resolve remote name from upstream ref: ${upstreamRef}`);
    }

    const branch = upstreamRef.slice(remote.length + 1);

    if (!branch) {
        throw new Error(`Cannot resolve remote branch from upstream ref: ${upstreamRef}`);
    }

    return {branch, ref: upstreamRef, remote};
}

function ensureUpstreamIsIncluded(upstream) {
    run('git', ['fetch', upstream.remote]);

    const missingCommitCount = Number(
        run('git', ['rev-list', '--count', `HEAD..${upstream.ref}`], {
            capture: true,
        }),
    );

    if (missingCommitCount > 0) {
        throw new Error(
            `Local branch is missing ${missingCommitCount} upstream commit(s) from ${upstream.ref}`,
        );
    }
}

function ensureTagIsAvailable(remote, tagName) {
    const localTag = run('git', ['tag', '--list', tagName], {capture: true});

    if (localTag) {
        throw new Error(`Local tag already exists: ${tagName}`);
    }

    const remoteTag = run('git', ['ls-remote', '--tags', remote, `refs/tags/${tagName}`], {
        capture: true,
    });

    if (remoteTag) {
        throw new Error(`Remote tag already exists: ${tagName}`);
    }
}

function main() {
    const upstream = getUpstream();
    const nextVersion = getNextPatchVersion(getPackageVersion());
    const tagName = `v${nextVersion}`;

    ensureUpstreamIsIncluded(upstream);
    ensureCleanWorkingTree();
    ensureTagIsAvailable(upstream.remote, tagName);

    run('npm', ['version', nextVersion, '--no-git-tag-version', '--ignore-scripts']);

    const versionFiles = ['package.json'];

    if (existsSync(resolve(rootDir, 'package-lock.json'))) {
        versionFiles.push('package-lock.json');
    }

    run('git', ['add', ...versionFiles]);

    const stagedFiles = run('git', ['diff', '--cached', '--name-only'], {capture: true});

    if (!stagedFiles) {
        throw new Error('No version files changed after npm version');
    }

    run('git', ['commit', '-m', `chore: release ${tagName}`]);
    run('git', ['tag', tagName]);
    run('git', ['push', upstream.remote, `HEAD:${upstream.branch}`]);
    run('git', ['push', upstream.remote, tagName]);

    console.log(`Published ${tagName}`);
}

try {
    main();
} catch (error) {
    console.error(`bump-patch-release failed: ${error.message}`);
    process.exit(1);
}
