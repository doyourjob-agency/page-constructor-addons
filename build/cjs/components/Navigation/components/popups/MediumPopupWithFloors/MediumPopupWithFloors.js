"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediumPopupWithFloors = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const gravity_ui_page_constructor_1 = require("@doyourjob/gravity-ui-page-constructor");
const cn_1 = require("../../../../../utils/cn");
const PopupGroup_1 = require("../components/PopupGroup/PopupGroup");
const b = (0, cn_1.block)('medium-popup-with-floors');
const DefaultItemSizes = {
    [gravity_ui_page_constructor_1.GridColumnSize.Lg]: 3,
    [gravity_ui_page_constructor_1.GridColumnSize.Sm]: 4,
    [gravity_ui_page_constructor_1.GridColumnSize.All]: 12,
};
const MediumPopupWithFloors = ({ data }) => {
    return (react_1.default.createElement("div", { className: b() }, data.groups.map((group, index) => (react_1.default.createElement(PopupGroup_1.PopupGroup, Object.assign({}, group, { key: group.title || group.url || index, sizes: DefaultItemSizes, withFixItems: true, withPadding: true }))))));
};
exports.MediumPopupWithFloors = MediumPopupWithFloors;
