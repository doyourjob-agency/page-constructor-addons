import React from 'react';

import {Col, Grid, GridColumnSize, Row} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {CompanyPopupData} from '../../models';
import {PopupItem} from '../PopupItem/PopupItem';

import './CompanyPopup.scss';

const b = block('company-popup');

export const CompanyPopup = ({sections}: CompanyPopupData) => (
    <Grid className={b()} containerClass={b('container')}>
        <Row>
            {sections.map((section, index) => (
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
                        {section.items.map((item) => (
                            <PopupItem
                                key={item.title}
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
