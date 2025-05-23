"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContext = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const gravity_ui_page_constructor_1 = require("@doyourjob/gravity-ui-page-constructor");
exports.ThemeContext = react_1.default.createContext(gravity_ui_page_constructor_1.Theme.Light);
