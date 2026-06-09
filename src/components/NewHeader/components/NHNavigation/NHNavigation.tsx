import type {RefObject} from 'react';
import React, {useCallback, useEffect, useState} from 'react';

import {block} from '../../../../utils/cn';
import {NO_MENU_TAB_SELECTED, SWITCH_MENU_TAB_TIMEOUT} from '../../constants';
import {NHNavigationItemData, NHNavigationItemType, SetupRouteChangeHandler} from '../../models';
import {NHDefaultPopup} from '../NHDefaultPopup/NHDefaultPopup';
import {NHNavigationItem} from '../NHNavigationItem/NHNavigationItem';
import {NHNavigationPopup} from '../NHNavigationPopup/NHNavigationPopup';
import {focusFromKeyboard, getFocusableElements} from '../NHNavigationPopup/keyboardNavigation';

import './NHNavigation.scss';

const b = block('nh-navigation');
const tooltipPrefixId = 'navigation-item-key';

interface NavigationProps {
    activeNavigationId: string | null;
    data: NHNavigationItemData[];
    headerRef?: RefObject<HTMLDivElement>;
    navigationId: string;
    setupRouteChangeHandler?: SetupRouteChangeHandler;
    setActiveNavigationId: (navigationId: string | null) => void;
}

const getPopupContent = (sectionData: NHNavigationItemData) => {
    switch (sectionData.type) {
        case NHNavigationItemType.NHDefaultPopup:
            return <NHDefaultPopup {...sectionData.data} />;
        default:
            return null;
    }
};

