import type {FC, ReactNode} from 'react';
import React, {useCallback, useContext, useEffect} from 'react';

import {getLinkProps} from '@doyourjob/gravity-ui-page-constructor';

import {useIsCurrentPage} from '../../../../../hooks/useIsCurrentPage';
import {block} from '../../../../../utils/cn';
import {NO_MENU_TAB_SELECTED} from '../../../constants';
import {AnalyticsContext} from '../../../contexts/analytics';
import {LocationContext} from '../../../contexts/location';
import {RouteChangeHandlerContext} from '../../../contexts/route-change';
import {AnalyticsEventType, NavigationItemType, NavigationSectionData} from '../../../models';

import './NavigationItem.scss';

const b = block('navigation-item');

interface NavigationItemOwnProps {
    index: number;
    item: NavigationSectionData;
    isActive: boolean;
    handleOpenPopup: () => void;
    handleClosePopup: () => void;
    handleActiveTab: (currentIndex: number) => void;
    children?: ReactNode;
    tooltipId?: string;
}

export const NavigationItem: FC<NavigationItemOwnProps> = ({
    item,
    isActive,
    handleActiveTab,
    handleOpenPopup,
    handleClosePopup,
    index,
    children,
    tooltipId,
}) => {
    const {type, title, link, section} = item;
    const setupRouteChangeHandler = useContext(RouteChangeHandlerContext);
    const {hostname} = useContext(LocationContext);
    const linkProps = link && getLinkProps(link?.url, hostname, link?.target);
    const isPopupExist =
        type === NavigationItemType.LargePopup ||
        type === NavigationItemType.MediumPopup ||
        type === NavigationItemType.MediumPopupWithCategories;

    const {sendEvents} = useContext(AnalyticsContext) || {};
    const handleMouseEnter = useCallback(() => {
        handleActiveTab(index);

        if (isPopupExist) {
            handleOpenPopup();
        }
    }, [handleActiveTab, handleOpenPopup, index, isPopupExist]);

    const handleMouseLeave = useCallback(() => {
        if (isPopupExist) {
            handleClosePopup();
        }
        handleActiveTab(NO_MENU_TAB_SELECTED);
    }, [handleActiveTab, handleClosePopup, isPopupExist]);

    const handleOnClick = useCallback(() => {
        sendEvents?.([
            {
                name: AnalyticsEventType.PopupItemClick,
                params: {url: link?.url, section},
            },
        ]);
    }, [link?.url, section, sendEvents]);

    const isCurrentPage = useIsCurrentPage(link?.url);

    useEffect(
        () =>
            setupRouteChangeHandler?.(() => {
                handleMouseLeave();
            }),
        [handleMouseLeave, setupRouteChangeHandler],
    );

    if (type === NavigationItemType.Link) {
        return (
            <li
                key={title}
                className={b({disable: !link?.url})}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <a
                    className={b('text', {active: isActive})}
                    href={link?.url}
                    {...linkProps}
                    onClick={handleOnClick}
                    aria-current={isCurrentPage ? 'page' : undefined}
                >
                    {title}
                </a>
                {children}
            </li>
        );
    }

    return (
        <li
            key={title}
            className={b({})}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className={b('text', {active: isActive, cursor: 'default'})}
                onClick={handleMouseEnter}
                aria-expanded={isActive}
                aria-controls={tooltipId}
            >
                {title}
            </button>
            {children}
        </li>
    );
};
