"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationTag = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const cn_1 = require("../../../../utils/cn");
const models_1 = require("../../models");
const b = (0, cn_1.block)('navigation-tag');
const getColor = (color) => {
    switch (color) {
        case models_1.NavigationTagColor.Yellow:
            return 'var(--pc-addons-navigation-color-tag-yellow)';
        case models_1.NavigationTagColor.Blue:
            return 'var(--pc-addons-navigation-color-tag-blue)';
        case models_1.NavigationTagColor.Green:
            return 'var(--pc-addons-navigation-color-tag-green)';
        default:
            return color;
    }
};
const NavigationTag = ({ text, color = models_1.NavigationTagColor.Yellow, textColor, className, size = 'm', }) => (react_1.default.createElement("div", { className: b({ size }, className), style: { backgroundColor: getColor(color), color: textColor } }, text));
exports.NavigationTag = NavigationTag;
