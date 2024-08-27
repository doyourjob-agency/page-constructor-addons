import { i18n } from '../i18n';
export function registerKeyset(data, keysetName) {
    Object.entries(data).forEach(([lang, keys]) => i18n.registerKeyset(lang, keysetName, keys));
    return i18n.keyset(keysetName);
}
