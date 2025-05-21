"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupSecondaryGroup = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const gravity_ui_page_constructor_1 = require("@doyourjob/gravity-ui-page-constructor");
const cn_1 = require("../../../../../../utils/cn");
const NavigationPopupItem_1 = require("../../../Navigation/NavigationPopupItem/NavigationPopupItem");
const PopupTitle_1 = require("../PopupTitle/PopupTitle");
const b = (0, cn_1.block)('popup-secondary-group');
const PopupSecondaryGroup = (_a) => {
    var { sizes } = _a, props = tslib_1.__rest(_a, ["sizes"]);
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement(PopupTitle_1.PopupTitle, Object.assign({}, props, { className: b('title') })),
        react_1.default.createElement("div", null,
            react_1.default.createElement(gravity_ui_page_constructor_1.Row, { className: b('items') }, Object.values(props.items).map(({ title: popupTitle, icon, url: itemUrl }) => {
                return (react_1.default.createElement(NavigationPopupItem_1.NavigationPopupItem, { key: popupTitle, url: itemUrl, image: icon, title: popupTitle, padding: "s", imageSize: "s", sizes: sizes }));
            })))));
};
exports.PopupSecondaryGroup = PopupSecondaryGroup;
