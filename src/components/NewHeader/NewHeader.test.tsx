import React from 'react';

import {Theme} from '@doyourjob/gravity-ui-page-constructor';
import {MobileProvider, Platform, ThemeProvider} from '@gravity-ui/uikit';
import {cleanup, fireEvent, render, screen, waitFor, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {NewHeader} from './NewHeader';
import {SWITCH_MENU_TAB_TIMEOUT} from './constants';
import {NHNavigationData, NHNavigationItemType} from './models';

const defaultPopup = {
    primaryColor: '#D5ECFF',
    primaryColorHover: '#C1E1FB',
    sections: [
        {
            title: 'Run',
            subtitle: 'Browse collections',
            mode: 'run' as const,
            items: [
                {
                    title: 'New Arrivals',
                    url: '/collections/new-arrivals',
                    description: 'Browse recent titles',
                },
                {
                    title: 'Staff Picks',
                    url: '/collections/staff-picks',
                    description: 'Browse selected titles',
                },
                {
                    title: 'Archive',
                    url: '/collections/archive',
                    description: 'Find older issues',
                },
            ],
        },
    ],
};

const solutionsPopup = {
    primaryColor: '#D5ECFF',
    primaryColorHover: '#C1E1FB',
    sections: [
        {
            title: 'Plan',
            subtitle: 'Pick a path',
            mode: 'run' as const,
            items: [
                {
                    title: 'Solution Overview',
                    url: '/solutions',
                    description: 'Explore solutions',
                },
            ],
        },
    ],
};

const companyPopup = {
    primaryColor: '#D5ECFF',
    primaryColorHover: '#C1E1FB',
    sections: [
        {
            title: 'About',
            subtitle: 'Learn more',
            mode: 'run' as const,
            items: [
                {
                    title: 'About Example Library',
                    url: '/about',
                    description: 'Company overview',
                },
            ],
        },
    ],
};

const data: NHNavigationData = {
    logo: {
        href: '/',
        src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg"/%3E',
        alt: 'Example Library',
    },
    left: [
        {
            title: 'Products',
            type: NHNavigationItemType.NHDefaultPopup,
            data: defaultPopup,
        },
        {
            title: 'Solutions',
            type: NHNavigationItemType.NHDefaultPopup,
            data: solutionsPopup,
        },
    ],
    right: [
        {
            title: 'Pricing',
            type: NHNavigationItemType.Link,
            data: {
                url: '/prices',
            },
        },
        {
            title: 'Company',
            type: NHNavigationItemType.NHDefaultPopup,
            data: companyPopup,
        },
    ],
    buttons: [
        {
            text: 'Contact sales',
            url: '#contact',
        },
    ],
    login: {
        text: 'Log in',
        items: [
            {
                title: 'Console',
                url: '/console',
                description: 'Open console',
            },
        ],
    },
};

const renderHeader = () =>
    render(
        <ThemeProvider theme={Theme.Light}>
            <MobileProvider mobile={false} platform={Platform.BROWSER}>
                <NewHeader data={data} />
            </MobileProvider>
        </ThemeProvider>,
    );

const waitForHoverTimeout = () =>
    new Promise((resolve) => setTimeout(resolve, SWITCH_MENU_TAB_TIMEOUT + 50));

describe('NewHeader accessibility', () => {
    afterEach(cleanup);

    test('keeps top-level menu items in the keyboard focus order', async () => {
        const user = userEvent.setup();
        renderHeader();

        await user.tab();
        expect(screen.getByRole('link', {name: 'Example Library'})).toHaveFocus();

        await user.tab();
        expect(screen.getByRole('button', {name: 'Products'})).toHaveFocus();
    });

    test('toggles a desktop popup from the keyboard', async () => {
        const user = userEvent.setup();
        renderHeader();

        const products = screen.getByRole('button', {name: 'Products'});

        products.focus();
        await user.keyboard('{Enter}');
        expect(await screen.findByRole('link', {name: /New Arrivals/})).toBeInTheDocument();

        await user.keyboard('{Enter}');
        await waitFor(() =>
            expect(screen.queryByRole('link', {name: /New Arrivals/})).not.toBeInTheDocument(),
        );
        expect(products).toHaveFocus();

        await user.keyboard('[Space]');
        expect(await screen.findByRole('link', {name: /New Arrivals/})).toBeInTheDocument();
    });

    test('opens a desktop popup on hover', async () => {
        const user = userEvent.setup();
        renderHeader();

        await user.hover(screen.getByRole('button', {name: 'Products'}));

        expect(await screen.findByRole('link', {name: /New Arrivals/})).toBeInTheDocument();
    });

    test('keeps a desktop popup open after the hover timeout', async () => {
        const user = userEvent.setup();
        renderHeader();

        const products = screen.getByRole('button', {name: 'Products'});

        await user.hover(products);
        expect(await screen.findByRole('link', {name: /New Arrivals/})).toBeInTheDocument();
        await waitForHoverTimeout();

        expect(screen.getByRole('link', {name: /New Arrivals/})).toBeInTheDocument();
    });

    test('keeps a desktop popup open when moving from trigger to popup content', async () => {
        const user = userEvent.setup();
        renderHeader();

        const products = screen.getByRole('button', {name: 'Products'});

        await user.hover(products);
        const firstPopupLink = await screen.findByRole('link', {name: /New Arrivals/});

        fireEvent.mouseOut(products, {relatedTarget: firstPopupLink});
        await waitForHoverTimeout();

        expect(screen.getByRole('link', {name: /New Arrivals/})).toBeInTheDocument();
    });

    test('keeps a desktop popup open across the trigger-to-popup gap', async () => {
        renderHeader();

        const products = screen.getByRole('button', {name: 'Products'});
        const logo = screen.getByRole('link', {name: 'Example Library'});

        fireEvent.mouseOver(products);
        const firstPopupLink = await screen.findByRole('link', {name: /New Arrivals/});

        // Leave the trigger toward an element outside the popup (the header gap), then land
        // in the portaled popup before the cancelable close timer elapses.
        fireEvent.mouseOut(products, {relatedTarget: logo});
        fireEvent.mouseOver(firstPopupLink);
        await waitForHoverTimeout();

        expect(screen.getByRole('link', {name: /New Arrivals/})).toBeInTheDocument();
    });

    test('reliably opens a desktop popup when re-hovering quickly', async () => {
        renderHeader();

        const products = screen.getByRole('button', {name: 'Products'});
        const logo = screen.getByRole('link', {name: 'Example Library'});

        // Out-and-back-in before the dwell elapses must still open the popup.
        fireEvent.mouseOver(products);
        fireEvent.mouseOut(products, {relatedTarget: logo});
        fireEvent.mouseOver(products);

        expect(await screen.findByRole('link', {name: /New Arrivals/})).toBeInTheDocument();
    });

    test('switches the open popup across navigation groups on hover', async () => {
        renderHeader();

        const products = screen.getByRole('button', {name: 'Products'});
        const company = screen.getByRole('button', {name: 'Company'});
        const logo = screen.getByRole('link', {name: 'Example Library'});

        fireEvent.mouseOver(products);
        expect(await screen.findByRole('link', {name: /New Arrivals/})).toBeInTheDocument();

        fireEvent.mouseOut(products, {relatedTarget: logo});
        fireEvent.mouseOver(company);
        expect(
            await screen.findByRole('link', {name: /About Example Library/}),
        ).toBeInTheDocument();

        await waitForHoverTimeout();
        expect(screen.queryByRole('link', {name: /New Arrivals/})).not.toBeInTheDocument();
        expect(screen.getByRole('link', {name: /About Example Library/})).toBeInTheDocument();
    });

    test('does not toggle a desktop popup from a mouse click', () => {
        renderHeader();

        fireEvent.click(screen.getByRole('button', {name: 'Products'}));

        expect(screen.queryByRole('link', {name: /New Arrivals/})).not.toBeInTheDocument();
    });

    test('does not switch an open desktop popup from a mouse click', async () => {
        const user = userEvent.setup();
        renderHeader();

        const products = screen.getByRole('button', {name: 'Products'});

        products.focus();
        await user.keyboard('{Enter}');
        expect(await screen.findByRole('link', {name: /New Arrivals/})).toBeInTheDocument();

        await user.click(screen.getByRole('button', {name: 'Solutions'}));

        expect(screen.getByRole('link', {name: /New Arrivals/})).toBeInTheDocument();
        expect(screen.queryByRole('link', {name: /Solution Overview/})).not.toBeInTheDocument();
    });

    test('moves focus from a desktop trigger into its popup with ArrowDown', async () => {
        const user = userEvent.setup();
        renderHeader();

        const products = screen.getByRole('button', {name: 'Products'});

        products.focus();
        await user.keyboard('{ArrowDown}');

        const firstPopupLink = await screen.findByRole('link', {name: /New Arrivals/});
        expect(firstPopupLink).toHaveFocus();
        expect(firstPopupLink).toHaveAttribute('data-keyboard-focus', 'true');
    });

    test('does not open a desktop popup when tabbing to a trigger from a closed menu bar', async () => {
        const user = userEvent.setup();
        renderHeader();

        await user.tab();
        await user.tab();

        expect(screen.getByRole('button', {name: 'Products'})).toHaveFocus();
        expect(screen.queryByRole('link', {name: /New Arrivals/})).not.toBeInTheDocument();
    });

    test('switches desktop popup when tabbing across menu bar triggers', async () => {
        const user = userEvent.setup();
        renderHeader();

        const products = screen.getByRole('button', {name: 'Products'});
        const solutions = screen.getByRole('button', {name: 'Solutions'});

        products.focus();
        await user.keyboard('{Enter}');
        expect(await screen.findByRole('link', {name: /New Arrivals/})).toBeInTheDocument();

        await user.tab();

        expect(solutions).toHaveFocus();
        expect(products).toHaveAttribute('aria-expanded', 'false');
        expect(solutions).toHaveAttribute('aria-expanded', 'true');
        expect(screen.queryByRole('link', {name: /New Arrivals/})).not.toBeInTheDocument();
        expect(await screen.findByRole('link', {name: /Solution Overview/})).toBeInTheDocument();

        await user.keyboard('{Shift>}{Tab}{/Shift}');

        expect(products).toHaveFocus();
        expect(products).toHaveAttribute('aria-expanded', 'true');
        expect(solutions).toHaveAttribute('aria-expanded', 'false');
        expect(screen.queryByRole('link', {name: /Solution Overview/})).not.toBeInTheDocument();
        expect(await screen.findByRole('link', {name: /New Arrivals/})).toBeInTheDocument();
    });

    test('closes a desktop popup when tabbing from the menu bar trigger to a top-level link', async () => {
        const user = userEvent.setup();
        renderHeader();

        const solutions = screen.getByRole('button', {name: 'Solutions'});
        const pricing = screen.getByRole('link', {name: 'Pricing'});

        solutions.focus();
        await user.keyboard('{Enter}');
        expect(await screen.findByRole('link', {name: /Solution Overview/})).toBeInTheDocument();

        await user.tab();

        expect(pricing).toHaveFocus();
        expect(solutions).toHaveAttribute('aria-expanded', 'false');
        expect(screen.queryByRole('link', {name: /Solution Overview/})).not.toBeInTheDocument();
    });

    test('closes a desktop popup when tabbing from the menu bar to a header action', async () => {
        const user = userEvent.setup();
        renderHeader();

        const company = screen.getByRole('button', {name: 'Company'});
        const contactSales = screen.getByRole('link', {name: 'Contact sales'});

        company.focus();
        await user.keyboard('{Enter}');
        expect(
            await screen.findByRole('link', {name: /About Example Library/}),
        ).toBeInTheDocument();

        await user.tab();

        expect(contactSales).toHaveFocus();
        expect(company).toHaveAttribute('aria-expanded', 'false');
        expect(screen.queryByRole('link', {name: /About Example Library/})).not.toBeInTheDocument();
    });

    test('keeps Tab focus inside an open desktop popup', async () => {
        const user = userEvent.setup();
        renderHeader();

        const products = screen.getByRole('button', {name: 'Products'});

        products.focus();
        await user.keyboard('{ArrowDown}');

        const firstPopupLink = await screen.findByRole('link', {name: /New Arrivals/});
        const secondPopupLink = screen.getByRole('link', {name: /Staff Picks/});
        const lastPopupLink = screen.getByRole('link', {name: /Archive/});

        expect(firstPopupLink).toHaveFocus();

        await user.keyboard('{Tab}');
        expect(secondPopupLink).toHaveFocus();

        await user.keyboard('{Tab}');
        expect(lastPopupLink).toHaveFocus();

        await user.keyboard('{Tab}');
        expect(firstPopupLink).toHaveFocus();

        await user.keyboard('{Shift>}{Tab}{/Shift}');
        expect(lastPopupLink).toHaveFocus();
    });

    test('supports arrow navigation inside an open desktop popup', async () => {
        const user = userEvent.setup();
        renderHeader();

        const products = screen.getByRole('button', {name: 'Products'});

        products.focus();
        await user.keyboard('{ArrowDown}');

        const firstPopupLink = await screen.findByRole('link', {name: /New Arrivals/});
        const secondPopupLink = screen.getByRole('link', {name: /Staff Picks/});
        const lastPopupLink = screen.getByRole('link', {name: /Archive/});

        expect(firstPopupLink).toHaveFocus();

        await user.keyboard('{ArrowDown}');
        expect(secondPopupLink).toHaveFocus();

        await user.keyboard('{ArrowRight}');
        expect(lastPopupLink).toHaveFocus();

        await user.keyboard('{ArrowDown}');
        expect(firstPopupLink).toHaveFocus();

        await user.keyboard('{ArrowUp}');
        expect(lastPopupLink).toHaveFocus();

        await user.keyboard('{Home}');
        expect(firstPopupLink).toHaveFocus();

        await user.keyboard('{End}');
        expect(lastPopupLink).toHaveFocus();
    });

    test('closes a desktop popup with Escape and restores focus', async () => {
        const user = userEvent.setup();
        renderHeader();

        const products = screen.getByRole('button', {name: 'Products'});

        products.focus();
        await user.keyboard('{Enter}');
        expect(await screen.findByRole('link', {name: /New Arrivals/})).toBeInTheDocument();

        await user.keyboard('{Escape}');
        await waitFor(() =>
            expect(screen.queryByRole('link', {name: /New Arrivals/})).not.toBeInTheDocument(),
        );
        expect(products).toHaveFocus();
    });

    test('makes the login menu a keyboard-operable button', async () => {
        const user = userEvent.setup();
        renderHeader();

        const login = screen.getByRole('button', {name: 'Log in'});

        await user.tab();
        await user.tab();
        await user.tab();
        await user.tab();
        await user.tab();
        await user.tab();
        await user.tab();
        expect(login).toHaveFocus();

        await user.keyboard('{Enter}');
        expect(await screen.findByRole('link', {name: /Console/})).toBeInTheDocument();
        expect(login).toHaveAttribute('aria-expanded', 'true');
    });

    test('opens the login menu on hover', async () => {
        const user = userEvent.setup();
        renderHeader();

        await user.hover(screen.getByRole('button', {name: 'Log in'}));

        expect(await screen.findByRole('link', {name: /Console/})).toBeInTheDocument();
    });

    test('keeps the login menu open when hovering its content', async () => {
        const user = userEvent.setup();
        renderHeader();

        const login = screen.getByRole('button', {name: 'Log in'});

        await user.hover(login);
        const consoleLink = await screen.findByRole('link', {name: /Console/});

        fireEvent.mouseOut(login, {relatedTarget: consoleLink});
        await waitForHoverTimeout();

        expect(screen.getByRole('link', {name: /Console/})).toBeInTheDocument();
    });

    test('does not toggle the login menu from a mouse click', () => {
        renderHeader();

        fireEvent.click(screen.getByRole('button', {name: 'Log in'}));

        expect(screen.queryByRole('link', {name: /Console/})).not.toBeInTheDocument();
    });

    test('gives the mobile menu toggle an accessible name', async () => {
        const user = userEvent.setup();
        renderHeader();

        const openButton = screen.getByRole('button', {name: 'Open navigation menu'});

        await user.click(openButton);
        expect(openButton).toHaveAccessibleName('Close navigation menu');
        expect(openButton).toHaveAttribute('aria-expanded', 'true');
    });

    test('exposes expanded state on mobile expandable items', async () => {
        const user = userEvent.setup();
        renderHeader();

        const openButton = screen.getByRole('button', {name: 'Open navigation menu'});
        await user.click(openButton);

        const navigations = screen.getAllByRole('navigation');
        const mobileNavigation = navigations[navigations.length - 1];
        const products = within(mobileNavigation).getByRole('button', {name: 'Products'});
        expect(products).toHaveAttribute('aria-expanded', 'false');

        products.focus();
        await user.keyboard('[Space]');
        expect(products).toHaveAttribute('aria-expanded', 'true');
    });
});
