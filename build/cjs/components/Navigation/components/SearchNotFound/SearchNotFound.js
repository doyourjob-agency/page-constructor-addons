"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchNotFound = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const gravity_ui_page_constructor_1 = require("@doyourjob/gravity-ui-page-constructor");
const cn_1 = require("../../../../utils/cn");
const i18n_1 = tslib_1.__importDefault(require("./i18n"));
const b = (0, cn_1.block)('search-not-found');
const SearchNotFound = (props) => {
    const { notFoundDescription, size = 's' } = props;
    const title = {
        text: (0, i18n_1.default)('search-not-found-title'),
        textSize: size,
    };
    return (react_1.default.createElement(gravity_ui_page_constructor_1.Row, { className: b() },
        react_1.default.createElement(gravity_ui_page_constructor_1.Title, { colSizes: {
                [gravity_ui_page_constructor_1.GridColumnSize.Lg]: 9,
                [gravity_ui_page_constructor_1.GridColumnSize.All]: 12,
            }, title: title, subtitle: notFoundDescription || (0, i18n_1.default)('search-not-found-description'), className: b('title') })));
};
exports.SearchNotFound = SearchNotFound;
