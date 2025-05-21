import type {FC} from 'react';
import React from 'react';

import {GridColumnSizesType, Row} from '@doyourjob/gravity-ui-page-constructor';

import {NavigationItem} from '../../../models';
import {NavigationPopupItem} from '../NavigationPopupItem/NavigationPopupItem';

interface NavigationItemsListProps {
    items: NavigationItem[];
    section?: string;
    sizes?: GridColumnSizesType;
    itemClassName?: string;
    className?: string;
}

export const NavigationItemsList: FC<NavigationItemsListProps> = ({
    items,
    itemClassName,
    className,
    sizes,
}) => {
    return (
        <Row className={className}>
            {items.map((item) => (
                <NavigationPopupItem
                    {...item}
                    sizes={sizes}
                    className={itemClassName}
                    key={item.slug}
                    hover
                />
            ))}
        </Row>
    );
};
