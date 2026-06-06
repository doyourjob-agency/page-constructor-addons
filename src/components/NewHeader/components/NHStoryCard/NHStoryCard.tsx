import React from 'react';

import {Image, getLinkProps} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {NHStoryCardData} from '../../models';

import './NHStoryCard.scss';

const b = block('nh-story-card');

export const NHStoryCard = ({title, description, image, url}: NHStoryCardData) => (
    <a href={url} className={b()} {...getLinkProps(url)}>
        <Image className={b('image')} src={image} />
        <div className={b('wrap')}>
            <div className={b('title')}>{title}</div>
            <div className={b('description')}>{description}</div>
        </div>
    </a>
);
