import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react';

import {ClassNameProps, Button as PCButton} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../utils/cn';

import {NHLoginButton} from './components/NHLoginButton/NHLoginButton';
import {NHLogo} from './components/NHLogo/NHLogo';
import {NHMobileNavigation} from './components/NHMobileNavigation/NHMobileNavigation';
import {NHNavigation} from './components/NHNavigation/NHNavigation';
import {RouteChangeHandlerContext} from './contexts/route-change';
import {NHNavigationData, SetupRouteChangeHandler} from './models';

import './NewHeader.scss';

const b = block('new-header');

export const MOBILE_ICON_SIZE = 24;

export interface NewHeaderProps extends ClassNameProps {
    data: NHNavigationData;
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
    const {logo, buttons, left, right, login} = data;
    const headerRef = useRef<HTMLDivElement>(null);
    const [withBackground, setWithBackground] = useState(false);
    const [isSearchMode, setIsSearchMode] = useState(false);
    const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);
    const [pageHasScroll, setPageHasScroll] = useState(false);

    const showButtonsContainer = Boolean(buttons);

    const toggleSearch = useCallback((isActive: boolean) => setIsSearchMode(isActive), []);

    const toggleMobileNavigationPopup = useCallback((isOpened: boolean) => {
        setIsMobileNavigationOpen(isOpened);
    }, []);

    const onMenuScroll = useCallback(
        (scrollTop: number) => {
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
                        'with-background': withBackground || isMobileNavigationOpen,
                    },
                    className,
                )}
                ref={headerRef}
            >
                <div className={b('container')}>
                    <div className={b('left')}>
                        {logo && <NHLogo data={logo} />}
                        {left ? (
                            <div className={b('navigation')}>
                                <NHNavigation data={left} headerRef={headerRef} />
                            </div>
                        ) : null}
                    </div>
                    <div className={b('right')}>
                        {right ? (
                            <div className={b('navigation')}>
                                <NHNavigation data={right} headerRef={headerRef} />
                            </div>
                        ) : null}
                        <div className={b('wrap')}>
                            {renderSearch && (
                                <div className={b('icons-container')}>
                                    {renderSearch({onActiveToggle: toggleSearch})}
                                </div>
                            )}
                            <div className={b('buttons')}>
                                {showButtonsContainer &&
                                    buttons?.map((button, index) => (
                                        <PCButton
                                            {...button}
                                            className={b('button')}
                                            size="l"
                                            key={index}
                                        />
                                    ))}
                                {login && <NHLoginButton data={login} headerRef={headerRef} />}
                            </div>
                            <NHMobileNavigation
                                toogleOpen={toggleMobileNavigationPopup}
                                isOpened={isMobileNavigationOpen}
                                isSearchOpen={isSearchMode}
                                data={data}
                                onMenuScroll={onMenuScroll}
                                popupClassName={b('user-popup')}
                            />
                        </div>
                    </div>
                </div>
            </header>
        </RouteChangeHandlerContext.Provider>
    );
};
