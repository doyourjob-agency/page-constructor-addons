import React from 'react';

import {Col, Grid, GridColumnSize, Row, getLinkProps} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {NHInvestorPopupData, NHPopupItemData} from '../../models';
import {NHPopupItem} from '../NHPopupItem/NHPopupItem';

import './NHInvestorPopup.scss';

const b = block('nh-investor-popup');

export const NHInvestorPopup = ({title, subtitle, url, items, stock}: NHInvestorPopupData) => (
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
                {items.map((item: NHPopupItemData) => (
                    <NHPopupItem
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
