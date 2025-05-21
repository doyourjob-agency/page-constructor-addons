import { __rest } from "tslib";
import React from 'react';
import { Row } from '@doyourjob/gravity-ui-page-constructor';
import { block } from '../../../../../../utils/cn';
import { NavigationPopupItem } from '../../../Navigation/NavigationPopupItem/NavigationPopupItem';
import { PopupTitle } from '../PopupTitle/PopupTitle';
import './PopupSecondaryGroup.css';
const b = block('popup-secondary-group');
export const PopupSecondaryGroup = (_a) => {
    var { sizes } = _a, props = __rest(_a, ["sizes"]);
    return (React.createElement("div", { className: b() },
        React.createElement(PopupTitle, Object.assign({}, props, { className: b('title') })),
        React.createElement("div", null,
            React.createElement(Row, { className: b('items') }, Object.values(props.items).map(({ title: popupTitle, icon, url: itemUrl }) => {
                return (React.createElement(NavigationPopupItem, { key: popupTitle, url: itemUrl, image: icon, title: popupTitle, padding: "s", imageSize: "s", sizes: sizes }));
            })))));
};
