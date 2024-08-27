"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationItem = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const useIsCurrentPage_1 = require("../../../../../hooks/useIsCurrentPage");
const cn_1 = require("../../../../../utils/cn");
const constants_1 = require("../../../constants");
const analytics_1 = require("../../../contexts/analytics");
const location_1 = require("../../../contexts/location");
const route_change_1 = require("../../../contexts/route-change");
const models_1 = require("../../../models");
const b = (0, cn_1.block)('navigation-item');
const NavigationItem = ({ item, isActive, handleActiveTab, handleOpenPopup, handleClosePopup, index, children, tooltipId, }) => {
    const { type, title, link, section } = item;
    const setupRouteChangeHandler = (0, react_1.useContext)(route_change_1.RouteChangeHandlerContext);
    const { hostname } = (0, react_1.useContext)(location_1.LocationContext);
    const linkProps = link && (0, page_constructor_1.getLinkProps)(link === null || link === void 0 ? void 0 : link.url, hostname, link === null || link === void 0 ? void 0 : link.target);
    const isPopupExist = type === models_1.NavigationItemType.LargePopup ||
        type === models_1.NavigationItemType.MediumPopup ||
        type === models_1.NavigationItemType.MediumPopupWithCategories;
    const { sendEvents } = (0, react_1.useContext)(analytics_1.AnalyticsContext) || {};
    const handleMouseEnter = (0, react_1.useCallback)(() => {
        handleActiveTab(index);
        if (isPopupExist) {
            handleOpenPopup();
        }
    }, [handleActiveTab, handleOpenPopup, index, isPopupExist]);
    const handleMouseLeave = (0, react_1.useCallback)(() => {
        if (isPopupExist) {
            handleClosePopup();
        }
        handleActiveTab(constants_1.NO_MENU_TAB_SELECTED);
    }, [handleActiveTab, handleClosePopup, isPopupExist]);
    const handleOnClick = (0, react_1.useCallback)(() => {
        sendEvents === null || sendEvents === void 0 ? void 0 : sendEvents([
            {
                name: models_1.AnalyticsEventType.PopupItemClick,
                params: { url: link === null || link === void 0 ? void 0 : link.url, section },
            },
        ]);
    }, [link === null || link === void 0 ? void 0 : link.url, section, sendEvents]);
    const isCurrentPage = (0, useIsCurrentPage_1.useIsCurrentPage)(link === null || link === void 0 ? void 0 : link.url);
    (0, react_1.useEffect)(() => setupRouteChangeHandler === null || setupRouteChangeHandler === void 0 ? void 0 : setupRouteChangeHandler(() => {
        handleMouseLeave();
    }), [handleMouseLeave, setupRouteChangeHandler]);
    return (react_1.default.createElement("li", { key: title, className: b({}), onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
        type === models_1.NavigationItemType.Link ? (react_1.default.createElement("a", Object.assign({ className: b('text', { active: isActive }), href: link === null || link === void 0 ? void 0 : link.url }, linkProps, { onClick: handleOnClick, "aria-current": isCurrentPage ? 'page' : undefined }), title)) : (react_1.default.createElement("button", { className: b('text', { active: isActive, cursor: 'default' }), onClick: handleMouseEnter, "aria-expanded": isActive, "aria-controls": tooltipId }, title)),
        children));
};
exports.NavigationItem = NavigationItem;
