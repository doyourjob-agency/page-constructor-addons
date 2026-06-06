import React from 'react';

import {block} from '../../../../utils/cn';
import {NHPopupItemData, NHProductsPopupData} from '../../models';
import {NHBanner} from '../NHBanner/NHBanner';
import {NHPopupItem} from '../NHPopupItem/NHPopupItem';

import './NHProductsPopup.scss';

const b = block('nh-products-popup');

export const NHProductsPopup = ({
    sections,
    primaryColor,
    primaryColorHover,
}: NHProductsPopupData) => (
    <div className={b()}>
        {sections.map((section, index) => {
            let content;
            if ('mode' in section && section.mode === 'run') {
                content = (
                    <div className={b('wrap-scale')}>
                        {section.items?.[0] && <NHPopupItem {...section.items[0]} column />}
                        <div className={b('wrap')}>
                            {section.items
                                ?.slice(1, 4)
                                .map((item: NHPopupItemData, cardIndex: number) => (
                                    <NHPopupItem key={cardIndex} {...item} column />
                                ))}
                        </div>
                        <div className={b('wrap')}>
                            {section.items
                                ?.slice(4)
                                .map((item: NHPopupItemData, cardIndex: number) => (
                                    <NHPopupItem key={cardIndex} {...item} column />
                                ))}
                        </div>
                    </div>
                );
            } else if ('mode' in section && section.mode === 'scale') {
                content = (
                    <div className={b('wrap')}>
                        {section.items?.map((item: NHPopupItemData, itemIndex: number) => (
                            <NHPopupItem
                                key={itemIndex}
                                imageColor={primaryColor}
                                imageColorHover={primaryColorHover}
                                {...item}
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
                                key={itemIndex}
                                imageColor={primaryColor}
                                imageColorHover={primaryColorHover}
                                {...item}
                            />
                        ))}{' '}
                    </div>
                );
            }

            return (
                <div className={b('section')} key={index}>
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
