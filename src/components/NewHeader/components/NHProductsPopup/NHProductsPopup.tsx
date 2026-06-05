import React, {useMemo} from 'react';

import {Image, getLinkProps} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {NHPopupItemData, NHProductBannerData, NHProductsPopupData} from '../../models';
import {NHPopupItem} from '../NHPopupItem/NHPopupItem';

import './NHProductsPopup.scss';

const b = block('nh-products-popup');

const NHBanner = ({
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
                ...(background ? {'--nh-products-banner-background': background} : {}),
                ...(color ? {'--nh-products-banner-color': color} : {}),
            } as unknown as React.CSSProperties),
        [background, color],
    );
    return (
        <a href={url} className={b('banner', {border})} style={styles} {...getLinkProps(url)}>
            <Image className={b('banner-image')} src={image} />
            <div className={b('banner-wrap')}>
                <div className={b('banner-title')}>{title}</div>
                <div className={b('banner-description')}>{description}</div>
            </div>
        </a>
    );
};

export const NHProductsPopup = ({
    sections,
    primaryColor,
    primaryColorHover,
}: NHProductsPopupData) => (
    <div className={b()}>
        {sections.map((section) => {
            let content;
            if ('mode' in section && section.mode === 'run') {
                content = (
                    <div className={b('wrap-scale')}>
                        {section.items?.[0] && <NHPopupItem {...section.items[0]} hover column />}
                        <div className={b('wrap')}>
                            {section.items
                                ?.slice(1, 4)
                                .map((item: NHPopupItemData, cardIndex: number) => (
                                    <NHPopupItem
                                        key={`${item.title}-${cardIndex + 1}`}
                                        {...item}
                                        hover
                                        column
                                    />
                                ))}
                        </div>
                        <div className={b('wrap')}>
                            {section.items
                                ?.slice(4)
                                .map((item: NHPopupItemData, cardIndex: number) => (
                                    <NHPopupItem
                                        key={`${item.title}-${cardIndex + 4}`}
                                        {...item}
                                        hover
                                        column
                                    />
                                ))}
                        </div>
                    </div>
                );
            } else if ('mode' in section && section.mode === 'scale') {
                content = (
                    <div className={b('wrap')}>
                        {section.items?.map((item: NHPopupItemData, itemIndex: number) => (
                            <NHPopupItem
                                key={`${item.title}-${itemIndex}`}
                                imageColor={primaryColor}
                                imageColorHover={primaryColorHover}
                                {...item}
                                hover
                            />
                        ))}
                        {section.banner && <NHBanner {...section.banner} />}
                    </div>
                );
            } else {
                content = (
                    <div className={b('wrap')}>
                        {section.items?.map((item: NHPopupItemData, itemIndex: number) => (
                            <NHPopupItem
                                key={`${item.title}-${itemIndex}`}
                                imageColor={primaryColor}
                                imageColorHover={primaryColorHover}
                                {...item}
                                hover
                            />
                        ))}{' '}
                    </div>
                );
            }

            return (
                <div className={b('section')} key={section.title}>
                    <div className={b('section-head')}>
                        <div className={b('title')}>{section.title}</div>
                        <div className={b('subtitle')}>{section.subtitle}</div>
                    </div>
                    {content}
                </div>
            );
        })}
    </div>
);
