"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediumPopupWithCategories = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const gravity_ui_page_constructor_1 = require("@doyourjob/gravity-ui-page-constructor");
const cn_1 = require("../../../../../utils/cn");
const NavigationPopupItem_1 = require("../../Navigation/NavigationPopupItem/NavigationPopupItem");
const b = (0, cn_1.block)('medium-popup-with-categories');
const MediumPopupWithCategories = ({ data }) => {
    const breakpoint = (0, gravity_ui_page_constructor_1.useWindowBreakpoint)();
    const itemsArrays = data.groups.map((dataItem) => dataItem.items.map((item) => (Object.assign(Object.assign({}, item), { imageSize: dataItem.imageSize }))));
    const isDesktop = breakpoint > gravity_ui_page_constructor_1.BREAKPOINTS.lg;
    const maxLength = Math.max(...itemsArrays.map((item) => item.length));
    const desktopItemsArray = (0, react_1.useMemo)(() => {
        const itemsArray = [];
        for (let i = 0; i < maxLength; i += 2) {
            for (let j = 0; j < 2; j++) {
                itemsArray.push(itemsArrays[j][i]);
                itemsArray.push(itemsArrays[j][i + 1]);
            }
        }
        return itemsArray;
    }, [itemsArrays, maxLength]);
    return (react_1.default.createElement(gravity_ui_page_constructor_1.Row, { className: b() },
        data.groups.map(({ title, items, imageSize }) => (react_1.default.createElement(gravity_ui_page_constructor_1.Col, { key: title, className: b('col'), sizes: {
                [gravity_ui_page_constructor_1.GridColumnSize.Xl]: 6,
                [gravity_ui_page_constructor_1.GridColumnSize.Lg]: 12,
                [gravity_ui_page_constructor_1.GridColumnSize.All]: 12,
            } },
            title && (react_1.default.createElement(gravity_ui_page_constructor_1.Row, null,
                react_1.default.createElement(gravity_ui_page_constructor_1.Col, { className: b('title') },
                    react_1.default.createElement(gravity_ui_page_constructor_1.Title, { title: { text: title, textSize: 'xs' } })))),
            !isDesktop && (react_1.default.createElement("div", null,
                react_1.default.createElement(gravity_ui_page_constructor_1.Row, null, items.map((item) => (react_1.default.createElement(NavigationPopupItem_1.NavigationPopupItem, Object.assign({}, item, { hover: true, imageSize: imageSize, sizes: {
                        [gravity_ui_page_constructor_1.GridColumnSize.Lg]: 6,
                        [gravity_ui_page_constructor_1.GridColumnSize.Md]: 4,
                        [gravity_ui_page_constructor_1.GridColumnSize.All]: 4,
                    }, key: item.title })))))))))),
        isDesktop && (react_1.default.createElement(gravity_ui_page_constructor_1.Col, { className: b('items') },
            react_1.default.createElement("div", null,
                react_1.default.createElement(gravity_ui_page_constructor_1.Row, null, desktopItemsArray.map((item, index) => {
                    return typeof item === 'undefined' ? (react_1.default.createElement(gravity_ui_page_constructor_1.Col, { sizes: {
                            [gravity_ui_page_constructor_1.GridColumnSize.Xl]: 3,
                            [gravity_ui_page_constructor_1.GridColumnSize.Md]: 4,
                            [gravity_ui_page_constructor_1.GridColumnSize.All]: 12,
                        }, key: index })) : (react_1.default.createElement(NavigationPopupItem_1.NavigationPopupItem, Object.assign({}, item, { key: item.title, hover: true, sizes: {
                            [gravity_ui_page_constructor_1.GridColumnSize.Xl]: 3,
                            [gravity_ui_page_constructor_1.GridColumnSize.Md]: 4,
                            [gravity_ui_page_constructor_1.GridColumnSize.All]: 12,
                        } })));
                })))))));
};
exports.MediumPopupWithCategories = MediumPopupWithCategories;
