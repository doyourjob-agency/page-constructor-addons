import type {RefObject} from 'react';
import React, {useCallback, useEffect, useRef, useState} from 'react';

import {Icon, useUniqId} from '@gravity-ui/uikit';

import {block} from '../../../../utils/cn';
import {SWITCH_MENU_TAB_TIMEOUT} from '../../constants';
import {NHLoginPopupData, SetupRouteChangeHandler} from '../../models';
import {ChevronDown} from '../ChevronDown';
import {ChevronUp} from '../ChevronUp';
import {NHLoginPopup} from '../NHLoginPopup/NHLoginPopup';
import {NHNavigationPopup} from '../NHNavigationPopup/NHNavigationPopup';

import './NHLoginButton.scss';

const b = block('nh-login-button');

interface LoginButtonProps {
    data: NHLoginPopupData;
    headerRef?: RefObject<HTMLDivElement>;
    setupRouteChangeHandler?: SetupRouteChangeHandler;
}

export const NHLoginButton = ({data, headerRef, setupRouteChangeHandler}: LoginButtonProps) => {
    const [isActive, setIsActive] = useState(false);
    const [previouslyFocusedElement, setPreviouslyFocusedElement] = useState<HTMLElement | null>(
        null,
    );
    const popupId = useUniqId();
    const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearHoverTimer = useCallback(() => {
        if (hoverTimerRef.current) {
            clearTimeout(hoverTimerRef.current);
            hoverTimerRef.current = null;
        }
    }, []);

    // Open/close run through a single cancelable timer so moving from the trigger into the
    // portaled popup (across the gap) cannot force the menu closed.
    const handleActiveTab = useCallback(
        (val: boolean) => {
            setPreviouslyFocusedElement(document.activeElement as HTMLElement);
            clearHoverTimer();
            hoverTimerRef.current = setTimeout(() => {
                setIsActive(val);
            }, SWITCH_MENU_TAB_TIMEOUT);
        },
        [clearHoverTimer],
    );

    const onEscapeKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isActive) {
                clearHoverTimer();
                setIsActive(false);
                previouslyFocusedElement?.focus({preventScroll: true});
            }
        },
        [clearHoverTimer, isActive, previouslyFocusedElement],
    );

    const handleMouseEnter = useCallback(() => handleActiveTab(true), [handleActiveTab]);

    const handleMouseLeave = useCallback(
        (event?: React.MouseEvent<HTMLElement>) => {
            const popup = document.getElementById(popupId);
            const nextHoveredElement = event?.relatedTarget || event?.nativeEvent.relatedTarget;

            if (nextHoveredElement instanceof Node && popup?.contains(nextHoveredElement)) {
                return;
            }

            handleActiveTab(false);
        },
        [handleActiveTab, popupId],
    );

    const handleMouseDown = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }, []);

    const handleToggle = useCallback(() => {
        const focusedElement = document.activeElement as HTMLElement;
        const nextIsActive = !isActive;

        clearHoverTimer();
        setPreviouslyFocusedElement(focusedElement);
        setIsActive(nextIsActive);

        if (!nextIsActive) {
            focusedElement?.focus({preventScroll: true});
        }
    }, [clearHoverTimer, isActive]);

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLButtonElement>) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleToggle();
            }
        },
        [handleToggle],
    );

    useEffect(() => () => clearHoverTimer(), [clearHoverTimer]);

    useEffect(() => {
        document.addEventListener('keydown', onEscapeKeyDown);

        return () => {
            document.removeEventListener('keydown', onEscapeKeyDown);
        };
    }, [onEscapeKeyDown]);

    useEffect(
        () =>
            setupRouteChangeHandler?.(() => {
                clearHoverTimer();
                setIsActive(false);
            }),
        [clearHoverTimer, setupRouteChangeHandler],
    );

    return (
        <div
            className={b('wrapper')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className={b()}
                type="button"
                onMouseDown={handleMouseDown}
                onKeyDown={handleKeyDown}
                aria-expanded={isActive}
                aria-controls={popupId}
            >
                {data.text}
                <Icon data={isActive ? ChevronUp : ChevronDown} size={16} />
            </button>
            {isActive && (
                <NHNavigationPopup
                    headerRef={headerRef}
                    id={popupId}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <NHLoginPopup {...data} />
                </NHNavigationPopup>
            )}
        </div>
    );
};
