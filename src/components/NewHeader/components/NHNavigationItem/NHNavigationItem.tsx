import type {FC, ReactNode} from 'react';
import React, {useCallback, useContext, useEffect} from 'react';

import {getLinkProps} from '@doyourjob/gravity-ui-page-constructor';
import {Icon} from '@gravity-ui/uikit';

import {block} from '../../../../utils/cn';
import {NO_MENU_TAB_SELECTED} from '../../constants';
import {RouteChangeHandlerContext} from '../../contexts/route-change';
import {NHNavigationItemData, NHNavigationItemType} from '../../models';
import {ChevronDown} from '../ChevronDown';
import {ChevronUp} from '../ChevronUp';

import './NHNavigationItem.scss';

const b = block('nh-navigation-item');

interface NavigationItemOwnProps {
    index: number;
    item: NHNavigationItemData;
    isActive: boolean;
    handleActiveTab: (currentIndex: number) => void;
    handleFocusTab: (currentIndex: number) => void;
    handleFocusTabPopup: (currentIndex: number) => void;
    handleToggleTab: (currentIndex: number) => void;
    children?: ReactNode;
    tooltipId?: string;
}

export const NHNavigationItem: FC<NavigationItemOwnProps> = ({
    item,
    isActive,
    handleActiveTab,
    handleFocusTab,
    handleFocusTabPopup,
    handleToggleTab,
    index,
    children,
    tooltipId,
}) => {
    const setupRouteChangeHandler = useContext(RouteChangeHandlerContext);

    const handleMouseEnter = useCallback(() => handleActiveTab(index), [handleActiveTab, index]);

    const handleMouseLeave = useCallback(
        (event?: React.MouseEvent<HTMLElement>) => {
            const popup = tooltipId ? document.getElementById(tooltipId) : null;
            const nextHoveredElement = event?.relatedTarget || event?.nativeEvent.relatedTarget;

            if (nextHoveredElement && popup?.contains(nextHoveredElement as Node)) {
                return;
            }

            handleActiveTab(NO_MENU_TAB_SELECTED);
        },
        [handleActiveTab, tooltipId],
    );
    const handleMouseDown = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }, []);
    const handlePopupFocus = useCallback(() => handleFocusTab(index), [handleFocusTab, index]);
    const handleLinkFocus = useCallback(
        () => handleFocusTab(NO_MENU_TAB_SELECTED),
        [handleFocusTab],
    );
    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLButtonElement>) => {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                handleFocusTabPopup(index);
            } else if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleToggleTab(index);
            }
        },
        [handleFocusTabPopup, handleToggleTab, index],
    );

    useEffect(
        () =>
            setupRouteChangeHandler?.(() => {
                handleMouseLeave();
            }),
        [handleMouseLeave, setupRouteChangeHandler],
    );

    if (item.type === NHNavigationItemType.Link) {
        return (
            <li
                className={b({disable: !item.data?.url})}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <a
                    className={b('text', {active: isActive})}
                    href={item.data?.url}
                    onFocus={handleLinkFocus}
                    {...getLinkProps(item.data?.url || '', undefined, item.data?.target)}
                >
                    {item.title}
                </a>
                {children}
            </li>
        );
    }

    return (
        <li className={b({})} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
                className={b('text', {active: isActive, cursor: 'default'})}
                type="button"
                onMouseDown={handleMouseDown}
                onFocus={handlePopupFocus}
                onKeyDown={handleKeyDown}
                aria-expanded={isActive}
                aria-controls={tooltipId}
            >
                {item.title}
                <Icon className={b('icon')} data={isActive ? ChevronUp : ChevronDown} size={16} />
            </button>
            {children}
        </li>
    );
};
