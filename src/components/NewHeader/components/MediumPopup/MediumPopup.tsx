import React from 'react';

import {Col, Grid, GridColumnSize, Row} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {MediumPopupData} from '../../models';
import {PopupItem} from '../PopupItem/PopupItem';

import './MediumPopup.scss';

const b = block('medium-popup');

export const MediumPopup = ({groups}: MediumPopupData) => (
    <Grid>
        <Row>
            <Col className={b()}>
                {groups.map((dataItem) =>
                    dataItem.items.map((item) => (
                        <PopupItem
                            {...item}
                            key={item.title}
                            hover
                            imageSize={dataItem.imageSize}
                            sizes={{
                                [GridColumnSize.Xl]: 3,
                                [GridColumnSize.Md]: 4,
                                [GridColumnSize.All]: 12,
                            }}
                        />
                    )),
                )}
            </Col>
        </Row>
    </Grid>
);
