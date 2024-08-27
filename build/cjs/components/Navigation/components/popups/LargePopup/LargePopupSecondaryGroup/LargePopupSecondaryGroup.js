"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargePopupSecondaryGroup = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const cn_1 = require("../../../../../../utils/cn");
const NavigationPopupItem_1 = require("../../../Navigation/NavigationPopupItem/NavigationPopupItem");
const LargeGroupPopupTitle_1 = require("../LargeGroupPopupTitle/LargeGroupPopupTitle");
const b = (0, cn_1.block)('large-popup-secondary-group');
const LargePopupSecondaryGroup = (props) => (react_1.default.createElement("div", { className: b() },
    react_1.default.createElement(LargeGroupPopupTitle_1.LargeGroupPopupTitle, Object.assign({}, props, { className: b('title') })),
    react_1.default.createElement("div", null,
        react_1.default.createElement(page_constructor_1.Row, { className: b('items') }, Object.values(props.items).map(({ title: popupTitle, icon, url: itemUrl }) => {
            return (react_1.default.createElement(NavigationPopupItem_1.NavigationPopupItem, { key: popupTitle, url: itemUrl, image: icon, title: popupTitle, padding: "s", imageSize: "s" }));
        })))));
exports.LargePopupSecondaryGroup = LargePopupSecondaryGroup;
