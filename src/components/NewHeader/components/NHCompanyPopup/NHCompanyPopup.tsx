import React from 'react';

import {Col, Grid, GridColumnSize, Row} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {NHCompanyPopupData, NHCompanyPopupSection, NHPopupItemData} from '../../models';
import {NHPopupItem} from '../NHPopupItem/NHPopupItem';

import './NHCompanyPopup.scss';

const b = block('nh-company-popup');

export const NHCompanyPopup = ({sections}: NHCompanyPopupData) => (
    <Grid className={b()} containerClass={b('container')}>
        <Row>
            {sections.map((section: NHCompanyPopupSection, index: number) => (
                <Col
                    key={section.title}
                    sizes={
                        index === 0
                            ? {[GridColumnSize.All]: 12, [GridColumnSize.Md]: 4}
                            : {[GridColumnSize.All]: 12, [GridColumnSize.Md]: 8}
                    }
                >
                    <Row>
                        <Col>
                            <div className={b('title')}>{section.title}</div>
                        </Col>
                    </Row>
                    <Row>
                        {section.items.map((item: NHPopupItemData) => (
                            <NHPopupItem
                                key={item.title}
                                hover
                                {...item}
                                sizes={
                                    index === 0
                                        ? {[GridColumnSize.All]: 12}
                                        : {[GridColumnSize.All]: 12, [GridColumnSize.Md]: 6}
                                }
                            />
                        ))}
                    </Row>
                </Col>
            ))}
        </Row>
    </Grid>
);
