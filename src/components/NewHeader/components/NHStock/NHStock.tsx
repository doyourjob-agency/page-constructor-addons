import React, {useContext} from 'react';

import {HeaderStockContext} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {NHStockData} from '../../models';

import './NHStock.scss';

const b = block('nh-stock');

export const NHStock = ({title, delayed, image}: NHStockData) => {
    const data = useContext(HeaderStockContext);

    if (!data.price) return null;

    return (
        <div className={b()}>
            {image ? <img className={b('background')} src={image} alt="Stock background" /> : null}
            <div className={b('title')}>{title}</div>
            <div className={b('title')}>{data.price.percent}</div>
            <div className={b('value')}>{data.price.price}</div>
            <div className={b('date')}>{data.price.update}</div>
            <div className={b('date')}>{delayed}</div>
        </div>
    );
};
