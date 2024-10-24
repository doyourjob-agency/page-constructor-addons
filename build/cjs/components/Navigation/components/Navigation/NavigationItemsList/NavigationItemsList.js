"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationItemsList = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const NavigationPopupItem_1 = require("../NavigationPopupItem/NavigationPopupItem");
const NavigationItemsList = ({ items, itemClassName, className, sizes, }) => {
    return (react_1.default.createElement(page_constructor_1.Row, { className: className }, items.map((item) => (react_1.default.createElement(NavigationPopupItem_1.NavigationPopupItem, Object.assign({}, item, { sizes: sizes, className: itemClassName, key: item.slug, hover: true }))))));
};
exports.NavigationItemsList = NavigationItemsList;
