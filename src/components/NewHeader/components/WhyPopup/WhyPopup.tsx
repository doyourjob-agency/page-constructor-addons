import React from 'react';

import {Col, Grid, GridColumnSize, Image, Row} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {WhyPopupData} from '../../models';
import {PopupItem} from '../PopupItem/PopupItem';

import './WhyPopup.scss';

const b = block('why-popup');

export const WhyPopup = ({groups, card}: WhyPopupData) => (
    <Grid className={b()} containerClass={b('container')}>
        <div className={b('wrap')}>
            {groups.map((group) => (
                <div className={b('group')} key={group.title}>
                    <Row>
                        <Col>
                            <div className={b('title')}>{group.title}</div>
                        </Col>
                    </Row>
                    <Row>
                        {group.items.map((item) => (
                            <PopupItem
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
