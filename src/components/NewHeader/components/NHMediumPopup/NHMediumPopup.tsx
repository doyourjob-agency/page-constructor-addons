import React from 'react';

import {Col, Grid, GridColumnSize, Row} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {NHCategoryGroupData, NHMediumPopupData, NHPopupItemData} from '../../models';
import {NHPopupItem} from '../NHPopupItem/NHPopupItem';

import './NHMediumPopup.scss';

const b = block('nh-medium-popup');

export const NHMediumPopup = ({groups}: NHMediumPopupData) => (
    <Grid>
        <Row>
            <Col className={b()}>
                {groups.map((dataItem: NHCategoryGroupData) =>
                    dataItem.items.map((item: NHPopupItemData) => (
                        <NHPopupItem
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
