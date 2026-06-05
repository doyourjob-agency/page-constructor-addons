import React from 'react';

import {Col, Grid, Row} from '@doyourjob/gravity-ui-page-constructor';

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
                        <NHPopupItem {...item} key={item.title} hover />
                    )),
                )}
            </Col>
        </Row>
    </Grid>
);
