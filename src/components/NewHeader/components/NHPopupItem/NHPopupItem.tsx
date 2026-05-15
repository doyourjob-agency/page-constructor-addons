import React from 'react';

import type {GridColumnSizesType} from '@doyourjob/gravity-ui-page-constructor';
import {Col, HTML, Image, getLinkProps} from '@doyourjob/gravity-ui-page-constructor';
import {Icon} from '@gravity-ui/uikit';

import {block} from '../../../../utils/cn';
import {DefaultCategorizedItemSizes} from '../../constants';
import {NHPopupItemData} from '../../models';
import {NHNavigationTag} from '../NHTag/NHTag';

import './NHPopupItem.scss';

const b = block('nh-navigation-popup-item');

export interface NHPopupItemProps extends Partial<NHPopupItemData> {
    hover?: boolean;
    sizes?: GridColumnSizesType;
    className?: string;
    padding?: 'default' | 's';
    imageSize?: 's' | 'xm' | 'm';
    target?: string;
}

export const NHPopupItem = (props: NHPopupItemProps) => {
    const {
        icon,
        url,
        target,
        title,
        tag,
        description,
        image,
        imageSize = 'm',
        hover,
        className,
        sizes = DefaultCategorizedItemSizes,
        padding = 'default',
    } = props;

    const navigationTag = tag && <NHNavigationTag className={b('tag')} size="s" {...tag} />;

    return (
        <Col className={b(null, className)} sizes={sizes}>
            <a
                className={b('content', {hover, padding, disable: !url})}
                href={url}
                {...getLinkProps(url || '', undefined, target)}
            >
                {icon && (
                    <div className={b('icon-container')}>
                        <Icon className={b('icon')} data={icon} size={16} />
                    </div>
                )}
                {image && (
                    <div className={b('image-container')}>
                        <Image className={b('image', {size: imageSize})} src={image} />
                    </div>
                )}
                <div className={b('container', {'with-margin': Boolean(icon)})}>
                    <div className={b('title-tag-wrapper')}>
                        <span className={b('title')}>{title}</span>
                        &nbsp;
                        {navigationTag}
                    </div>
                    {description && <HTML className={b('description')}>{description}</HTML>}
                </div>
            </a>
        </Col>
    );
};
