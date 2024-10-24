import React, { useCallback, useEffect, useState } from 'react';
import { block } from '../../../../utils/cn';
import { NO_MENU_TAB_SELECTED, SWITCH_MENU_TAB_TIMEOUT } from '../../constants';
import { NavigationSectionContext } from '../../contexts/navigation-section';
import { NavigationItemType, } from '../../models';
import { LargePopup } from '../popups/LargePopup/LargePopup';
import { MediumPopup } from '../popups/MediumPopup/MediumPopup';
import { MediumPopupWithCategories } from '../popups/MediumPopupWithCategories/MediumPopupWithCategories';
import { MediumPopupWithFloors } from '../popups/MediumPopupWithFloors/MediumPopupWithFloors';
import { NavigationItem } from './NavigationItem/NavigationItem';
import { NavigationPopup } from './NavigationPopup/NavigationPopup';
import './Navigation.css';
const b = block('navigation');
const tooltipPrefixId = 'navigation-item-key';
const getPopupContent = (sectionData) => {
    const { type, data } = sectionData;
    switch (type) {
        case NavigationItemType.LargePopup:
            return React.createElement(LargePopup, Object.assign({}, sectionData));
        case NavigationItemType.MediumPopup:
            return React.createElement(MediumPopup, { data: data });
        case NavigationItemType.MediumPopupWithCategories:
            return React.createElement(MediumPopupWithCategories, { data: data });
        case NavigationItemType.MediumPopupWithFloors:
            return React.createElement(MediumPopupWithFloors, { data: data });
        default:
            return null;
    }
};
export const Navigation = ({ data, headerRef, handleOpenPopup, handleClosePopup, withBackground, setupRouteChangeHandler, }) => {
    const [activeTab, setActiveTab] = useState(NO_MENU_TAB_SELECTED);
    const [pretendentActiveTab, setPretendentAciveTab] = useState(NO_MENU_TAB_SELECTED);
    const [previouslyFocusedElement, setPreviouslyFocusedElement] = useState(null);
    const handleActiveTab = useCallback((currentIndex) => {
        setPreviouslyFocusedElement(document.activeElement);
        setPretendentAciveTab(currentIndex);
    }, []);
    const onEscapeKeyDown = useCallback((event) => {
        if (event.key === 'Escape') {
            setActiveTab(NO_MENU_TAB_SELECTED);
            setPretendentAciveTab(NO_MENU_TAB_SELECTED);
            previouslyFocusedElement === null || previouslyFocusedElement === void 0 ? void 0 : previouslyFocusedElement.focus();
        }
    }, [previouslyFocusedElement]);
    useEffect(() => setupRouteChangeHandler === null || setupRouteChangeHandler === void 0 ? void 0 : setupRouteChangeHandler(() => {
        handleActiveTab(NO_MENU_TAB_SELECTED);
    }), [setupRouteChangeHandler, handleActiveTab]);
    useEffect(() => {
        const timerId = setTimeout(() => {
            setActiveTab(pretendentActiveTab);
        }, SWITCH_MENU_TAB_TIMEOUT);
        return () => clearTimeout(timerId);
    }, [activeTab, pretendentActiveTab]);
    useEffect(() => {
        document.addEventListener('keydown', onEscapeKeyDown);
        return () => {
            document.removeEventListener('keydown', onEscapeKeyDown);
        };
    }, [onEscapeKeyDown]);
    return (React.createElement("nav", null,
        React.createElement("ul", { className: b() }, data.map((item, i) => {
            const { type, section } = item;
            const isMediumPopup = type === NavigationItemType.MediumPopup ||
                type === NavigationItemType.MediumPopupWithCategories;
            const popupClassName = isMediumPopup ? b('popup', { medium: true }) : undefined;
            const uniqId = `${tooltipPrefixId}-${i}`;
            return (React.createElement(NavigationSectionContext.Provider, { value: section, key: item.title },
                React.createElement(NavigationItem, { item: item, handleActiveTab: handleActiveTab, handleClosePopup: handleClosePopup, handleOpenPopup: handleOpenPopup, index: i, isActive: activeTab === i, tooltipId: uniqId }, activeTab === i && type !== NavigationItemType.Link && (React.createElement(NavigationPopup, { withBackground: withBackground, headerRef: headerRef, className: popupClassName, id: uniqId }, getPopupContent(item))))));
        }))));
};
