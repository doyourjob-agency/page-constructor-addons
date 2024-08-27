"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationPopupItem = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const uikit_1 = require("@gravity-ui/uikit");
const useIsCurrentPage_1 = require("../../../../../hooks/useIsCurrentPage");
const cn_1 = require("../../../../../utils/cn");
const constants_1 = require("../../../constants");
const analytics_1 = require("../../../contexts/analytics");
const navigation_section_1 = require("../../../contexts/navigation-section");
const models_1 = require("../../../models");
const Tag_1 = require("../../Tag/Tag");
const b = (0, cn_1.block)('navigation-popup-item');
const NavigationPopupItem = (props) => {
    const { icon, url, title, tag, description, image, imageSize = 'm', hover, className, sizes = constants_1.DefaultCategorizedItemSizes, padding = 'default', } = props;
    const navigationSection = (0, react_1.useContext)(navigation_section_1.NavigationSectionContext);
    const { sendEvents } = (0, react_1.useContext)(analytics_1.AnalyticsContext) || {};
    const handleOnClick = (0, react_1.useCallback)(() => {
        sendEvents === null || sendEvents === void 0 ? void 0 : sendEvents([
            {
                name: models_1.AnalyticsEventType.PopupItemClick,
                params: { url, section: navigationSection },
            },
        ]);
    }, [sendEvents, navigationSection, url]);
    const navigationTag = tag && react_1.default.createElement(Tag_1.NavigationTag, Object.assign({ className: b('tag'), size: "s" }, tag));
    const isCurrentPage = (0, useIsCurrentPage_1.useIsCurrentPage)(url);
    return (react_1.default.createElement(page_constructor_1.Col, { className: b(null, className), sizes: sizes },
        react_1.default.createElement("a", { className: b('content', { hover, padding }), href: url, onClick: handleOnClick, "aria-current": isCurrentPage ? 'page' : undefined },
            icon && (react_1.default.createElement("div", { className: b('icon-container') },
                react_1.default.createElement(uikit_1.Icon, { className: b('icon'), data: icon, size: 16 }))),
            image && (react_1.default.createElement("div", { className: b('image-container') },
                react_1.default.createElement(page_constructor_1.Image, { className: b('image', { size: imageSize }), src: image }))),
            react_1.default.createElement("div", { className: b('container', { 'with-margin': Boolean(icon) }) },
                react_1.default.createElement("div", { className: b('title-tag-wrapper') },
                    react_1.default.createElement("span", { className: b('title') }, title),
                    "\u00A0",
                    navigationTag),
                description && react_1.default.createElement(page_constructor_1.HTML, { className: b('description') }, description)))));
};
exports.NavigationPopupItem = NavigationPopupItem;
