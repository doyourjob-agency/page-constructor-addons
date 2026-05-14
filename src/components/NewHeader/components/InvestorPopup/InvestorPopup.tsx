import React from 'react';

import {Col, Grid, GridColumnSize, Row, getLinkProps} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {InvestorPopupData} from '../../models';
import {PopupItem} from '../PopupItem/PopupItem';

import './InvestorPopup.scss';

const b = block('investor-popup');

export const InvestorPopup = ({title, subtitle, url, items, stock}: InvestorPopupData) => (
    <Grid className={b()} containerClass={b('container')}>
        <div className={b('wrap')}>
            <Row>
                <Col>
                    <a href={url} className={b('title')} {...getLinkProps(url)}>
                        {title}
                    </a>
                    <div className={b('subtitle')}>{subtitle}</div>
                </Col>
            </Row>
            <Row>
                {items.map((item) => (
                    <PopupItem
                        key={item.title}
                        {...item}
                        sizes={{[GridColumnSize.All]: 12, [GridColumnSize.Md]: 6}}
                    />
                ))}
            </Row>
        </div>
        {stock && (
            <div className={b('card')}>
                <div className={b('card-title')}>{stock.title}</div>
                <div className={b('card-wrap')}>
                    <div className={b('card-price')}>{stock.price}</div>
                    <div className={b('card-date')}>{stock.date}</div>
                </div>
            </div>
        )}
    </Grid>
);
