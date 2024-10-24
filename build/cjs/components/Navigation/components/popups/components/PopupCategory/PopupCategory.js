"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupCategory = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const cn_1 = require("../../../../../../utils/cn");
const b = (0, cn_1.block)('popup-category');
const PopupCategory = ({ data, onClick, isActive }) => {
    const { title } = data;
    return (react_1.default.createElement("li", { className: b(), key: title, "aria-current": isActive || undefined },
        react_1.default.createElement("button", { className: b('button', { active: isActive }), onClick: () => onClick(data) }, title)));
};
exports.PopupCategory = PopupCategory;
