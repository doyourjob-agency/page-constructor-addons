import React, { useCallback, useContext, useEffect } from 'react';
import { getLinkProps } from '@doyourjob/gravity-ui-page-constructor';
import { useIsCurrentPage } from '../../../../../hooks/useIsCurrentPage';
import { block } from '../../../../../utils/cn';
import { NO_MENU_TAB_SELECTED } from '../../../constants';
import { AnalyticsContext } from '../../../contexts/analytics';
import { LocationContext } from '../../../contexts/location';
import { RouteChangeHandlerContext } from '../../../contexts/route-change';
import { AnalyticsEventType, NavigationItemType } from '../../../models';
import './NavigationItem.css';
const b = block('navigation-item');
export const NavigationItem = ({ item, isActive, handleActiveTab, handleOpenPopup, handleClosePopup, index, children, tooltipId, }) => {
    const { type, title, link, section } = item;
    const setupRouteChangeHandler = useContext(RouteChangeHandlerContext);
    const { hostname } = useContext(LocationContext);
    const linkProps = link && getLinkProps(link === null || link === void 0 ? void 0 : link.url, hostname, link === null || link === void 0 ? void 0 : link.target);
    const isPopupExist = type === NavigationItemType.LargePopup ||
        type === NavigationItemType.MediumPopup ||
        type === NavigationItemType.MediumPopupWithCategories;
    const { sendEvents } = useContext(AnalyticsContext) || {};
    const handleMouseEnter = useCallback(() => {
        handleActiveTab(index);
        if (isPopupExist) {
            handleOpenPopup();
        }
    }, [handleActiveTab, handleOpenPopup, index, isPopupExist]);
    const handleMouseLeave = useCallback(() => {
        if (isPopupExist) {
            handleClosePopup();
        }
        handleActiveTab(NO_MENU_TAB_SELECTED);
    }, [handleActiveTab, handleClosePopup, isPopupExist]);
    const handleOnClick = useCallback(() => {
        sendEvents === null || sendEvents === void 0 ? void 0 : sendEvents([
            {
                name: AnalyticsEventType.PopupItemClick,
                params: { url: link === null || link === void 0 ? void 0 : link.url, section },
            },
        ]);
    }, [link === null || link === void 0 ? void 0 : link.url, section, sendEvents]);
    const isCurrentPage = useIsCurrentPage(link === null || link === void 0 ? void 0 : link.url);
    useEffect(() => setupRouteChangeHandler === null || setupRouteChangeHandler === void 0 ? void 0 : setupRouteChangeHandler(() => {
        handleMouseLeave();
    }), [handleMouseLeave, setupRouteChangeHandler]);
    if (type === NavigationItemType.Link) {
        return (React.createElement("li", { key: title, className: b({ disable: !(link === null || link === void 0 ? void 0 : link.url) }), onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement("a", Object.assign({ className: b('text', { active: isActive }), href: link === null || link === void 0 ? void 0 : link.url }, linkProps, { onClick: handleOnClick, "aria-current": isCurrentPage ? 'page' : undefined }), title),
            children));
    }
    return (React.createElement("li", { key: title, className: b({}), onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
        React.createElement("button", { className: b('text', { active: isActive, cursor: 'default' }), onClick: handleMouseEnter, "aria-expanded": isActive, "aria-controls": tooltipId }, title),
        children));
};
