import type {RefObject} from 'react';
import React, {useCallback, useEffect, useState} from 'react';

import {SWITCH_MENU_TAB_TIMEOUT} from '../../constants';
import {NHLoginPopupData, SetupRouteChangeHandler} from '../../models';
import {NHLoginPopup} from '../NHLoginPopup/NHLoginPopup';
import {NHNavigationPopup} from '../NHNavigationPopup/NHNavigationPopup';

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

    const handleActiveTab = useCallback((val: boolean) => {
        setPreviouslyFocusedElement(document.activeElement as HTMLElement);
        setPretendentAciveTab(val);
    }, []);

    const onEscapeKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsActive(false);
                setPretendentAciveTab(false);
                previouslyFocusedElement?.focus({preventScroll: true});
            }
        },
        [previouslyFocusedElement],
    );

    const handleMouseEnter = useCallback(() => handleActiveTab(true), [handleActiveTab]);

    const handleMouseLeave = useCallback(() => handleActiveTab(false), [handleActiveTab]);

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
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {data.text}
            {isActive && (
                <NHNavigationPopup headerRef={headerRef}>
                    <NHLoginPopup {...data} />
                </NHNavigationPopup>
            )}
        </div>
    );
};
