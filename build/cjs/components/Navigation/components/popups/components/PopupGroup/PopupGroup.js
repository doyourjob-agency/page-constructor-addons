"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupGroup = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const gravity_ui_page_constructor_1 = require("@doyourjob/gravity-ui-page-constructor");
const cn_1 = require("../../../../../../utils/cn");
const NavigationItemsList_1 = require("../../../Navigation/NavigationItemsList/NavigationItemsList");
const PopupTitle_1 = require("../PopupTitle/PopupTitle");
const b = (0, cn_1.block)('popup-group');
const PopupGroup = (_a) => {
    var { sizes, section, withFixItems, withPadding } = _a, group = tslib_1.__rest(_a, ["sizes", "section", "withFixItems", "withPadding"]);
    const items = (0, react_1.useMemo)(() => group.items.map((item) => (Object.assign(Object.assign({}, item), { description: group.showItemDescriptions === 'no' ? undefined : item.description, icon: group.showItemIcons === 'no' ? undefined : item.icon, image: group.showItemIcons === 'no' ? undefined : item.image }))), [group.items, group.showItemDescriptions, group.showItemIcons]);
    return (react_1.default.createElement("div", { className: withPadding ? [b(), b('padding')].join(' ') : b(), style: { backgroundColor: group.backgroundColor } },
        group.title && (react_1.default.createElement(gravity_ui_page_constructor_1.Row, null,
            react_1.default.createElement(gravity_ui_page_constructor_1.Col, { className: b('title') },
                react_1.default.createElement(PopupTitle_1.PopupTitle, Object.assign({}, group))))),
        react_1.default.createElement("div", null,
            react_1.default.createElement(NavigationItemsList_1.NavigationItemsList, { items: items, section: section, sizes: sizes, className: withFixItems ? [b('items'), b('items_fix')].join(' ') : b('items') }))));
};
exports.PopupGroup = PopupGroup;
