"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargePopupGroup = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const cn_1 = require("../../../../../../utils/cn");
const NavigationItemsList_1 = require("../../../Navigation/NavigationItemsList/NavigationItemsList");
const LargeGroupPopupTitle_1 = require("../LargeGroupPopupTitle/LargeGroupPopupTitle");
const b = (0, cn_1.block)('large-popup-group');
const LargePopupGroup = (_a) => {
    var { section } = _a, group = tslib_1.__rest(_a, ["section"]);
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement(page_constructor_1.Row, null,
            react_1.default.createElement(page_constructor_1.Col, { className: b('title') },
                react_1.default.createElement(LargeGroupPopupTitle_1.LargeGroupPopupTitle, Object.assign({}, group)))),
        react_1.default.createElement("div", null,
            react_1.default.createElement(NavigationItemsList_1.NavigationItemsList, { items: group.items, section: section, className: b('items') }))));
};
exports.LargePopupGroup = LargePopupGroup;
