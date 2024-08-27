import { __rest } from "tslib";
import React from 'react';
import { Col, Row } from '@gravity-ui/page-constructor';
import { block } from '../../../../../../utils/cn';
import { NavigationItemsList } from '../../../Navigation/NavigationItemsList/NavigationItemsList';
import { LargeGroupPopupTitle } from '../LargeGroupPopupTitle/LargeGroupPopupTitle';
import './LargePopupGroup.css';
const b = block('large-popup-group');
export const LargePopupGroup = (_a) => {
    var { section } = _a, group = __rest(_a, ["section"]);
    return (React.createElement("div", { className: b() },
        React.createElement(Row, null,
            React.createElement(Col, { className: b('title') },
                React.createElement(LargeGroupPopupTitle, Object.assign({}, group)))),
        React.createElement("div", null,
            React.createElement(NavigationItemsList, { items: group.items, section: section, className: b('items') }))));
};
