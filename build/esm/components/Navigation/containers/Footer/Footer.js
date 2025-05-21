import React, { useMemo } from 'react';
import { Col, Grid, Row } from '@doyourjob/gravity-ui-page-constructor';
import { useMobile } from '@gravity-ui/uikit';
import { block } from '../../../../utils/cn';
import { EnrichedLink } from '../../../EnrichedLink/EnrichedLink';
import { LangSwitch } from '../../components/LangSwitch';
import GroupLinks from './GroupLinks/GroupLinks';
import './Footer.css';
const b = block('footer');
const columnSize = {
    all: 6,
    sm: 3,
    md: 2,
};
export const Footer = (props) => {
    const { type = 'default', underline, columns, media, customItems } = props;
    const isMobile = useMobile();
    const mediaContent = useMemo(() => {
        if (!media) {
            return null;
        }
        return React.createElement(Col, { sizes: { all: 12, md: media.md || 6 } }, media.item);
    }, [media]);
    const groupLinks = useMemo(() => {
        if (!(columns === null || columns === void 0 ? void 0 : columns.length)) {
            return null;
        }
        return (React.createElement(React.Fragment, null, columns.map((groups, index) => (React.createElement(Col, { key: index, className: b('column'), sizes: columnSize }, groups.map((group, groupIndex) => (React.createElement(GroupLinks, { key: groupIndex, columnGroup: group, className: b('group-wrapper') }))))))));
    }, [columns]);
    const isSimple = type === 'simple';
    const underlineBlock = useMemo(() => {
        var _a, _b;
        if (!underline) {
            return null;
        }
        const itemClass = b('item', { underline: true });
        return (React.createElement("div", { className: b('underline') },
            React.createElement("div", { className: b('underline-links') },
                underline.langSwitch && (React.createElement(LangSwitch, Object.assign({}, underline.langSwitch, { className: b('item', { underline: true, 'lang-switch': true }), direction: ['top-start', 'top', 'top-end'], size: "m", iconSize: 16, isMobile: isMobile }))),
                !isSimple &&
                    ((_a = underline.leftItems) === null || _a === void 0 ? void 0 : _a.map((item) => (React.createElement(EnrichedLink, Object.assign({ key: item.title, className: itemClass }, item)))))),
            React.createElement("div", { className: b('underline-links') }, (_b = underline.rightItems) === null || _b === void 0 ? void 0 :
                _b.map((item) => (React.createElement(EnrichedLink, Object.assign({ key: item.title, className: itemClass }, item)))),
                underline.copyright && (React.createElement("div", { className: b('copyright') }, underline.copyright)))));
    }, [underline, isSimple, isMobile]);
    const isRightMedia = (media === null || media === void 0 ? void 0 : media.position) === 'right';
    return (React.createElement("footer", { className: b({ type }) }, isSimple ? (underlineBlock) : (React.createElement(Grid, { containerClass: b('container-fluid') },
        React.createElement(Row, { className: b('wrapper') },
            !isRightMedia && mediaContent,
            groupLinks,
            isRightMedia && mediaContent,
            customItems,
            React.createElement(Col, { className: b('column', { underline: true }), sizes: { all: 12 } }, underlineBlock))))));
};
