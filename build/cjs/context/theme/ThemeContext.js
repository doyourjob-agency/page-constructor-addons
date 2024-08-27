"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContext = exports.initialValue = exports.Theme = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const constants_1 = require("../../constants");
var Theme;
(function (Theme) {
    Theme["Light"] = "light";
    Theme["Dark"] = "dark";
})(Theme = exports.Theme || (exports.Theme = {}));
exports.initialValue = {
    theme: constants_1.DEFAULT_THEME,
};
exports.ThemeContext = react_1.default.createContext(exports.initialValue);
