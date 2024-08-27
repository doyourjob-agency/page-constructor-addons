"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileNavigation = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const cn_1 = require("../../../../utils/cn");
const Header_1 = require("../../containers/Header/Header");
const ButtonsContainer_1 = require("../ButtonsContainer/ButtonsContainer");
const MobileNavigationItem_1 = require("./MobileNavigationItem/MobileNavigationItem");
const MobileNavigationPopup_1 = require("./MobileNavigationPopup/MobileNavigationPopup");
const b = (0, cn_1.block)('mobile-navigation');
const MobileNavigation = ({ isOpened, toogleOpen, isSearchOpen, data, buttons, onMenuScroll, customElements: { actions, right } = {}, }) => (react_1.default.createElement("div", { className: b() },
    react_1.default.createElement(uikit_1.Button, { view: "flat", size: "l", className: b('icon', { hidden: isSearchOpen }), onClick: (e) => {
            e.stopPropagation();
            toogleOpen(!isOpened);
        } },
        react_1.default.createElement(uikit_1.Icon, { data: isOpened ? icons_1.Xmark : icons_1.Bars, size: Header_1.MOBILE_ICON_SIZE })),
    react_1.default.createElement(MobileNavigationPopup_1.MobileNavigationPopup, { isOpened: isOpened, onClose: () => toogleOpen(false), onMenuScroll: onMenuScroll },
        react_1.default.createElement("nav", null,
            react_1.default.createElement("ul", { className: b() }, data.map((item) => (react_1.default.createElement("li", { className: b(), key: item.title },
                react_1.default.createElement(MobileNavigationItem_1.MobileNavigationItem, { data: item }))))),
            buttons && (react_1.default.createElement(ButtonsContainer_1.ButtonsContainer, { buttons: buttons, className: b('buttons'), width: "max", direction: ButtonsContainer_1.ButtonsContainerDirection.Column }, actions)),
            right))));
exports.MobileNavigation = MobileNavigation;
