import type {RefObject} from 'react';
import React, {useCallback, useEffect, useRef} from 'react';

import ReactDOM from 'react-dom';

import {block} from '../../../../utils/cn';

import {focusFromKeyboard, getFocusableElements} from './keyboardNavigation';

import './NHNavigationPopup.scss';

const b = block('nh-navigation-popup');
const nextKeys = new Set(['ArrowDown', 'ArrowRight']);
const previousKeys = new Set(['ArrowUp', 'ArrowLeft']);

const getNextIndex = (currentIndex: number, offset: number, elementsCount: number) => {
    if (currentIndex === -1) {
        return offset > 0 ? 0 : elementsCount - 1;
    }

    return (currentIndex + offset + elementsCount) % elementsCount;
};

interface NavigationPopupProps {
    headerRef?: RefObject<HTMLDivElement>;
    children: React.ReactNode;
    id?: string;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

export const NHNavigationPopup = ({
    headerRef,
    children,
    id,
    onMouseEnter,
    onMouseLeave,
}: NavigationPopupProps) => {
    const popupRef = useRef<HTMLDivElement>(null);

    const focusRelativeElement = useCallback((offset: number) => {
        const popup = popupRef.current;
        const focusableElements = getFocusableElements(popup);

        if (!popup || !focusableElements.length) {
            return;
        }

        const activeElement = popup.ownerDocument.activeElement as HTMLElement | null;
        const currentIndex = activeElement ? focusableElements.indexOf(activeElement) : -1;
        const nextIndex = getNextIndex(currentIndex, offset, focusableElements.length);

        focusFromKeyboard(focusableElements[nextIndex], popup);
    }, []);

    useEffect(() => {
        const popup = popupRef.current;

        if (!popup) {
            return undefined;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Tab') {
                event.preventDefault();
                focusRelativeElement(event.shiftKey ? -1 : 1);
            } else if (nextKeys.has(event.key)) {
                event.preventDefault();
                focusRelativeElement(1);
            } else if (previousKeys.has(event.key)) {
                event.preventDefault();
                focusRelativeElement(-1);
            } else if (event.key === 'Home') {
                event.preventDefault();
                const popupElement = popupRef.current;
                focusFromKeyboard(getFocusableElements(popupElement)[0], popupElement);
            } else if (event.key === 'End') {
                event.preventDefault();
                const popupElement = popupRef.current;
                const focusableElements = getFocusableElements(popupElement);
                focusFromKeyboard(focusableElements[focusableElements.length - 1], popupElement);
            }
        };

        popup.addEventListener('keydown', handleKeyDown);

        return () => {
            popup.removeEventListener('keydown', handleKeyDown);
        };
    }, [focusRelativeElement]);

    return headerRef?.current
        ? ReactDOM.createPortal(
              <div
                  className={b()}
                  id={id}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  ref={popupRef}
              >
                  {children}
              </div>,
              headerRef.current,
          )
        : null;
};
