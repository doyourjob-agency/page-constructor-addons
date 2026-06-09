import type {RefObject} from 'react';
import React, {useCallback, useEffect, useState} from 'react';

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
    const [pretendentActiveTab, setPretendentAciveTab] = useState(false);
    const [previouslyFocusedElement, setPreviouslyFocusedElement] = useState<HTMLElement | null>(
        null,
    );
    const popupId = useUniqId();

    const handleActiveTab = useCallback((val: boolean) => {
        setPreviouslyFocusedElement(document.activeElement as HTMLElement);
        setPretendentAciveTab(val);
    }, []);

    const onEscapeKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isActive) {
                setIsActive(false);
                setPretendentAciveTab(false);
                previouslyFocusedElement?.focus({preventScroll: true});
            }
        },
        [isActive, previouslyFocusedElement],
    );

    const handleMouseEnter = useCallback(() => handleActiveTab(true), [handleActiveTab]);

    const handleMouseLeave = useCallback(() => handleActiveTab(false), [handleActiveTab]);

    const handleMouseDown = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }, []);

    const handleToggle = useCallback(() => {
        const focusedElement = document.activeElement as HTMLElement;
        const nextIsActive = !isActive;

        setPreviouslyFocusedElement(focusedElement);
        setPretendentAciveTab(nextIsActive);
        setIsActive(nextIsActive);

        if (!nextIsActive) {
            focusedElement?.focus({preventScroll: true});
        }
    }, [isActive]);

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLButtonElement>) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleToggle();
            }
        },
        [handleToggle],
    );

    useEffect(() => {
        const timerId = setTimeout(() => {
            setIsActive(pretendentActiveTab);
        }, SWITCH_MENU_TAB_TIMEOUT);

        return () => clearTimeout(timerId);
    }, [pretendentActiveTab]);

    useEffect(() => {
        document.addEventListener('keydown', onEscapeKeyDown);

        return () => {
            document.removeEventListener('keydown', onEscapeKeyDown);
        };
    }, [onEscapeKeyDown]);

    useEffect(
        () =>
            setupRouteChangeHandler?.(() => {
                handleMouseLeave();
            }),
        [handleMouseLeave, setupRouteChangeHandler],
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
                <NHNavigationPopup headerRef={headerRef} id={popupId}>
                    <NHLoginPopup {...data} />
                </NHNavigationPopup>
            )}
        </div>
    );
};
