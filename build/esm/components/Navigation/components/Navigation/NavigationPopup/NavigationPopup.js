import React from 'react';
import { Grid } from '@gravity-ui/page-constructor';
import ReactDOM from 'react-dom';
import { FocusTrap } from '../../../../../utils/FocusTrap';
import { block } from '../../../../../utils/cn';
import './NavigationPopup.css';
const b = block('navigation-popup');
export const NavigationPopup = ({ withBackground, headerRef, children, className, id, }) => {
    return (headerRef === null || headerRef === void 0 ? void 0 : headerRef.current)
        ? ReactDOM.createPortal(React.createElement(FocusTrap, { enabled: true },
            React.createElement("div", { 
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex: 0, className: b({ ['with-background']: withBackground }, className), id: id },
                React.createElement(Grid, { containerClass: b('grid-container') }, children))), headerRef.current)
        : null;
};
