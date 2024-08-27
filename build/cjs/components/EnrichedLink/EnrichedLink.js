"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrichedLink = exports.EnrichedLinkType = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const cn_1 = require("../../utils/cn");
const b = (0, cn_1.block)('enriched-link');
const ICON_SIZE = 16;
const SOCIAL_ICON_SIZE = 24;
var EnrichedLinkType;
(function (EnrichedLinkType) {
    EnrichedLinkType["Default"] = "default";
    EnrichedLinkType["OnlyIcon"] = "icon";
})(EnrichedLinkType = exports.EnrichedLinkType || (exports.EnrichedLinkType = {}));
const getLinkProps = (props) => {
    const { url, blank, noreferrer, onClick } = props;
    const res = {
        href: url,
        target: blank ? '_blank' : undefined,
        onClick,
    };
    if (noreferrer || blank) {
        res.rel = 'noopener noreferrer';
    }
    return res;
};
const EnrichedLink = (props) => {
    const { type, title, icon, className } = props;
    if (type === EnrichedLinkType.OnlyIcon) {
        return (react_1.default.createElement(uikit_1.Link, Object.assign({}, getLinkProps(props), { className: b({ type }, className), title: title, "data-router": "off" }), icon && react_1.default.createElement(uikit_1.Icon, { data: icon, size: SOCIAL_ICON_SIZE })));
    }
    return (react_1.default.createElement(uikit_1.Link, Object.assign({}, getLinkProps(props), { className: b({ type, ['left-icon']: Boolean(icon) }, className) }),
        icon && react_1.default.createElement(uikit_1.Icon, { data: icon, size: ICON_SIZE, className: b('icon') }),
        react_1.default.createElement("div", { className: b('content') },
            react_1.default.createElement("div", { className: b('title') }, title))));
};
exports.EnrichedLink = EnrichedLink;
