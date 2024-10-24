import React from 'react';
import { Row } from '@gravity-ui/page-constructor';
import { NavigationPopupItem } from '../NavigationPopupItem/NavigationPopupItem';
export const NavigationItemsList = ({ items, itemClassName, className, sizes, }) => {
    return (React.createElement(Row, { className: className }, items.map((item) => (React.createElement(NavigationPopupItem, Object.assign({}, item, { sizes: sizes, className: itemClassName, key: item.slug, hover: true }))))));
};
