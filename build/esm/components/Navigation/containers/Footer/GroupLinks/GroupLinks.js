import React from 'react';
import { block } from '../../../../../utils/cn';
import { EnrichedLink } from '../../../../EnrichedLink/EnrichedLink';
import './GroupLinks.css';
const b = block('group-links');
const GroupLinks = ({ columnGroup: { title, items }, className }) => {
    return (React.createElement("div", { className: b(null, className), key: title },
        React.createElement("ul", { className: b('group') },
            title && React.createElement("h5", { className: b('group-title') }, title),
            items.map((item) => (React.createElement("li", { key: item.title, className: b('item-wrapper') },
                React.createElement(EnrichedLink, Object.assign({ className: b('item') }, item))))))));
};
export default GroupLinks;
