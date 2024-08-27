"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = exports.MOBILE_ICON_SIZE = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const icons_1 = require("@gravity-ui/icons");
const page_constructor_1 = require("@gravity-ui/page-constructor");
const uikit_1 = require("@gravity-ui/uikit");
const cn_1 = require("../../../../utils/cn");
const ButtonsContainer_1 = require("../../components/ButtonsContainer/ButtonsContainer");
const LangSwitch_1 = require("../../components/LangSwitch");
const Logo_1 = tslib_1.__importDefault(require("../../components/Logo/Logo"));
const MobileNavigation_1 = require("../../components/MobileNavigation/MobileNavigation");
const Navigation_1 = require("../../components/Navigation/Navigation");
const analytics_1 = require("../../contexts/analytics");
const mobile_1 = require("../../contexts/mobile");
const route_change_1 = require("../../contexts/route-change");
const theme_1 = require("../../contexts/theme");
const b = (0, cn_1.block)('header');
exports.MOBILE_ICON_SIZE = 24;
const Header = ({ data, customElements, setupRouteChangeHandler, renderSearch, className, }) => {
    const { logo, langSwitchItems, buttons: buttonConfigs, navigation } = data;
    const headerRef = (0, react_1.useRef)(null);
    const [withBackground, setWithBackground] = (0, react_1.useState)(false);
    const [withShadow, setWithShadow] = (0, react_1.useState)(true);
    const [isSearchMode, setIsSearchMode] = (0, react_1.useState)(false);
    const [isPopupOpen, setIsPopupOpen] = (0, react_1.useState)(false);
    const [isMobileNavigationOpen, setIsMobileNavigationOpen] = (0, react_1.useState)(false);
    const [pageHasScroll, setPageHasScroll] = (0, react_1.useState)(false);
    const langSwitchActiveItem = (0, react_1.useMemo)(() => langSwitchItems === null || langSwitchItems === void 0 ? void 0 : langSwitchItems.find(({ active }) => active), [langSwitchItems]);
    const { left, right, actions } = customElements || {};
    const analytics = (0, react_1.useContext)(analytics_1.AnalyticsContext);
    const isMobile = (0, react_1.useContext)(mobile_1.MobileContext);
    const theme = (0, react_1.useContext)(theme_1.ThemeContext);
    const buttons = buttonConfigs === null || buttonConfigs === void 0 ? void 0 : buttonConfigs.map((_a) => {
        var { analyticsEvents } = _a, button = tslib_1.__rest(_a, ["analyticsEvents"]);
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
    const toggleSearch = (0, react_1.useCallback)((isActive) => setIsSearchMode(isActive), []);
    const handleOpenPopup = (0, react_1.useCallback)(() => {
        setIsPopupOpen(true);
    }, []);
    const handleClosePopup = (0, react_1.useCallback)(() => {
        setIsPopupOpen(false);
    }, []);
    const toggleMobileNavigationPopup = (0, react_1.useCallback)((isOpened) => {
        setIsMobileNavigationOpen(isOpened);
        // disable header's shadow on mobile with opened menu and if page was scrolled
        if (isOpened && pageHasScroll) {
            setWithShadow(false);
        }
    }, [pageHasScroll]);
    const onMenuScroll = (0, react_1.useCallback)((scrollTop) => {
        // enable header's shadow on mobile if mobile menu started to scroll
        setWithShadow(scrollTop > 0);
        if (!pageHasScroll) {
            setWithBackground(scrollTop > 0);
        }
    }, [pageHasScroll]);
    (0, react_1.useEffect)(() => {
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
    (0, react_1.useEffect)(() => setupRouteChangeHandler === null || setupRouteChangeHandler === void 0 ? void 0 : setupRouteChangeHandler(() => {
        handleClosePopup();
        setIsMobileNavigationOpen(false);
    }), [setupRouteChangeHandler, handleClosePopup]);
    return (react_1.default.createElement(route_change_1.RouteChangeHandlerContext.Provider, { value: setupRouteChangeHandler },
        react_1.default.createElement("header", { className: b({
                'with-background': withBackground,
                'with-shadow': withShadow,
                search: isSearchMode,
                'open-popup': isPopupOpen,
                'one-row': !navigation,
            }, className), ref: headerRef },
            react_1.default.createElement("div", { className: b('container') },
                react_1.default.createElement("div", { className: b('left') },
                    logo && (react_1.default.createElement(Logo_1.default, Object.assign({}, logo, { theme: theme, className: b('logo'), imageClassName: b('logo-img') }))),
                    isMobile && (react_1.default.createElement(uikit_1.Button, { view: "flat", size: "l", className: b('back') },
                        react_1.default.createElement(uikit_1.Icon, { data: icons_1.ChevronLeft, size: exports.MOBILE_ICON_SIZE }))),
                    left),
                react_1.default.createElement("div", { className: b('right') },
                    react_1.default.createElement("div", { className: b('icons-container') },
                        renderSearch && renderSearch({ onActiveToggle: toggleSearch }),
                        langSwitchItems && (react_1.default.createElement(LangSwitch_1.LangSwitch, { text: langSwitchActiveItem === null || langSwitchActiveItem === void 0 ? void 0 : langSwitchActiveItem.title, iconClassName: b('icon'), isSearchMode: isSearchMode, items: langSwitchItems, showText: !isMobile, isMobile: isMobile }))),
                    showButtonsContainer && (react_1.default.createElement(ButtonsContainer_1.ButtonsContainer, { buttons: buttons, className: b('buttons') }, actions)),
                    right,
                    navigation ? (react_1.default.createElement(MobileNavigation_1.MobileNavigation, { toogleOpen: toggleMobileNavigationPopup, isOpened: isMobileNavigationOpen, isSearchOpen: isSearchMode, data: navigation, buttons: buttons, onMenuScroll: onMenuScroll, popupClassName: b('user-popup'), customElements: customElements })) : null)),
            navigation ? (react_1.default.createElement("div", { className: b('scroller') },
                react_1.default.createElement(page_constructor_1.OverflowScroller, { arrowClassName: b('scroll-arrow'), arrowSize: 14 },
                    react_1.default.createElement(Navigation_1.Navigation, { data: navigation, headerRef: headerRef, handleOpenPopup: handleOpenPopup, handleClosePopup: handleClosePopup, withBackground: withBackground })))) : null)));
};
exports.Header = Header;
