import React from 'react';

import {Col, Grid, GridColumnSize, Row} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {SolutionsPopupData} from '../../models';
import {PopupItem} from '../PopupItem/PopupItem';

import './SolutionsPopup.scss';

const b = block('solutions-popup');

export const SolutionsPopup = ({sections}: SolutionsPopupData) => (
    <Grid className={b()} containerClass={b('container')}>
        {sections.map((section) => (
            <Row key={section.title}>
                <Col className={b('wrap')}>
                    <Row>
                        <Col className={b('head')}>
                            <div className={b('title')}>{section.title}</div>
                            <div className={b('subtitle')}>{section.subtitle}</div>
                        </Col>
                    </Row>
                    <Row>
                        {section.items.map((item) => (
                            <PopupItem
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
