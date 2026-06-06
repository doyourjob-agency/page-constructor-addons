import React from 'react';

import {block} from '../../../../utils/cn';
import {NHLoginPopupData, NHPopupItemData} from '../../models';
import {NHPopupItem} from '../NHPopupItem/NHPopupItem';

import './NHLoginPopup.scss';

const b = block('nh-login-popup');

export const NHLoginPopup = ({items}: NHLoginPopupData) => (
    <div className={b()}>
        {items.map((item: NHPopupItemData, index: number) => (
            <div key={index} className={b('item')}>
                <NHPopupItem {...item} />
            </div>
        ))}
    </div>
);
