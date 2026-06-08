import React from 'react';

import {Theme} from '@doyourjob/gravity-ui-page-constructor';
import {MobileProvider, Platform, ThemeProvider} from '@gravity-ui/uikit';
import {render, screen} from '@testing-library/react';

import {Footer} from './Footer';
import {FooterProps} from './models';

import data from './__stories__/data.json';

describe('Footer accessibility', () => {
    test('renders group headings outside link lists', () => {
        render(
            <ThemeProvider theme={Theme.Light}>
                <MobileProvider mobile={false} platform={Platform.BROWSER}>
                    <Footer {...(data.rich as FooterProps)} />
                </MobileProvider>
            </ThemeProvider>,
        );

        const heading = screen.getByRole('heading', {name: 'Column 1'});
        const list = screen.getByRole('list', {name: 'Column 1'});

        expect(list).toBeInTheDocument();
        expect(list).not.toContainElement(heading);
    });
});
