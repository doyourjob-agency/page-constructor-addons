import React from 'react';

import {ClassNameProps} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {NavigationTagColor, NavigationTag as NavigationTagModel} from '../../models';

import './Tag.scss';

const b = block('navigation-tag');

const getColor = (color: string) => {
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

export interface NavigationTagProps extends NavigationTagModel, ClassNameProps {}

export const NavigationTag = ({
    text,
    color = NavigationTagColor.Yellow,
    textColor,
    className,
    size = 'm',
}: NavigationTagProps) => (
    <div
        className={b({size}, className)}
        style={{backgroundColor: getColor(color), color: textColor}}
    >
        {text}
    </div>
);
