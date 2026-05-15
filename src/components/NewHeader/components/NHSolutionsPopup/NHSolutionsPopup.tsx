import React from 'react';

import {Col, Grid, GridColumnSize, Row} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {NHPopupItemData, NHSolutionsPopupData, NHSolutionsPopupSection} from '../../models';
import {NHPopupItem} from '../NHPopupItem/NHPopupItem';

import './NHSolutionsPopup.scss';

const b = block('nh-solutions-popup');

export const NHSolutionsPopup = ({sections}: NHSolutionsPopupData) => (
    <Grid className={b()} containerClass={b('container')}>
        {sections.map((section: NHSolutionsPopupSection) => (
            <Row key={section.title}>
                <Col className={b('wrap')}>
                    <Row>
                        <Col className={b('head')}>
                            <div className={b('title')}>{section.title}</div>
                            <div className={b('subtitle')}>{section.subtitle}</div>
                        </Col>
                    </Row>
                    <Row>
                        {section.items.map((item: NHPopupItemData) => (
                            <NHPopupItem
                                key={item.title}
                                {...item}
                                hover
                                sizes={{
                                    [GridColumnSize.Md]: 4,
                                    [GridColumnSize.All]: 12,
                                }}
                            />
                        ))}
                    </Row>
                </Col>
            </Row>
        ))}
    </Grid>
);
