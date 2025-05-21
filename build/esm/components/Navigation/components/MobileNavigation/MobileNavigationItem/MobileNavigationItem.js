import React, { Fragment, useCallback, useContext, useMemo, useState } from 'react';
import { Foldable, ToggleArrow, getLinkProps } from '@doyourjob/gravity-ui-page-constructor';
import { block } from '../../../../../utils/cn';
import { LocationContext } from '../../../contexts/location';
import { NavigationItemType, } from '../../../models';
import './MobileNavigationItem.css';
const b = block('mobile-navigation-item');
export const MobileNavigationItem = ({ data }) => {
    const { hostname } = useContext(LocationContext) || {};
    const { type, link, title, links } = data;
    const linkProps = link && getLinkProps(link === null || link === void 0 ? void 0 : link.url, hostname, link === null || link === void 0 ? void 0 : link.target);
    const [isOpened, setIsOpened] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpened(!isOpened);
    }, [isOpened]);
    const sectionItemsData = useMemo(() => !link && pickData(data), [data, link]);
    return link ? (React.createElement("a", Object.assign({}, linkProps, { href: link.url, className: b({ type }) }), title)) : (React.createElement(Fragment, null,
        React.createElement("div", { className: b({ opened: isOpened }), onClick: toggleOpen },
            React.createElement("div", { className: b('text') }, title),
            React.createElement("div", { className: b('arrow') },
                React.createElement(ToggleArrow, { size: 12, type: "vertical", open: isOpened, iconType: "navigation" }))),
        React.createElement(Foldable, { isOpened: isOpened }, sectionItemsData &&
            sectionItemsData.map(({ title: itemTitle, items }) => (React.createElement("div", { className: b('list'), key: items[0].title },
                itemTitle && React.createElement("h5", { className: b('list-title') }, itemTitle),
                React.createElement("ul", { className: b('list-items') }, items.map((linkItem) => (React.createElement("li", { className: b('li'), key: linkItem.title },
                    React.createElement("a", { href: linkItem.url, className: b('list-item') }, linkItem.title))))), links === null || links === void 0 ? void 0 :
                links.map((itemLink) => (React.createElement("a", { href: itemLink.url, className: b('list-link'), key: itemLink.url }, itemLink.text)))))))));
};
function pickData({ type, data }) {
    if (type === NavigationItemType.LargePopup) {
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
