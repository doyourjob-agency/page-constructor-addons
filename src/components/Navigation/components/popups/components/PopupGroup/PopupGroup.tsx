import React, {useMemo} from 'react';

import {Col, GridColumnSizesType, Row} from '@gravity-ui/page-constructor';

import {block} from '../../../../../../utils/cn';
import {CategoryGroupData} from '../../../../models';
import {NavigationItemsList} from '../../../Navigation/NavigationItemsList/NavigationItemsList';
import {PopupTitle} from '../PopupTitle/PopupTitle';

import './PopupGroup.scss';

const b = block('popup-group');

type PopupGroupProps = CategoryGroupData & {
    section?: string;
    sizes?: GridColumnSizesType;
    withFixItems?: boolean;
};

export const PopupGroup = ({sizes, section, withFixItems, ...group}: PopupGroupProps) => {
    const items = useMemo(
        () =>
            group.items.map((item) => ({
                ...item,
                description: group.showItemDescriptions === 'no' ? undefined : item.description,
                icon: group.showItemIcons === 'no' ? undefined : item.icon,
                image: group.showItemIcons === 'no' ? undefined : item.image,
            })),
        [group.items, group.showItemDescriptions, group.showItemIcons],
    );

    return (
        <div className={b()} style={{backgroundColor: group.backgroundColor}}>
            <Row>
                <Col className={b('title')}>
                    <PopupTitle {...group} />
                </Col>
            </Row>
            <div>
                <NavigationItemsList
                    items={items}
                    section={section}
                    sizes={sizes}
                    className={withFixItems ? [b('items'), b('items_fix')].join(' ') : b('items')}
                />
            </div>
        </div>
    );
};
