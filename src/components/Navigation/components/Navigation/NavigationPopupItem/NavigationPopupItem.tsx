import React, {useCallback, useContext} from 'react';

import type {GridColumnSizesType} from '@doyourjob/gravity-ui-page-constructor';
import {Col, HTML, Image, getLinkProps} from '@doyourjob/gravity-ui-page-constructor';
import {Icon} from '@gravity-ui/uikit';

import {useIsCurrentPage} from '../../../../../hooks/useIsCurrentPage';
import {block} from '../../../../../utils/cn';
import {DefaultCategorizedItemSizes} from '../../../constants';
import {AnalyticsContext} from '../../../contexts/analytics';
import {LocationContext} from '../../../contexts/location';
import {NavigationSectionContext} from '../../../contexts/navigation-section';
import {AnalyticsEventType, NavigationItem} from '../../../models';
import {NavigationTag} from '../../Tag/Tag';

import './NavigationPopupItem.scss';

const b = block('navigation-popup-item');

export interface NavigationPopupItemProps extends Partial<NavigationItem> {
    hover?: boolean;
    sizes?: GridColumnSizesType;
    className?: string;
    padding?: 'default' | 's';
    imageSize?: 's' | 'xm' | 'm';
    target?: string;
}

export const NavigationPopupItem = (props: NavigationPopupItemProps) => {
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

    const navigationSection = useContext(NavigationSectionContext);
    const {sendEvents} = useContext(AnalyticsContext) || {};
    const {hostname} = useContext(LocationContext) || {};

    const linkProps = url ? getLinkProps(url, hostname, target) : {};

    const handleOnClick = useCallback(() => {
        sendEvents?.([
            {
                name: AnalyticsEventType.PopupItemClick,
                params: {url, section: navigationSection},
            },
        ]);
    }, [sendEvents, navigationSection, url]);

    const navigationTag = tag && <NavigationTag className={b('tag')} size="s" {...tag} />;

    const isCurrentPage = useIsCurrentPage(url);

    return (
        <Col className={b(null, className)} sizes={sizes}>
            <a
                className={b('content', {hover, padding, disable: !url})}
                href={url}
                {...linkProps}
                onClick={handleOnClick}
                aria-current={isCurrentPage ? 'page' : undefined}
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
