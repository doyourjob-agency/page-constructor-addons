import React from 'react';

import {GridColumnSizesType, Row} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../../../utils/cn';
import {CategoryGroupData} from '../../../../models';
import {NavigationPopupItem} from '../../../Navigation/NavigationPopupItem/NavigationPopupItem';
import {PopupTitle} from '../PopupTitle/PopupTitle';

import './PopupSecondaryGroup.scss';

const b = block('popup-secondary-group');

type PopupSecondaryGroupProps = CategoryGroupData & {
    sizes?: GridColumnSizesType;
};

export const PopupSecondaryGroup = ({sizes, ...props}: PopupSecondaryGroupProps) => (
    <div className={b()}>
        <PopupTitle {...props} className={b('title')} />
        <div>
            <Row className={b('items')}>
                {Object.values(props.items).map(({title: popupTitle, icon, url: itemUrl}) => {
                    return (
                        <NavigationPopupItem
                            key={popupTitle}
                            url={itemUrl}
                            image={icon}
                            title={popupTitle}
                            padding="s"
                            imageSize="s"
                            sizes={sizes}
                        />
                    );
                })}
            </Row>
        </div>
    </div>
);
