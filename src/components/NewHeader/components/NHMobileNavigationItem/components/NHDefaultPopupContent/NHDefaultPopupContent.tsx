import React from 'react';

import {block} from '../../../../../../utils/cn';
import {NHDefaultPopupData} from '../../../../models';
import {NHEventCard} from '../../../NHEventCard/NHEventCard';
import {NHPopupItem} from '../../../NHPopupItem/NHPopupItem';
import {NHStock} from '../../../NHStock/NHStock';
import {NHStoryCard} from '../../../NHStoryCard/NHStoryCard';

import './NHDefaultPopupContent.scss';

const b = block('nh-default-popup-content');

export const NHDefaultPopupContent = ({data}: {data: NHDefaultPopupData}) => (
    <div className={b()}>
        {data.sections.map((section, idx) => (
            <div key={idx} className={b('section')}>
                {section.title && <div className={b('section-title')}>{section.title}</div>}
                <div className={b('section-items')}>
                    {section.items.map((item, index) => (
                        <NHPopupItem
                            key={index}
                            imageColor={data.primaryColor}
                            imageColorHover={data.primaryColorHover}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        ))}
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