export const NHNavigation = ({
    activeNavigationId,
    data,
    headerRef,
    navigationId,
    setupRouteChangeHandler,
    setActiveNavigationId,
}: NavigationProps) => {
    const [activeTab, setActiveTab] = useState(NO_MENU_TAB_SELECTED);
    const [pretendentActiveTab, setPretendentAciveTab] = useState(NO_MENU_TAB_SELECTED);
    const [previouslyFocusedElement, setPreviouslyFocusedElement] = useState<HTMLElement | null>(
        null,
    );
    const [popupTabToFocus, setPopupTabToFocus] = useState<number | null>(null);

    const setNavigationTab = useCallback(
        (currentIndex: number) => {
            setPretendentAciveTab(currentIndex);
            setActiveTab(currentIndex);
            setPopupTabToFocus(null);
            setActiveNavigationId(currentIndex === NO_MENU_TAB_SELECTED ? null : navigationId);
        },
        [navigationId, setActiveNavigationId],
    );

    const handleActiveTab = useCallback(
        (currentIndex: number) => {
            setPreviouslyFocusedElement(document.activeElement as HTMLElement);

            if (activeTab === NO_MENU_TAB_SELECTED && currentIndex !== NO_MENU_TAB_SELECTED) {
                setNavigationTab(currentIndex);

                return;
            }

            setPretendentAciveTab(currentIndex);
        },
        [activeTab, setNavigationTab],
    );

    const handleToggleTab = useCallback(
        (currentIndex: number) => {
            const focusedElement = document.activeElement as HTMLElement;
            const nextActiveTab = activeTab === currentIndex ? NO_MENU_TAB_SELECTED : currentIndex;

            setPreviouslyFocusedElement(focusedElement);
            setNavigationTab(nextActiveTab);

            if (nextActiveTab === NO_MENU_TAB_SELECTED) {
                focusedElement?.focus({preventScroll: true});
            }
        },
        [activeTab, setNavigationTab],
    );

    const handleFocusTabPopup = useCallback(
        (currentIndex: number) => {
            setPreviouslyFocusedElement(document.activeElement as HTMLElement);
            setPretendentAciveTab(currentIndex);
            setActiveTab(currentIndex);
            setPopupTabToFocus(currentIndex);
            setActiveNavigationId(navigationId);
        },
        [navigationId, setActiveNavigationId],
    );

    const handleFocusTab = useCallback(
        (currentIndex: number) => {
            if (activeNavigationId === null) {
                return;
            }

            setPreviouslyFocusedElement(document.activeElement as HTMLElement);
            setNavigationTab(currentIndex);
        },
        [activeNavigationId, setNavigationTab],
    );

    const handleCloseTab = useCallback(() => {
        setNavigationTab(NO_MENU_TAB_SELECTED);
        previouslyFocusedElement?.focus({preventScroll: true});
    }, [previouslyFocusedElement, setNavigationTab]);

    const handleBlur = useCallback(
        (event: React.FocusEvent<HTMLElement>) => {
            if (activeTab === NO_MENU_TAB_SELECTED) {
                return;
            }

            const nextFocusedElement = event.relatedTarget;
            const popup = document.getElementById(`${tooltipPrefixId}-${activeTab}`);

            if (
                nextFocusedElement &&
                (event.currentTarget.contains(nextFocusedElement) ||
                    popup?.contains(nextFocusedElement))
            ) {
                return;
            }

            setNavigationTab(NO_MENU_TAB_SELECTED);
        },
        [activeTab, setNavigationTab],
    );

    const onEscapeKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape' && activeTab !== NO_MENU_TAB_SELECTED) {
                handleCloseTab();
            }
        },
        [activeTab, handleCloseTab],
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

            if (pretendentActiveTab !== NO_MENU_TAB_SELECTED) {
                setActiveNavigationId(navigationId);
            } else if (activeNavigationId === navigationId) {
                setActiveNavigationId(null);
            }
        }, SWITCH_MENU_TAB_TIMEOUT);

        return () => clearTimeout(timerId);
    }, [activeNavigationId, navigationId, pretendentActiveTab, setActiveNavigationId]);

    useEffect(() => {
        if (activeNavigationId !== navigationId && activeTab !== NO_MENU_TAB_SELECTED) {
            setActiveTab(NO_MENU_TAB_SELECTED);
            setPretendentAciveTab(NO_MENU_TAB_SELECTED);
            setPopupTabToFocus(null);
        }
    }, [activeNavigationId, activeTab, navigationId]);

    useEffect(() => {
        if (popupTabToFocus === null || activeTab !== popupTabToFocus) {
            return;
        }

        const popup = document.getElementById(`${tooltipPrefixId}-${popupTabToFocus}`);
        const [firstFocusableElement] = getFocusableElements(popup);

        focusFromKeyboard(firstFocusableElement, popup);
        setPopupTabToFocus(null);
    }, [activeTab, popupTabToFocus]);

    useEffect(() => {
        document.addEventListener('keydown', onEscapeKeyDown);

        return () => {
            document.removeEventListener('keydown', onEscapeKeyDown);
        };
    }, [onEscapeKeyDown]);

    return (
        <nav onBlur={handleBlur}>
            <ul className={b()}>
                {data.map((item: NHNavigationItemData, i: number) => (
                    <NHNavigationItem
                        key={i}
                        item={item}
                        handleActiveTab={handleActiveTab}
                        handleFocusTabPopup={handleFocusTabPopup}
                        handleFocusTab={handleFocusTab}
                        handleToggleTab={handleToggleTab}
                        index={i}
                        isActive={activeTab === i}
                        tooltipId={`${tooltipPrefixId}-${i}`}
                    >
                        {activeTab === i && item.type !== NHNavigationItemType.Link && (
                            <NHNavigationPopup
                                headerRef={headerRef}
                                id={`${tooltipPrefixId}-${i}`}
                                onMouseEnter={() => handleActiveTab(i)}
                                onMouseLeave={() => handleActiveTab(NO_MENU_TAB_SELECTED)}
                            >
                                {getPopupContent(item)}
                            </NHNavigationPopup>
                        )}
                    </NHNavigationItem>
                ))}
            </ul>
        </nav>
    );
};
