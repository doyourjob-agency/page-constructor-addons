import React from 'react';

import {block} from '../../../../../../utils/cn';
import {NHProductsPopupData} from '../../../../models';
import {NHBanner} from '../../../NHBanner/NHBanner';
import {NHPopupItem} from '../../../NHPopupItem/NHPopupItem';

import './NHProductsContent.scss';

const b = block('nh-products-content');

export const NHProductsContent = ({data}: {data: NHProductsPopupData}) => (
    <div className={b()}>
        {data.sections.map((section, index) => {
            const isRun = 'mode' in section && section.mode === 'run';
            return (
                <div key={index} className={b('section')}>
                    <div className={b('section-title')}>{section.title}</div>
                    <div className={b('section-items')}>
                        {section.items?.map((item, idx) => (
                            <NHPopupItem
                                key={idx}
                                imageColor={isRun ? undefined : data.primaryColor}
                                imageColorHover={isRun ? undefined : data.primaryColorHover}
                                {...item}
                                column={isRun}
                            />
                        ))}
                    </div>
                    {'banner' in section && section.banner && (
                        <div className={b('banner-container')}>
                            <NHBanner {...section.banner} />
                        </div>
                    )}
                </div>
            );
        })}
    </div>
);
