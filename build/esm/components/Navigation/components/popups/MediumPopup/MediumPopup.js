import React from 'react';
import { Col, GridColumnSize, Row } from '@doyourjob/gravity-ui-page-constructor';
import { block } from '../../../../../utils/cn';
import { NavigationPopupItem } from '../../Navigation/NavigationPopupItem/NavigationPopupItem';
import './MediumPopup.css';
const b = block('medium-popup');
export const MediumPopup = ({ data }) => (React.createElement(Row, null,
    React.createElement(Col, { className: b() }, data.groups.map((dataItem) => dataItem.items.map((item) => (React.createElement(NavigationPopupItem, Object.assign({}, item, { key: item.title, hover: true, imageSize: dataItem.imageSize, sizes: {
            [GridColumnSize.Xl]: 3,
            [GridColumnSize.Md]: 4,
            [GridColumnSize.All]: 12,
        } }))))))));
