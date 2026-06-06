import React from 'react';

import {getLinkProps} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {NHLogoData} from '../../models';

import './NHLogo.scss';

const b = block('nh-logo');

export interface NHLogoProps {
    data: NHLogoData;
}

export const NHLogo = ({data}: NHLogoProps) => {
    return (
        <a href={data.href} className={b()} {...getLinkProps(data.href || '')}>
            {data.src && <img className={b('img')} alt={data.alt} src={data.src} />}
        </a>
    );
};
