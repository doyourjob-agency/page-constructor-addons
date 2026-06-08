import React, {useCallback, useEffect, useRef, useState} from 'react';

import {OutsideClick} from '@doyourjob/gravity-ui-page-constructor';
import {useBodyScrollLock} from '@gravity-ui/uikit';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';

import {block} from '../../../../utils/cn';

import './NHMobileNavigationPopup.scss';

const b = block('nh-mobile-navigation-popup');

const TRANSITION_TIME = 400;

interface MobileNavigationPopupProps {
    id?: string;
    isOpened: boolean;
    onClose: () => void;
    children: React.ReactNode;
    onMenuScroll: (scrollTop: number) => void;
}

export const NHMobileNavigationPopup = ({
    id,
    isOpened,
    onClose,
    children,
    onMenuScroll,
}: MobileNavigationPopupProps) => {
    const [body, setBody] = useState<HTMLElement>();
    const ref = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        const containerScrollTop = ref?.current?.scrollTop;

        if (typeof containerScrollTop !== 'undefined') {
            onMenuScroll(containerScrollTop);
        }
    }, [onMenuScroll]);

    useBodyScrollLock({enabled: isOpened});

    useEffect(() => {
        setBody(document.body);

        const element = ref.current;

        if (element) {
            element.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (element) {
                element.removeEventListener('scroll', handleScroll);
            }
        };
    }, [handleScroll, isOpened]);

    if (!body) {
        return null;
    }

    return ReactDOM.createPortal(
        <CSSTransition
            in={isOpened}
            classNames={b('transition')}
            unmountOnExit
            timeout={TRANSITION_TIME}
        >
            <OutsideClick className={b()} onOutsideClick={onClose}>
                <div ref={ref} className={b('container')} id={id}>
                    {children}
                </div>
            </OutsideClick>
        </CSSTransition>,
        body,
    );
};
