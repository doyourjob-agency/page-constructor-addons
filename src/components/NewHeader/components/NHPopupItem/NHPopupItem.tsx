import React, {useMemo} from 'react';

import {HTML, Image, getLinkProps} from '@doyourjob/gravity-ui-page-constructor';
import {Icon} from '@gravity-ui/uikit';

import {block} from '../../../../utils/cn';
import {NHPopupItemData} from '../../models';

import {ArrowRight} from './ArrowRight';

import './NHPopupItem.scss';

const b = block('nh-navigation-popup-item');

export interface NHPopupItemProps extends Partial<NHPopupItemData> {
    column?: boolean;
}

export const NHPopupItem = (props: NHPopupItemProps) => {
    const {
        url,
        target,
        title,
        description,
        image,
        imageMobile,
        imageColor,
        imageColorHover,
        column,
    } = props;

    const styleImageContainer = useMemo(
        () =>
            ({
                ...(imageColor ? {'--nh-popup-item-color': imageColor} : {}),
                ...(imageColorHover ? {'--nh-popup-item-color-hover': imageColorHover} : {}),
            } as unknown as React.CSSProperties),
        [imageColor, imageColorHover],
    );

    const hasImage = image || imageMobile;

    return (
        <a
            className={b({disable: !url, column})}
            href={url}
            {...getLinkProps(url || '', undefined, target)}
        >
            {hasImage && (
                <div
                    className={b('image-container', {'no-bg': !imageColor})}
                    style={styleImageContainer}
                >
                    {image && (
                        <Image
                            className={b('image', {desktop: Boolean(imageMobile)})}
                            src={image}
                        />
                    )}
                    {imageMobile && (
                        <Image className={b('image', {mobile: true})} src={imageMobile} />
                    )}
                </div>
            )}
            <div className={b('container')}>
                <div className={b('title')}>
                    {title}
                    <Icon data={ArrowRight} size={16} />
                </div>
                {description && <HTML className={b('description')}>{description}</HTML>}
            </div>
        </a>
    );
};
