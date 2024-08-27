import React from 'react';
import Check from '@gravity-ui/icons/Check';
import { Icon } from '@gravity-ui/uikit';
import { block } from '../../../../../utils/cn';
import './LangSwitchPopup.css';
const b = block('lang-switch-popup');
export const LangSwitchPopup = ({ items }) => {
    return (React.createElement("div", { className: b() }, items.map(({ title, description, active, url, icon }) => {
        return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        React.createElement("a", { className: b('item'), key: description, href: active ? undefined : url },
            React.createElement("div", { className: b('row') },
                icon && (React.createElement(Icon, { className: b('icon'), data: icon, width: 18, height: 12 })),
                React.createElement("div", { className: b('text') },
                    React.createElement("span", { className: b('name') }, title),
                    React.createElement("span", { className: b('lang') }, description)),
                active && (React.createElement(Icon, { className: b('icon-check'), data: Check, width: 16, height: 16 })))));
    })));
};
