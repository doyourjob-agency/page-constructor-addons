import React from 'react';
import { Row } from '@gravity-ui/page-constructor';
import { block } from '../../../../../../utils/cn';
import { NavigationPopupItem } from '../../../Navigation/NavigationPopupItem/NavigationPopupItem';
import { LargeGroupPopupTitle } from '../LargeGroupPopupTitle/LargeGroupPopupTitle';
import './LargePopupSecondaryGroup.css';
const b = block('large-popup-secondary-group');
export const LargePopupSecondaryGroup = (props) => (React.createElement("div", { className: b() },
    React.createElement(LargeGroupPopupTitle, Object.assign({}, props, { className: b('title') })),
    React.createElement("div", null,
        React.createElement(Row, { className: b('items') }, Object.values(props.items).map(({ title: popupTitle, icon, url: itemUrl }) => {
            return (React.createElement(NavigationPopupItem, { key: popupTitle, url: itemUrl, image: icon, title: popupTitle, padding: "s", imageSize: "s" }));
        })))));
