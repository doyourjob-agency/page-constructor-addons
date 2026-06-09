import React from 'react';

import {MobileProvider, Platform} from '@gravity-ui/uikit';
import {cleanup, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {HeaderStripe, HeaderStripeProps} from './HeaderStripe';

const linkedItems: HeaderStripeProps['items'] = [
    {
        text: 'Spring catalog',
        link: '/spring-catalog',
    },
    {
        text: 'Reading club',
        link: '/reading-club',
    },
];

const renderHeaderStripe = (props: Partial<HeaderStripeProps> = {}) =>
    render(
        <MobileProvider mobile={false} platform={Platform.BROWSER}>
            <HeaderStripe
                duration={1000}
                items={linkedItems}
                canClose
                onClose={jest.fn()}
                {...props}
            />
        </MobileProvider>,
    );

describe('HeaderStripe accessibility', () => {
    afterEach(() => {
        jest.useRealTimers();
        cleanup();
    });

    test('keeps only the active link and close button in the keyboard focus order', async () => {
        const user = userEvent.setup();
        renderHeaderStripe();

        expect(screen.getByRole('link', {name: 'Spring catalog'})).toBeInTheDocument();
        expect(screen.queryByRole('link', {name: 'Reading club'})).not.toBeInTheDocument();
        expect(screen.getByText('Reading club')).toBeInTheDocument();

        await user.tab();
        expect(screen.getByRole('link', {name: 'Spring catalog'})).toHaveFocus();

        await user.tab();
        expect(screen.getByRole('button', {name: 'Close'})).toHaveFocus();
    });

    test('keeps only the close button tabbable when the active item is plain text', async () => {
        const user = userEvent.setup();
        renderHeaderStripe({
            items: [
                'Library updates',
                {
                    text: 'Reading club',
                    link: '/reading-club',
                },
            ],
        });

        expect(screen.queryByRole('link', {name: 'Reading club'})).not.toBeInTheDocument();

        await user.tab();
        expect(screen.getByRole('button', {name: 'Close'})).toHaveFocus();
    });

    test('pauses rotation while focus is inside the stripe', async () => {
        jest.useFakeTimers();
        const user = userEvent.setup({advanceTimers: jest.advanceTimersByTime});
        renderHeaderStripe();

        await user.tab();
        expect(screen.getByRole('link', {name: 'Spring catalog'})).toHaveFocus();

        jest.advanceTimersByTime(1000);

        expect(screen.getByRole('link', {name: 'Spring catalog'})).toHaveFocus();
        expect(screen.queryByRole('link', {name: 'Reading club'})).not.toBeInTheDocument();
    });
});
