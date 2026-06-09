import type {RefObject} from 'react';
import React, {useCallback, useEffect, useRef, useState} from 'react';

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
    setActiveNavigationId: React.Dispatch<React.SetStateAction<string | null>>;
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
    const [previouslyFocusedElement, setPreviouslyFocusedElement] = useState<HTMLElement | null>(
        null,
    );
    const [popupTabToFocus, setPopupTabToFocus] = useState<number | null>(null);
    const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearHoverTimer = useCallback(() => {
        if (hoverTimerRef.current) {
            clearTimeout(hoverTimerRef.current);
            hoverTimerRef.current = null;
        }
    }, []);

    const setNavigationTab = useCallback(
        (currentIndex: number) => {
            setActiveTab(currentIndex);
            setPopupTabToFocus(null);
            setActiveNavigationId(
                currentIndex === NO_MENU_TAB_SELECTED
                    ? (prev) => (prev === navigationId ? null : prev)
                    : navigationId,
            );
        },
        [navigationId, setActiveNavigationId],
    );

    // Hover open/switch/close all run through a single cancelable timer: every new pointer
    // event cancels the pending one, so a brief transit across the trigger->popup gap (or
    // rapid movement between items) can no longer force the popup closed.
    const handleActiveTab = useCallback(
        (currentIndex: number) => {
            setPreviouslyFocusedElement(document.activeElement as HTMLElement);
            clearHoverTimer();
            hoverTimerRef.current = setTimeout(() => {
                setNavigationTab(currentIndex);
            }, SWITCH_MENU_TAB_TIMEOUT);
        },
        [clearHoverTimer, setNavigationTab],
    );

    const handleToggleTab = useCallback(
        (currentIndex: number) => {
            const focusedElement = document.activeElement as HTMLElement;
            const nextActiveTab = activeTab === currentIndex ? NO_MENU_TAB_SELECTED : currentIndex;

            clearHoverTimer();
            setPreviouslyFocusedElement(focusedElement);
            setNavigationTab(nextActiveTab);

            if (nextActiveTab === NO_MENU_TAB_SELECTED) {
                focusedElement?.focus({preventScroll: true});
            }
        },
        [activeTab, clearHoverTimer, setNavigationTab],
    );

    const handleFocusTabPopup = useCallback(
        (currentIndex: number) => {
            clearHoverTimer();
            setPreviouslyFocusedElement(document.activeElement as HTMLElement);
            setActiveTab(currentIndex);
            setPopupTabToFocus(currentIndex);
            setActiveNavigationId(navigationId);
        },
        [clearHoverTimer, navigationId, setActiveNavigationId],
    );

    const handleFocusTab = useCallback(
        (currentIndex: number) => {
            if (activeNavigationId === null) {
                return;
            }

            clearHoverTimer();
            setPreviouslyFocusedElement(document.activeElement as HTMLElement);
            setNavigationTab(currentIndex);
        },
        [activeNavigationId, clearHoverTimer, setNavigationTab],
    );

    const handleCloseTab = useCallback(() => {
        clearHoverTimer();
        setNavigationTab(NO_MENU_TAB_SELECTED);
        previouslyFocusedElement?.focus({preventScroll: true});
    }, [clearHoverTimer, previouslyFocusedElement, setNavigationTab]);

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

            clearHoverTimer();
            setNavigationTab(NO_MENU_TAB_SELECTED);
        },
        [activeTab, clearHoverTimer, setNavigationTab],
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
                clearHoverTimer();
                setNavigationTab(NO_MENU_TAB_SELECTED);
            }),
        [setupRouteChangeHandler, clearHoverTimer, setNavigationTab],
    );

    useEffect(() => {
        if (activeNavigationId !== navigationId && activeTab !== NO_MENU_TAB_SELECTED) {
            clearHoverTimer();
            setActiveTab(NO_MENU_TAB_SELECTED);
            setPopupTabToFocus(null);
        }
    }, [activeNavigationId, activeTab, navigationId, clearHoverTimer]);

    useEffect(() => () => clearHoverTimer(), [clearHoverTimer]);

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
