"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultCategorizedItemSizes = exports.NO_MENU_TAB_SELECTED = exports.SWITCH_MENU_TAB_TIMEOUT = void 0;
const page_constructor_1 = require("@gravity-ui/page-constructor");
exports.SWITCH_MENU_TAB_TIMEOUT = 200;
exports.NO_MENU_TAB_SELECTED = -1;
exports.DefaultCategorizedItemSizes = {
    [page_constructor_1.GridColumnSize.Lg]: 4,
    [page_constructor_1.GridColumnSize.Sm]: 6,
    [page_constructor_1.GridColumnSize.All]: 12,
};
