import type {RefObject} from 'react';
import React, {useCallback, useEffect, useState} from 'react';

import {block} from '../../../../utils/cn';
import {NO_MENU_TAB_SELECTED, SWITCH_MENU_TAB_TIMEOUT} from '../../constants';
import {NHNavigationItemData, NHNavigationItemType, SetupRouteChangeHandler} from '../../models';
import {NHDefaultPopup} from '../NHDefaultPopup/NHDefaultPopup';
import {NHNavigationItem} from '../NHNavigationItem/NHNavigationItem';
import {NHNavigationPopup} from '../NHNavigationPopup/NHNavigationPopup';
import {NHProductsPopup} from '../NHProductsPopup/NHProductsPopup';

import './NHNavigation.scss';

const b = block('nh-navigation');
const tooltipPrefixId = 'navigation-item-key';

interface NavigationProps {
    data: NHNavigationItemData[];
    headerRef?: RefObject<HTMLDivElement>;
    setupRouteChangeHandler?: SetupRouteChangeHandler;
}

const getPopupContent = (sectionData: NHNavigationItemData) => {
    switch (sectionData.type) {
        case NHNavigationItemType.NHProductsPopup:
            return <NHProductsPopup {...sectionData.data} />;
        case NHNavigationItemType.NHDefaultPopup:
            return <NHDefaultPopup {...sectionData.data} />;
        default:
            return null;
    }
};

export const NHNavigation = ({data, headerRef, setupRouteChangeHandler}: NavigationProps) => {
    const [activeTab, setActiveTab] = useState(NO_MENU_TAB_SELECTED);
    const [pretendentActiveTab, setPretendentAciveTab] = useState(NO_MENU_TAB_SELECTED);
    const [previouslyFocusedElement, setPreviouslyFocusedElement] = useState<HTMLElement | null>(
        null,
    );

    const handleActiveTab = useCallback((currentIndex: number) => {
        setPreviouslyFocusedElement(document.activeElement as HTMLElement);
        setPretendentAciveTab(currentIndex);
    }, []);

    const onEscapeKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setActiveTab(NO_MENU_TAB_SELECTED);
                setPretendentAciveTab(NO_MENU_TAB_SELECTED);
                previouslyFocusedElement?.focus({preventScroll: true});
            }
        },
        [previouslyFocusedElement],
    );

    useEffect(
        () =>
            setupRouteChangeHandler?.(() => {
                handleActiveTab(NO_MENU_TAB_SELECTED);
            }),
        [setupRouteChangeHandler, handleActiveTab],
    );

    useEffect(() => {
        const timerId = setTimeout(() => {
            setActiveTab(pretendentActiveTab);
        }, SWITCH_MENU_TAB_TIMEOUT);

        return () => clearTimeout(timerId);
    }, [activeTab, pretendentActiveTab]);

    useEffect(() => {
        document.addEventListener('keydown', onEscapeKeyDown);

        return () => {
            document.removeEventListener('keydown', onEscapeKeyDown);
        };
    }, [onEscapeKeyDown]);

    return (
        <nav>
            <ul className={b()}>
                {data.map((item: NHNavigationItemData, i: number) => (
                    <NHNavigationItem
                        key={item.title}
                        item={item}
                        handleActiveTab={handleActiveTab}
                        index={i}
                        isActive={activeTab === i}
                        tooltipId={`${tooltipPrefixId}-${i}`}
                    >
                        {activeTab === i && item.type !== NHNavigationItemType.Link && (
                            <NHNavigationPopup headerRef={headerRef} id={`${tooltipPrefixId}-${i}`}>
                                {getPopupContent(item)}
                            </NHNavigationPopup>
                        )}
                    </NHNavigationItem>
                ))}
            </ul>
        </nav>
    );
};
