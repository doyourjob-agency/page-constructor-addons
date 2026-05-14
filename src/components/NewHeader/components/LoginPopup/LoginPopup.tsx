import React from 'react';

import {Grid} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {LoginPopupData} from '../../models';

import './LoginPopup.scss';

const b = block('login-popup');

export const LoginPopup = (props: LoginPopupData) => (
    <Grid className={b()} containerClass={b('container')}>
        <div className={b('item')}>
            <div className={b('title')}>Login to Token Factory</div>
            <div className={b('subtitle')}>Run and integrate AI into real-world products</div>
        </div>
        <div className={b('item')}>
            <div className={b('title')}>Login to AI cloud</div>
            <div className={b('subtitle')}>Power AI with high-performance compute.</div>
        </div>
    </Grid>
);
