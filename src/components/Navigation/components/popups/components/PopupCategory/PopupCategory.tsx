import React from 'react';

import {block} from '../../../../../../utils/cn';
import {CategoryData} from '../../../../models';

import './PopupCategory.scss';

const b = block('popup-category');

interface ExtraPopupCategoryProps {
    data: CategoryData;
    onClick: (category: CategoryData) => void;
    isActive: boolean;
}

export const PopupCategory = ({data, onClick, isActive}: ExtraPopupCategoryProps) => {
    const {title} = data;

    return (
        <li className={b()} key={title} aria-current={isActive || undefined}>
            <button className={b('button', {active: isActive})} onClick={() => onClick(data)}>
                {title}
            </button>
        </li>
    );
};
