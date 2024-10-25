import React from 'react';

import {GridColumnSize} from '@gravity-ui/page-constructor';

import {block} from '../../../../../utils/cn';
import {PopupData} from '../../../models';
import {PopupGroup} from '../components/PopupGroup/PopupGroup';

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
        <div className={b()}>
            {data.groups.map((group, index) => (
                <PopupGroup
                    {...group}
                    key={group.title || group.url || index}
                    sizes={DefaultItemSizes}
                    withFixItems
                    withPadding
                />
            ))}
        </div>
    );
};
