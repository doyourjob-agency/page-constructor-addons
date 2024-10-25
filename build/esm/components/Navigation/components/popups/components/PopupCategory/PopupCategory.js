import React from 'react';
import { block } from '../../../../../../utils/cn';
import './PopupCategory.css';
const b = block('popup-category');
export const PopupCategory = ({ data, onClick, isActive }) => {
    const { title } = data;
    return (React.createElement("li", { className: b(), key: title, "aria-current": isActive || undefined },
        React.createElement("button", { className: b('button', { active: isActive }), onClick: () => onClick(data) }, title)));
};
