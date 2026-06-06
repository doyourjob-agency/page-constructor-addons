import React, {useMemo} from 'react';

import {Image, getLinkProps} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {NHProductBannerData} from '../../models';

import './NHBanner.scss';

const b = block('nh-banner');

export const NHBanner = ({
    title,
    description,
    image,
    url,
    background,
    color,
    border,
}: NHProductBannerData) => {
    const styles = useMemo(
        () =>
            ({
                ...(background ? {'--nh-banner-background': background} : {}),
                ...(color ? {'--nh-banner-color': color} : {}),
            } as unknown as React.CSSProperties),
        [background, color],
    );
    return (
        <a href={url} className={b({border})} style={styles} {...getLinkProps(url)}>
            <Image className={b('image')} src={image} />
            <div className={b('wrap')}>
                <div className={b('title')}>{title}</div>
                <div className={b('description')}>{description}</div>
            </div>
        </a>
    );
};
