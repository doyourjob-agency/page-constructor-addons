import React from 'react';
import { Icon, Link } from '@gravity-ui/uikit';
import { block } from '../../utils/cn';
import './EnrichedLink.css';
const b = block('enriched-link');
const ICON_SIZE = 16;
const SOCIAL_ICON_SIZE = 24;
export var EnrichedLinkType;
(function (EnrichedLinkType) {
    EnrichedLinkType["Default"] = "default";
    EnrichedLinkType["OnlyIcon"] = "icon";
})(EnrichedLinkType || (EnrichedLinkType = {}));
const getLinkProps = (props) => {
    const { url, blank, noreferrer, onClick } = props;
    const res = {
        href: url,
        target: blank ? '_blank' : undefined,
        onClick,
    };
    if (noreferrer || blank) {
        res.rel = 'noopener noreferrer';
    }
    return res;
};
export const EnrichedLink = (props) => {
    const { type, title, icon, className } = props;
    if (type === EnrichedLinkType.OnlyIcon) {
        return (React.createElement(Link, Object.assign({}, getLinkProps(props), { className: b({ type }, className), title: title, "data-router": "off" }), icon && React.createElement(Icon, { data: icon, size: SOCIAL_ICON_SIZE })));
    }
    return (React.createElement(Link, Object.assign({}, getLinkProps(props), { className: b({ type, ['left-icon']: Boolean(icon) }, className) }),
        icon && React.createElement(Icon, { data: icon, size: ICON_SIZE, className: b('icon') }),
        React.createElement("div", { className: b('content') },
            React.createElement("div", { className: b('title') }, title))));
};
