import { __rest } from "tslib";
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState, } from 'react';
import { OverflowScroller } from '@doyourjob/gravity-ui-page-constructor';
import { ChevronLeft } from '@gravity-ui/icons';
import { Button, Icon } from '@gravity-ui/uikit';
import { block } from '../../../../utils/cn';
import { ButtonsContainer } from '../../components/ButtonsContainer/ButtonsContainer';
import { LangSwitch } from '../../components/LangSwitch';
import Logo from '../../components/Logo/Logo';
import { MobileNavigation } from '../../components/MobileNavigation/MobileNavigation';
import { Navigation } from '../../components/Navigation/Navigation';
import { AnalyticsContext } from '../../contexts/analytics';
import { MobileContext } from '../../contexts/mobile';
import { RouteChangeHandlerContext } from '../../contexts/route-change';
import { ThemeContext } from '../../contexts/theme';
import './Header.css';
const b = block('header');
export const MOBILE_ICON_SIZE = 24;
export const Header = ({ data, customElements, setupRouteChangeHandler, renderSearch, className, }) => {
    const { logo, langSwitchItems, buttons: buttonConfigs, navigation } = data;
    const headerRef = useRef(null);
    const [withBackground, setWithBackground] = useState(false);
    const [withShadow, setWithShadow] = useState(true);
    const [isSearchMode, setIsSearchMode] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);
    const [pageHasScroll, setPageHasScroll] = useState(false);
    const langSwitchActiveItem = useMemo(() => langSwitchItems === null || langSwitchItems === void 0 ? void 0 : langSwitchItems.find(({ active }) => active), [langSwitchItems]);
    const { left, right, actions } = customElements || {};
    const analytics = useContext(AnalyticsContext);
    const isMobile = useContext(MobileContext);
    const theme = useContext(ThemeContext);
    const buttons = buttonConfigs === null || buttonConfigs === void 0 ? void 0 : buttonConfigs.map((_a) => {
        var { analyticsEvents } = _a, button = __rest(_a, ["analyticsEvents"]);
        return (Object.assign(Object.assign({}, button), { onClick: analyticsEvents
                ? () => {
                    var _a;
                    (_a = analytics === null || analytics === void 0 ? void 0 : analytics.sendEvents) === null || _a === void 0 ? void 0 : _a.call(analytics, Array.isArray(analyticsEvents) ? analyticsEvents : [analyticsEvents]);
                }
                : undefined }));
    });
    const showButtonsContainer = isMobile
        ? !navigation && buttons && buttons.length === 1
        : Boolean(buttons);
    const toggleSearch = useCallback((isActive) => setIsSearchMode(isActive), []);
    const handleOpenPopup = useCallback(() => {
        setIsPopupOpen(true);
    }, []);
    const handleClosePopup = useCallback(() => {
        setIsPopupOpen(false);
    }, []);
    const toggleMobileNavigationPopup = useCallback((isOpened) => {
        setIsMobileNavigationOpen(isOpened);
        // disable header's shadow on mobile with opened menu and if page was scrolled
        if (isOpened && pageHasScroll) {
            setWithShadow(false);
        }
    }, [pageHasScroll]);
    const onMenuScroll = useCallback((scrollTop) => {
        // enable header's shadow on mobile if mobile menu started to scroll
        setWithShadow(scrollTop > 0);
        if (!pageHasScroll) {
            setWithBackground(scrollTop > 0);
        }
    }, [pageHasScroll]);
    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop === 0 && withBackground) {
                setWithBackground(false);
            }
            else if (scrollTop > 0 && !withBackground) {
                setWithBackground(true);
            }
            if (scrollTop === 0 && pageHasScroll) {
                setPageHasScroll(false);
            }
            else if (scrollTop > 0 && !pageHasScroll) {
                setPageHasScroll(true);
            }
        };
        window.addEventListener('scroll', onScroll);
        onScroll();
    });
    useEffect(() => setupRouteChangeHandler === null || setupRouteChangeHandler === void 0 ? void 0 : setupRouteChangeHandler(() => {
        handleClosePopup();
        setIsMobileNavigationOpen(false);
    }), [setupRouteChangeHandler, handleClosePopup]);
    return (React.createElement(RouteChangeHandlerContext.Provider, { value: setupRouteChangeHandler },
        React.createElement("header", { className: b({
                'with-background': withBackground,
                'with-shadow': withShadow,
                search: isSearchMode,
                'open-popup': isPopupOpen,
                'one-row': !navigation,
            }, className), ref: headerRef },
            React.createElement("div", { className: b('container') },
                React.createElement("div", { className: b('left') },
                    logo && (React.createElement(Logo, Object.assign({}, logo, { theme: theme, className: b('logo'), imageClassName: b('logo-img') }))),
                    isMobile && (React.createElement(Button, { view: "flat", size: "l", className: b('back') },
                        React.createElement(Icon, { data: ChevronLeft, size: MOBILE_ICON_SIZE }))),
                    left),
                React.createElement("div", { className: b('right') },
                    React.createElement("div", { className: b('icons-container') },
                        renderSearch && renderSearch({ onActiveToggle: toggleSearch }),
                        langSwitchItems && (React.createElement(LangSwitch, { text: langSwitchActiveItem === null || langSwitchActiveItem === void 0 ? void 0 : langSwitchActiveItem.title, iconClassName: b('icon'), isSearchMode: isSearchMode, items: langSwitchItems, showText: !isMobile, isMobile: isMobile }))),
                    showButtonsContainer && (React.createElement(ButtonsContainer, { buttons: buttons, className: b('buttons') }, actions)),
                    right,
                    navigation ? (React.createElement(MobileNavigation, { toogleOpen: toggleMobileNavigationPopup, isOpened: isMobileNavigationOpen, isSearchOpen: isSearchMode, data: navigation, buttons: buttons, onMenuScroll: onMenuScroll, popupClassName: b('user-popup'), customElements: customElements })) : null)),
            navigation ? (React.createElement("div", { className: b('scroller') },
                React.createElement(OverflowScroller, { arrowClassName: b('scroll-arrow'), arrowSize: 14 },
                    React.createElement(Navigation, { data: navigation, headerRef: headerRef, handleOpenPopup: handleOpenPopup, handleClosePopup: handleClosePopup, withBackground: withBackground })))) : null)));
};
