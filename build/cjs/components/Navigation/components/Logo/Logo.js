"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const cn_1 = require("../../../../utils/cn");
const mobile_1 = require("../../contexts/mobile");
const i18n_1 = tslib_1.__importDefault(require("./i18n"));
const b = (0, cn_1.block)('logo');
const Logo = ({ href = '/', src, className, imageClassName, title, text, alt, width, }) => {
    const isMobile = (0, react_1.useContext)(mobile_1.MobileContext);
    return (react_1.default.createElement("a", { href: href, className: b({ mobile: isMobile }, className), title: title || (0, i18n_1.default)('link-title'), style: width ? { width } : {} },
        src && (react_1.default.createElement("img", { className: b('img', imageClassName), alt: alt || (0, i18n_1.default)('image-alt'), src: src })),
        text && react_1.default.createElement("span", { className: b('text') }, text)));
};
exports.default = Logo;
