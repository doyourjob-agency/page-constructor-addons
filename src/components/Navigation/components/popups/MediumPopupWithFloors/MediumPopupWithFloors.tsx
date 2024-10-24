import React from 'react';

import {GridColumnSize, Row} from '@gravity-ui/page-constructor';

import {block} from '../../../../../utils/cn';
import {PopupData} from '../../../models';
import {PopupGroup} from '../components/PopupGroup/PopupGroup';
import {PopupSecondaryGroup} from '../components/PopupSecondaryGroup/PopupSecondaryGroup';

import './MediumPopupWithFloors.scss';

const b = block('medium-popup-with-floors');

interface MediumPopupWithFloorsProps {
    data: PopupData;
}

const DefaultItemSizes = {
    [GridColumnSize.Lg]: 3,
    [GridColumnSize.Sm]: 4,
    [GridColumnSize.All]: 12,
};

export const MediumPopupWithFloors = ({data}: MediumPopupWithFloorsProps) => {
    return (
        <Row className={b()}>
            {data.groups.map((group, index) => {
                const key = group.title || group.url || index;

                return index ? (
                    <PopupSecondaryGroup {...group} key={key} sizes={DefaultItemSizes} />
                ) : (
                    <PopupGroup {...group} key={key} sizes={DefaultItemSizes} />
                );
            })}
        </Row>
    );
};
