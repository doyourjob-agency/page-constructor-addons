import React from 'react';

import {Col, Grid, GridColumnSize, Image, Row} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {NHPopupItemData, NHWhyPopupData, NHWhyPopupGroup} from '../../models';
import {NHPopupItem} from '../NHPopupItem/NHPopupItem';

import './NHWhyPopup.scss';

const b = block('nh-why-popup');

export const NHWhyPopup = ({groups, card}: NHWhyPopupData) => (
    <Grid className={b()} containerClass={b('container')}>
        <div className={b('wrap')}>
            {groups.map((group: NHWhyPopupGroup) => (
                <div className={b('group')} key={group.title}>
                    <Row>
                        <Col>
                            <div className={b('title')}>{group.title}</div>
                        </Col>
                    </Row>
                    <Row>
                        {group.items.map((item: NHPopupItemData) => (
                            <NHPopupItem
                                key={item.title}
                                {...item}
                                sizes={{[GridColumnSize.All]: 12}}
                            />
                        ))}
                    </Row>
                </div>
            ))}
        </div>
        {card && (
            <div className={b('card')}>
                <Image
                    className={b('card-image')}
                    containerClassName={b('card-container-image')}
                    src={card.image}
                />
                <div className={b('card-wrap')}>
                    <div className={b('card-title')}>{card.title}</div>
                    <div className={b('card-description')}>{card.description}</div>
                </div>
            </div>
        )}
    </Grid>
);
