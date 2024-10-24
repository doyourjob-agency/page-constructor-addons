import React from 'react';

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
};

export const PopupGroup = ({sizes, section, ...group}: PopupGroupProps) => (
    <div className={b()}>
        <Row>
            <Col className={b('title')}>
                <PopupTitle {...group} />
            </Col>
        </Row>
        <div>
            <NavigationItemsList
                items={group.items}
                section={section}
                sizes={sizes}
                className={b('items')}
            />
        </div>
    </div>
);
