import React from 'react';

import {ClassNameProps} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {NHNavigationTagColor, NHNavigationTag as NHNavigationTagModel} from '../../models';

import './NHTag.scss';

const b = block('nh-navigation-tag');

const getColor = (color: string) => {
    switch (color) {
        case NHNavigationTagColor.Yellow:
            return 'var(--pc-addons-navigation-color-tag-yellow)';
        case NHNavigationTagColor.Blue:
            return 'var(--pc-addons-navigation-color-tag-blue)';
        case NHNavigationTagColor.Green:
            return 'var(--pc-addons-navigation-color-tag-green)';
        default:
            return color;
    }
};

export interface NHNavigationTagProps extends NHNavigationTagModel, ClassNameProps {}

export const NHNavigationTag = ({
    text,
    color = NHNavigationTagColor.Yellow,
    textColor,
    className,
    size = 'm',
}: NHNavigationTagProps) => (
    <div
        className={b({size}, className)}
        style={{backgroundColor: getColor(color), color: textColor}}
    >
        {text}
    </div>
);
