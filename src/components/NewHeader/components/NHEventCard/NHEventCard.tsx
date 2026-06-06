import React from 'react';

import {Image, getLinkProps} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {NHEventCardData} from '../../models';

import './NHEventCard.scss';

const b = block('nh-event-card');

export const NHEventCard = ({title, caption, description, image, url}: NHEventCardData) => (
    <a href={url} className={b()} {...getLinkProps(url)}>
        <Image className={b('image')} src={image} />
        <div className={b('wrap')}>
            <div className={b('caption')}>{caption}</div>
            <div className={b('title')}>{title}</div>
            <div className={b('description')}>{description}</div>
        </div>
    </a>
);
