"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResult = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const gravity_ui_page_constructor_1 = require("@doyourjob/gravity-ui-page-constructor");
const utils_1 = require("../../utils");
const NavigationItemsList_1 = require("../Navigation/NavigationItemsList/NavigationItemsList");
const SearchNotFound_1 = require("../SearchNotFound/SearchNotFound");
const i18n_1 = tslib_1.__importDefault(require("./i18n"));
const b = (0, gravity_ui_page_constructor_1.block)('search-result');
const SearchResult = ({ value, data, section, className }) => {
    const result = (0, utils_1.applySearch)(value, data);
    const title = {
        text: (0, i18n_1.default)('search-found', { count: result.length }),
        textSize: 'xs',
    };
    return (react_1.default.createElement("div", { className: b() }, result.length ? (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(gravity_ui_page_constructor_1.Row, null,
            react_1.default.createElement(gravity_ui_page_constructor_1.Title, { className: b('title'), title: title, colSizes: { all: 12 } })),
        react_1.default.createElement("div", null,
            react_1.default.createElement(NavigationItemsList_1.NavigationItemsList, { items: result, section: section, className: className })))) : (react_1.default.createElement("div", { className: b('container') },
        react_1.default.createElement(SearchNotFound_1.SearchNotFound, { notFoundDescription: (0, i18n_1.default)('search-not-found'), size: "xs" })))));
};
exports.SearchResult = SearchResult;
