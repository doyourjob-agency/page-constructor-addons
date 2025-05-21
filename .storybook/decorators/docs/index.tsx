import {DocsContainer} from '@storybook/addon-docs';
import type {DocsContainerProps} from '@storybook/addon-docs';
import React from 'react';

import {themes} from '../../theme';
import {MobileContext} from '../../../src/context/mobileContext';
import {cn} from '../../../src/utils/cn';

import './DocsDecorator.scss';
import {Theme} from '@doyourjob/gravity-ui-page-constructor';

export interface DocsDecoratorProps extends React.PropsWithChildren<DocsContainerProps> {}

const b = cn('docs-decorator');

export function DocsDecorator({children, context}: DocsDecoratorProps) {
    // @ts-expect-error
    const theme = context.store.globals.globals.theme;

    return (
        <div className={b()}>
            <DocsContainer context={context} theme={themes[theme as Theme]}>
                <MobileContext.Provider value={false}>{children}</MobileContext.Provider>
            </DocsContainer>
        </div>
    );
}
