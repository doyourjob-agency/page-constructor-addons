"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigation = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const cn_1 = require("../../../../utils/cn");
const constants_1 = require("../../constants");
const navigation_section_1 = require("../../contexts/navigation-section");
const models_1 = require("../../models");
const LargePopup_1 = require("../popups/LargePopup/LargePopup");
const MediumPopup_1 = require("../popups/MediumPopup/MediumPopup");
const MediumPopupWithCategories_1 = require("../popups/MediumPopupWithCategories/MediumPopupWithCategories");
const NavigationItem_1 = require("./NavigationItem/NavigationItem");
const NavigationPopup_1 = require("./NavigationPopup/NavigationPopup");
const b = (0, cn_1.block)('navigation');
const tooltipPrefixId = 'navigation-item-key';
const getPopupContent = (sectionData) => {
    const { type, data } = sectionData;
    switch (type) {
        case models_1.NavigationItemType.LargePopup:
            return react_1.default.createElement(LargePopup_1.LargePopup, Object.assign({}, sectionData));
        case models_1.NavigationItemType.MediumPopup:
            return react_1.default.createElement(MediumPopup_1.MediumPopup, { data: data });
        case models_1.NavigationItemType.MediumPopupWithCategories:
            return react_1.default.createElement(MediumPopupWithCategories_1.MediumPopupWithCategories, { data: data });
        default:
            return null;
    }
};
const Navigation = ({ data, headerRef, handleOpenPopup, handleClosePopup, withBackground, setupRouteChangeHandler, }) => {
    const [activeTab, setActiveTab] = (0, react_1.useState)(constants_1.NO_MENU_TAB_SELECTED);
    const [pretendentActiveTab, setPretendentAciveTab] = (0, react_1.useState)(constants_1.NO_MENU_TAB_SELECTED);
    const [previouslyFocusedElement, setPreviouslyFocusedElement] = (0, react_1.useState)(null);
    const handleActiveTab = (0, react_1.useCallback)((currentIndex) => {
        setPreviouslyFocusedElement(document.activeElement);
        setPretendentAciveTab(currentIndex);
    }, []);
    const onEscapeKeyDown = (0, react_1.useCallback)((event) => {
        if (event.key === 'Escape') {
            setActiveTab(constants_1.NO_MENU_TAB_SELECTED);
            setPretendentAciveTab(constants_1.NO_MENU_TAB_SELECTED);
            previouslyFocusedElement === null || previouslyFocusedElement === void 0 ? void 0 : previouslyFocusedElement.focus();
        }
    }, [previouslyFocusedElement]);
    (0, react_1.useEffect)(() => setupRouteChangeHandler === null || setupRouteChangeHandler === void 0 ? void 0 : setupRouteChangeHandler(() => {
        handleActiveTab(constants_1.NO_MENU_TAB_SELECTED);
    }), [setupRouteChangeHandler, handleActiveTab]);
    (0, react_1.useEffect)(() => {
        const timerId = setTimeout(() => {
            setActiveTab(pretendentActiveTab);
        }, constants_1.SWITCH_MENU_TAB_TIMEOUT);
        return () => clearTimeout(timerId);
    }, [activeTab, pretendentActiveTab]);
    (0, react_1.useEffect)(() => {
        document.addEventListener('keydown', onEscapeKeyDown);
        return () => {
            document.removeEventListener('keydown', onEscapeKeyDown);
        };
    }, [onEscapeKeyDown]);
    return (react_1.default.createElement("nav", null,
        react_1.default.createElement("ul", { className: b() }, data.map((item, i) => {
            const { type, section } = item;
            const isMediumPopup = type === models_1.NavigationItemType.MediumPopup ||
                type === models_1.NavigationItemType.MediumPopupWithCategories;
            const popupClassName = isMediumPopup ? b('popup', { medium: true }) : undefined;
            const uniqId = `${tooltipPrefixId}-${i}`;
            return (react_1.default.createElement(navigation_section_1.NavigationSectionContext.Provider, { value: section, key: item.title },
                react_1.default.createElement(NavigationItem_1.NavigationItem, { item: item, handleActiveTab: handleActiveTab, handleClosePopup: handleClosePopup, handleOpenPopup: handleOpenPopup, index: i, isActive: activeTab === i, tooltipId: uniqId }, activeTab === i && type !== models_1.NavigationItemType.Link && (react_1.default.createElement(NavigationPopup_1.NavigationPopup, { withBackground: withBackground, headerRef: headerRef, className: popupClassName, id: uniqId }, getPopupContent(item))))));
        }))));
};
exports.Navigation = Navigation;
