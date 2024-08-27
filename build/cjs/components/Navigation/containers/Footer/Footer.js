"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const uikit_1 = require("@gravity-ui/uikit");
const cn_1 = require("../../../../utils/cn");
const EnrichedLink_1 = require("../../../EnrichedLink/EnrichedLink");
const LangSwitch_1 = require("../../components/LangSwitch");
const GroupLinks_1 = tslib_1.__importDefault(require("./GroupLinks/GroupLinks"));
const b = (0, cn_1.block)('footer');
const columnSize = {
    all: 6,
    sm: 3,
    md: 2,
};
const Footer = (props) => {
    const { type = 'default', underline, columns, media, customItems } = props;
    const isMobile = (0, uikit_1.useMobile)();
    const mediaContent = (0, react_1.useMemo)(() => {
        if (!media) {
            return null;
        }
        return react_1.default.createElement(page_constructor_1.Col, { sizes: { all: 12, md: media.md || 6 } }, media.item);
    }, [media]);
    const groupLinks = (0, react_1.useMemo)(() => {
        if (!(columns === null || columns === void 0 ? void 0 : columns.length)) {
            return null;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null, columns.map((groups, index) => (react_1.default.createElement(page_constructor_1.Col, { key: index, className: b('column'), sizes: columnSize }, groups.map((group, groupIndex) => (react_1.default.createElement(GroupLinks_1.default, { key: groupIndex, columnGroup: group, className: b('group-wrapper') }))))))));
    }, [columns]);
    const isSimple = type === 'simple';
    const underlineBlock = (0, react_1.useMemo)(() => {
        var _a, _b;
        if (!underline) {
            return null;
        }
        const itemClass = b('item', { underline: true });
        return (react_1.default.createElement("div", { className: b('underline') },
            react_1.default.createElement("div", { className: b('underline-links') },
                underline.langSwitch && (react_1.default.createElement(LangSwitch_1.LangSwitch, Object.assign({}, underline.langSwitch, { className: b('item', { underline: true, 'lang-switch': true }), direction: ['top-start', 'top', 'top-end'], size: "m", iconSize: 16, isMobile: isMobile }))),
                !isSimple &&
                    ((_a = underline.leftItems) === null || _a === void 0 ? void 0 : _a.map((item) => (react_1.default.createElement(EnrichedLink_1.EnrichedLink, Object.assign({ key: item.title, className: itemClass }, item)))))),
            react_1.default.createElement("div", { className: b('underline-links') }, (_b = underline.rightItems) === null || _b === void 0 ? void 0 :
                _b.map((item) => (react_1.default.createElement(EnrichedLink_1.EnrichedLink, Object.assign({ key: item.title, className: itemClass }, item)))),
                underline.copyright && (react_1.default.createElement("div", { className: b('copyright') }, underline.copyright)))));
    }, [underline, isSimple, isMobile]);
    const isRightMedia = (media === null || media === void 0 ? void 0 : media.position) === 'right';
    return (react_1.default.createElement("footer", { className: b({ type }) }, isSimple ? (underlineBlock) : (react_1.default.createElement(page_constructor_1.Grid, { containerClass: b('container-fluid') },
        react_1.default.createElement(page_constructor_1.Row, { className: b('wrapper') },
            !isRightMedia && mediaContent,
            groupLinks,
            isRightMedia && mediaContent,
            customItems,
            react_1.default.createElement(page_constructor_1.Col, { className: b('column', { underline: true }), sizes: { all: 12 } }, underlineBlock))))));
};
exports.Footer = Footer;
