import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react';

import {
    ClassNameProps,
    Button as PCButton,
    getLinkProps,
} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../utils/cn';

import {LoginButton} from './components/LoginButton/LoginButton';
import {MobileNavigation} from './components/MobileNavigation/MobileNavigation';
import {Navigation} from './components/Navigation/Navigation';
import {RouteChangeHandlerContext} from './contexts/route-change';
import {NavigationData, SetupRouteChangeHandler} from './models';

import './NewHeader.scss';

const b = block('new-header');

export const MOBILE_ICON_SIZE = 24;

export interface NewHeaderProps extends ClassNameProps {
    data: NavigationData;
    // TODO: remove when search suggest will be opensourced
    renderSearch?: (props: {onActiveToggle: (isActive: boolean) => void}) => ReactNode;
    setupRouteChangeHandler?: SetupRouteChangeHandler;
    scrollOffset?: number;
}

export const NewHeader = ({
    data,
    setupRouteChangeHandler,
    renderSearch,
    className,
    scrollOffset = 0,
}: NewHeaderProps) => {
    const {logo, buttons, left, right, mobile, login} = data;
    const headerRef = useRef<HTMLDivElement>(null);
    const [withBackground, setWithBackground] = useState(false);
    const [withShadow, setWithShadow] = useState(true);
    const [isSearchMode, setIsSearchMode] = useState(false);
    const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);
    const [pageHasScroll, setPageHasScroll] = useState(false);

    const showButtonsContainer = Boolean(buttons);

    const toggleSearch = useCallback((isActive: boolean) => setIsSearchMode(isActive), []);

    const toggleMobileNavigationPopup = useCallback(
        (isOpened: boolean) => {
            setIsMobileNavigationOpen(isOpened);

            // disable header's shadow on mobile with opened menu and if page was scrolled
            if (isOpened && pageHasScroll) {
                setWithShadow(false);
            }
        },
        [pageHasScroll],
    );

    const onMenuScroll = useCallback(
        (scrollTop: number) => {
            // enable header's shadow on mobile if mobile menu started to scroll
            setWithShadow(scrollTop > 0);

            if (!pageHasScroll) {
                setWithBackground(scrollTop > 0);
            }
        },
        [pageHasScroll],
    );

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.pageYOffset;

            const shouldShowBg = scrollTop > scrollOffset;
            if (withBackground !== shouldShowBg) {
                setWithBackground(shouldShowBg);
            }

            if (scrollTop === 0 && pageHasScroll) {
                setPageHasScroll(false);
            } else if (scrollTop > 0 && !pageHasScroll) {
                setPageHasScroll(true);
            }
        };
        window.addEventListener('scroll', onScroll);
        onScroll();
    });

    useEffect(
        () =>
            setupRouteChangeHandler?.(() => {
                setIsMobileNavigationOpen(false);
            }),
        [setupRouteChangeHandler],
    );

    return (
        <RouteChangeHandlerContext.Provider value={setupRouteChangeHandler}>
            <header
                className={b(
                    {
                        search: isSearchMode,
                    },
                    className,
                )}
                ref={headerRef}
            >
                <div
                    className={b('container', {
                        'with-background': withBackground,
                        'with-shadow': withShadow,
                    })}
                >
                    <div className={b('left')}>
                        {logo && (
                            <a
                                href={logo.href}
                                className={b('logo')}
                                {...getLinkProps(logo.href || '')}
                            >
                                {logo.src && (
                                    <img className={b('logo-img')} alt={logo.alt} src={logo.src} />
                                )}
                            </a>
                        )}
                        {left ? (
                            <div className={b('navigation')}>
                                <Navigation data={left} headerRef={headerRef} />
                            </div>
                        ) : null}
                    </div>
                    <div className={b('right')}>
                        {right ? (
                            <div className={b('navigation')}>
                                <Navigation data={right} headerRef={headerRef} />
                            </div>
                        ) : null}
                        <div className={b('icons-container')}>
                            {renderSearch && renderSearch({onActiveToggle: toggleSearch})}
                        </div>
                        {showButtonsContainer &&
                            buttons?.map((button) => (
                                <PCButton {...button} size="l" key={button.text} />
                            ))}
                        {login && <LoginButton data={login} headerRef={headerRef} />}
                        {mobile ? (
                            <MobileNavigation
                                toogleOpen={toggleMobileNavigationPopup}
                                isOpened={isMobileNavigationOpen}
                                isSearchOpen={isSearchMode}
                                data={mobile}
                                buttons={buttons}
                                onMenuScroll={onMenuScroll}
                                popupClassName={b('user-popup')}
                            />
                        ) : null}
                    </div>
                </div>
            </header>
        </RouteChangeHandlerContext.Provider>
    );
};
