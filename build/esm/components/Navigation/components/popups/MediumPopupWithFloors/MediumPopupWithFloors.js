import React from 'react';
import { GridColumnSize } from '@gravity-ui/page-constructor';
import { block } from '../../../../../utils/cn';
import { PopupGroup } from '../components/PopupGroup/PopupGroup';
import './MediumPopupWithFloors.css';
const b = block('medium-popup-with-floors');
const DefaultItemSizes = {
    [GridColumnSize.Lg]: 3,
    [GridColumnSize.Sm]: 4,
    [GridColumnSize.All]: 12,
};
export const MediumPopupWithFloors = ({ data }) => {
    return (React.createElement("div", { className: b() }, data.groups.map((group, index) => (React.createElement(PopupGroup, Object.assign({}, group, { key: group.title || group.url || index, sizes: DefaultItemSizes, withFixItems: true }))))));
};
