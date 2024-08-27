import React from 'react';
import { Bars, Xmark } from '@gravity-ui/icons';
import { Button, Icon } from '@gravity-ui/uikit';
import { block } from '../../../../utils/cn';
import { MOBILE_ICON_SIZE } from '../../containers/Header/Header';
import { ButtonsContainer, ButtonsContainerDirection } from '../ButtonsContainer/ButtonsContainer';
import { MobileNavigationItem } from './MobileNavigationItem/MobileNavigationItem';
import { MobileNavigationPopup } from './MobileNavigationPopup/MobileNavigationPopup';
import './MobileNavigation.css';
const b = block('mobile-navigation');
export const MobileNavigation = ({ isOpened, toogleOpen, isSearchOpen, data, buttons, onMenuScroll, customElements: { actions, right } = {}, }) => (React.createElement("div", { className: b() },
    React.createElement(Button, { view: "flat", size: "l", className: b('icon', { hidden: isSearchOpen }), onClick: (e) => {
            e.stopPropagation();
            toogleOpen(!isOpened);
        } },
        React.createElement(Icon, { data: isOpened ? Xmark : Bars, size: MOBILE_ICON_SIZE })),
    React.createElement(MobileNavigationPopup, { isOpened: isOpened, onClose: () => toogleOpen(false), onMenuScroll: onMenuScroll },
        React.createElement("nav", null,
            React.createElement("ul", { className: b() }, data.map((item) => (React.createElement("li", { className: b(), key: item.title },
                React.createElement(MobileNavigationItem, { data: item }))))),
            buttons && (React.createElement(ButtonsContainer, { buttons: buttons, className: b('buttons'), width: "max", direction: ButtonsContainerDirection.Column }, actions)),
            right))));
