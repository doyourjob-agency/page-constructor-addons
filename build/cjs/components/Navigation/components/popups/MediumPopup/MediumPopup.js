"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediumPopup = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const cn_1 = require("../../../../../utils/cn");
const NavigationPopupItem_1 = require("../../Navigation/NavigationPopupItem/NavigationPopupItem");
const b = (0, cn_1.block)('medium-popup');
const MediumPopup = ({ data }) => (react_1.default.createElement(page_constructor_1.Row, null,
    react_1.default.createElement(page_constructor_1.Col, { className: b() }, data.groups.map((dataItem) => dataItem.items.map((item) => (react_1.default.createElement(NavigationPopupItem_1.NavigationPopupItem, Object.assign({}, item, { key: item.title, hover: true, imageSize: dataItem.imageSize, sizes: {
            [page_constructor_1.GridColumnSize.Xl]: 3,
            [page_constructor_1.GridColumnSize.Md]: 4,
            [page_constructor_1.GridColumnSize.All]: 12,
        } }))))))));
exports.MediumPopup = MediumPopup;
