"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LangSwitchPopup = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Check_1 = tslib_1.__importDefault(require("@gravity-ui/icons/Check"));
const uikit_1 = require("@gravity-ui/uikit");
const cn_1 = require("../../../../../utils/cn");
const b = (0, cn_1.block)('lang-switch-popup');
const LangSwitchPopup = ({ items }) => {
    return (react_1.default.createElement("div", { className: b() }, items.map(({ title, description, active, url, icon }) => {
        return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        react_1.default.createElement("a", { className: b('item'), key: description, href: active ? undefined : url },
            react_1.default.createElement("div", { className: b('row') },
                icon && (react_1.default.createElement(uikit_1.Icon, { className: b('icon'), data: icon, width: 18, height: 12 })),
                react_1.default.createElement("div", { className: b('text') },
                    react_1.default.createElement("span", { className: b('name') }, title),
                    react_1.default.createElement("span", { className: b('lang') }, description)),
                active && (react_1.default.createElement(uikit_1.Icon, { className: b('icon-check'), data: Check_1.default, width: 16, height: 16 })))));
    })));
};
exports.LangSwitchPopup = LangSwitchPopup;
