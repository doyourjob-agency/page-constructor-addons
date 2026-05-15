import React from 'react';

import {Grid, getLinkProps} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {NHLoginItemData, NHLoginPopupData} from '../../models';

import './NHLoginPopup.scss';

const b = block('nh-login-popup');

export const NHLoginPopup = ({items}: NHLoginPopupData) => (
    <Grid className={b()} containerClass={b('container')}>
        {items.map((item: NHLoginItemData) => (
            <a
                href={item.url}
                className={b('item')}
                key={item.title}
                {...getLinkProps(item.url || '')}
            >
                <div className={b('title')}>{item.title}</div>
                <div className={b('subtitle')}>{item.subtitle}</div>
            </a>
        ))}
    </Grid>
);
