import React, { useCallback, useContext } from 'react';
import { Col, HTML, Image, getLinkProps } from '@gravity-ui/page-constructor';
import { Icon } from '@gravity-ui/uikit';
import { useIsCurrentPage } from '../../../../../hooks/useIsCurrentPage';
import { block } from '../../../../../utils/cn';
import { DefaultCategorizedItemSizes } from '../../../constants';
import { AnalyticsContext } from '../../../contexts/analytics';
import { LocationContext } from '../../../contexts/location';
import { NavigationSectionContext } from '../../../contexts/navigation-section';
import { AnalyticsEventType } from '../../../models';
import { NavigationTag } from '../../Tag/Tag';
import './NavigationPopupItem.css';
const b = block('navigation-popup-item');
export const NavigationPopupItem = (props) => {
    const { icon, url, target, title, tag, description, image, imageSize = 'm', hover, className, sizes = DefaultCategorizedItemSizes, padding = 'default', } = props;
    const navigationSection = useContext(NavigationSectionContext);
    const { sendEvents } = useContext(AnalyticsContext) || {};
    const { hostname } = useContext(LocationContext) || {};
    const linkProps = url ? getLinkProps(url, hostname, target) : {};
    const handleOnClick = useCallback(() => {
        sendEvents === null || sendEvents === void 0 ? void 0 : sendEvents([
            {
                name: AnalyticsEventType.PopupItemClick,
                params: { url, section: navigationSection },
            },
        ]);
    }, [sendEvents, navigationSection, url]);
    const navigationTag = tag && React.createElement(NavigationTag, Object.assign({ className: b('tag'), size: "s" }, tag));
    const isCurrentPage = useIsCurrentPage(url);
    return (React.createElement(Col, { className: b(null, className), sizes: sizes },
        React.createElement("a", Object.assign({ className: b('content', { hover, padding, disable: !url }), href: url }, linkProps, { onClick: handleOnClick, "aria-current": isCurrentPage ? 'page' : undefined }),
            icon && (React.createElement("div", { className: b('icon-container') },
                React.createElement(Icon, { className: b('icon'), data: icon, size: 16 }))),
            image && (React.createElement("div", { className: b('image-container') },
                React.createElement(Image, { className: b('image', { size: imageSize }), src: image }))),
            React.createElement("div", { className: b('container', { 'with-margin': Boolean(icon) }) },
                React.createElement("div", { className: b('title-tag-wrapper') },
                    React.createElement("span", { className: b('title') }, title),
                    "\u00A0",
                    navigationTag),
                description && React.createElement(HTML, { className: b('description') }, description)))));
};
