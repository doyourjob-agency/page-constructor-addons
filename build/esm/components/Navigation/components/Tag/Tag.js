import React from 'react';
import { block } from '../../../../utils/cn';
import { NavigationTagColor } from '../../models';
import './Tag.css';
const b = block('navigation-tag');
const getColor = (color) => {
    switch (color) {
        case NavigationTagColor.Yellow:
            return 'var(--pc-addons-navigation-color-tag-yellow)';
        case NavigationTagColor.Blue:
            return 'var(--pc-addons-navigation-color-tag-blue)';
        case NavigationTagColor.Green:
            return 'var(--pc-addons-navigation-color-tag-green)';
        default:
            return color;
    }
};
export const NavigationTag = ({ text, color = NavigationTagColor.Yellow, textColor, className, size = 'm', }) => (React.createElement("div", { className: b({ size }, className), style: { backgroundColor: getColor(color), color: textColor } }, text));
