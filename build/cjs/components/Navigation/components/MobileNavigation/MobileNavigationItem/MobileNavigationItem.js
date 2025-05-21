"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileNavigationItem = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const gravity_ui_page_constructor_1 = require("@doyourjob/gravity-ui-page-constructor");
const cn_1 = require("../../../../../utils/cn");
const location_1 = require("../../../contexts/location");
const models_1 = require("../../../models");
const b = (0, cn_1.block)('mobile-navigation-item');
const MobileNavigationItem = ({ data }) => {
    const { hostname } = (0, react_1.useContext)(location_1.LocationContext) || {};
    const { type, link, title, links } = data;
    const linkProps = link && (0, gravity_ui_page_constructor_1.getLinkProps)(link === null || link === void 0 ? void 0 : link.url, hostname, link === null || link === void 0 ? void 0 : link.target);
    const [isOpened, setIsOpened] = (0, react_1.useState)(false);
    const toggleOpen = (0, react_1.useCallback)(() => {
        setIsOpened(!isOpened);
    }, [isOpened]);
    const sectionItemsData = (0, react_1.useMemo)(() => !link && pickData(data), [data, link]);
    return link ? (react_1.default.createElement("a", Object.assign({}, linkProps, { href: link.url, className: b({ type }) }), title)) : (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("div", { className: b({ opened: isOpened }), onClick: toggleOpen },
            react_1.default.createElement("div", { className: b('text') }, title),
            react_1.default.createElement("div", { className: b('arrow') },
                react_1.default.createElement(gravity_ui_page_constructor_1.ToggleArrow, { size: 12, type: "vertical", open: isOpened, iconType: "navigation" }))),
        react_1.default.createElement(gravity_ui_page_constructor_1.Foldable, { isOpened: isOpened }, sectionItemsData &&
            sectionItemsData.map(({ title: itemTitle, items }) => (react_1.default.createElement("div", { className: b('list'), key: items[0].title },
                itemTitle && react_1.default.createElement("h5", { className: b('list-title') }, itemTitle),
                react_1.default.createElement("ul", { className: b('list-items') }, items.map((linkItem) => (react_1.default.createElement("li", { className: b('li'), key: linkItem.title },
                    react_1.default.createElement("a", { href: linkItem.url, className: b('list-item') }, linkItem.title))))), links === null || links === void 0 ? void 0 :
                links.map((itemLink) => (react_1.default.createElement("a", { href: itemLink.url, className: b('list-link'), key: itemLink.url }, itemLink.text)))))))));
};
exports.MobileNavigationItem = MobileNavigationItem;
function pickData({ type, data }) {
    if (type === models_1.NavigationItemType.LargePopup) {
        return [
            {
                items: Object.values(data.categories).map(({ groups }) => ({
                    title: groups[0].title,
                    url: groups[0].url,
                })),
            },
        ];
    }
    return data.groups;
}
