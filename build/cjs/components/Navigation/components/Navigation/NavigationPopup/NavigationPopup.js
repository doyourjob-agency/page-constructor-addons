"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationPopup = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const react_dom_1 = tslib_1.__importDefault(require("react-dom"));
const FocusTrap_1 = require("../../../../../utils/FocusTrap");
const cn_1 = require("../../../../../utils/cn");
const b = (0, cn_1.block)('navigation-popup');
const NavigationPopup = ({ withBackground, headerRef, children, className, id, }) => {
    return (headerRef === null || headerRef === void 0 ? void 0 : headerRef.current)
        ? react_dom_1.default.createPortal(react_1.default.createElement(FocusTrap_1.FocusTrap, { enabled: true },
            react_1.default.createElement("div", { 
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex: 0, className: b({ ['with-background']: withBackground }, className), id: id },
                react_1.default.createElement(page_constructor_1.Grid, { containerClass: b('grid-container') }, children))), headerRef.current)
        : null;
};
exports.NavigationPopup = NavigationPopup;
