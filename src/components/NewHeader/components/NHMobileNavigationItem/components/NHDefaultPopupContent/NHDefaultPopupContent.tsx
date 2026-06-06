import React from 'react';

import {block} from '../../../../../../utils/cn';
import {NHDefaultPopupData, NHDefaultPopupSection} from '../../../../models';
import {NHBanner} from '../../../NHBanner/NHBanner';
import {NHEventCard} from '../../../NHEventCard/NHEventCard';
import {NHPopupItem} from '../../../NHPopupItem/NHPopupItem';
import {NHStock} from '../../../NHStock/NHStock';
import {NHStoryCard} from '../../../NHStoryCard/NHStoryCard';

import './NHDefaultPopupContent.scss';

const b = block('nh-default-popup-content');

export const NHDefaultPopupContent = ({data}: {data: NHDefaultPopupData}) => (
    <div className={b()}>
        {data.sections.map((section: NHDefaultPopupSection, idx: number) => {
            const isRun = section.mode === 'run';
            const hasSideHead = Boolean(section.mode);
            return (
                <div key={idx} className={b('section')}>
                    {section.title && <div className={b('section-title')}>{section.title}</div>}
                    <div className={b('section-items')}>
                        {section.items.map((item, index) => (
                            <NHPopupItem
                                key={index}
                                imageColor={hasSideHead && !isRun ? data.primaryColor : undefined}
                                imageColorHover={
                                    hasSideHead && !isRun ? data.primaryColorHover : undefined
                                }
                                {...item}
                                column={isRun}
                            />
                        ))}
                    </div>
                    {section.banner && (
                        <div className={b('banner-container')}>
                            <NHBanner {...section.banner} />
                        </div>
                    )}
                </div>
            );
        })}
        {data.right && (
            <div className={b('right-section')}>
                {data.right.title && <div className={b('section-title')}>{data.right.title}</div>}
                <div className={b('right-items')}>
                    {data.right.stories?.map((story, i) => (
                        <NHStoryCard key={i} {...story} />
                    ))}
                    {data.right.events?.map((event, i) => (
                        <NHEventCard key={i} {...event} />
                    ))}
                    {data.right.stock && <NHStock {...data.right.stock} />}
                </div>
            </div>
        )}
    </div>
);
