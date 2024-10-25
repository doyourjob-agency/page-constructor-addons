import { __rest } from "tslib";
import React, { useMemo } from 'react';
import { Col, Row } from '@gravity-ui/page-constructor';
import { block } from '../../../../../../utils/cn';
import { NavigationItemsList } from '../../../Navigation/NavigationItemsList/NavigationItemsList';
import { PopupTitle } from '../PopupTitle/PopupTitle';
import './PopupGroup.css';
const b = block('popup-group');
export const PopupGroup = (_a) => {
    var { sizes, section, withFixItems, withPadding } = _a, group = __rest(_a, ["sizes", "section", "withFixItems", "withPadding"]);
    const items = useMemo(() => group.items.map((item) => (Object.assign(Object.assign({}, item), { description: group.showItemDescriptions === 'no' ? undefined : item.description, icon: group.showItemIcons === 'no' ? undefined : item.icon, image: group.showItemIcons === 'no' ? undefined : item.image }))), [group.items, group.showItemDescriptions, group.showItemIcons]);
    return (React.createElement("div", { className: withPadding ? [b(), b('padding')].join(' ') : b(), style: { backgroundColor: group.backgroundColor } },
        group.title && (React.createElement(Row, null,
            React.createElement(Col, { className: b('title') },
                React.createElement(PopupTitle, Object.assign({}, group))))),
        React.createElement("div", null,
            React.createElement(NavigationItemsList, { items: items, section: section, sizes: sizes, className: withFixItems ? [b('items'), b('items_fix')].join(' ') : b('items') }))));
};
