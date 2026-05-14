import React from 'react';

import {Grid, getLinkProps} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {LoginPopupData} from '../../models';

import './LoginPopup.scss';

const b = block('login-popup');

export const LoginPopup = ({items}: LoginPopupData) => (
    <Grid className={b()} containerClass={b('container')}>
        {items.map((item) => (
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
