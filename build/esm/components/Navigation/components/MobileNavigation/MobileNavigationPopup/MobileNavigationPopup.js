import React, { useCallback, useEffect, useRef, useState } from 'react';
import { OutsideClick } from '@gravity-ui/page-constructor';
import { useBodyScrollLock } from '@gravity-ui/uikit';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { block } from '../../../../../utils/cn';
import './MobileNavigationPopup.css';
const b = block('mobile-navigation-popup');
const TRANSITION_TIME = 400;
const POPUP_MARGIN = 80;
const HEADER_HEIGHT = 68;
export const MobileNavigationPopup = ({ isOpened, onClose, children, onMenuScroll, }) => {
    const [body, setBody] = useState();
    const ref = useRef(null);
    const [containerHeight, setContainerHeight] = useState(0);
    const handleScroll = useCallback(() => {
        var _a;
        const containerScrollTop = (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.scrollTop;
        if (typeof containerScrollTop !== 'undefined') {
            onMenuScroll(containerScrollTop);
        }
    }, [onMenuScroll]);
    useBodyScrollLock({ enabled: isOpened });
    useEffect(() => {
        setBody(document.body);
        setContainerHeight((window === null || window === void 0 ? void 0 : window.innerHeight) - POPUP_MARGIN - HEADER_HEIGHT);
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
    return ReactDOM.createPortal(React.createElement(CSSTransition, { in: isOpened, classNames: b('transition'), unmountOnExit: true, timeout: TRANSITION_TIME },
        React.createElement(OutsideClick, { className: b(), onOutsideClick: onClose },
            React.createElement("div", { ref: ref, className: b('container'), style: { maxHeight: `${containerHeight}px` } }, children))), body);
};
