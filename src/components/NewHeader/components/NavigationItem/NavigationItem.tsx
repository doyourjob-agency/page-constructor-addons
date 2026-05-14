import type {FC, ReactNode} from 'react';
import React, {useCallback, useContext, useEffect} from 'react';

import {getLinkProps} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {NO_MENU_TAB_SELECTED} from '../../constants';
import {RouteChangeHandlerContext} from '../../contexts/route-change';
import {NavigationItemData, NavigationItemType} from '../../models';

import './NavigationItem.scss';

const b = block('navigation-item');

interface NavigationItemOwnProps {
    index: number;
    item: NavigationItemData;
    isActive: boolean;
    handleActiveTab: (currentIndex: number) => void;
    children?: ReactNode;
    tooltipId?: string;
}

export const NavigationItem: FC<NavigationItemOwnProps> = ({
    item,
    isActive,
    handleActiveTab,
    index,
    children,
    tooltipId,
}) => {
    const setupRouteChangeHandler = useContext(RouteChangeHandlerContext);

    const handleMouseEnter = useCallback(() => handleActiveTab(index), [handleActiveTab, index]);

    const handleMouseLeave = useCallback(
        () => handleActiveTab(NO_MENU_TAB_SELECTED),
        [handleActiveTab],
    );

    useEffect(
        () =>
            setupRouteChangeHandler?.(() => {
                handleMouseLeave();
            }),
        [handleMouseLeave, setupRouteChangeHandler],
    );

    if (item.type === NavigationItemType.Link) {
        return (
            <li
                key={item.title}
                className={b({disable: !item.data?.url})}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <a
                    className={b('text', {active: isActive})}
                    href={item.data?.url}
                    {...getLinkProps(item.data?.url || '', undefined, item.data?.target)}
                >
                    {item.title}
                </a>
                {children}
            </li>
        );
    }

    return (
        <li
            key={item.title}
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
                {item.title}
            </button>
            {children}
        </li>
    );
};
