import React, { useRef, useState } from 'react';
import Globe from '@gravity-ui/icons/Globe';
import { Button, Icon, Popover } from '@gravity-ui/uikit';
import { block } from '../../../../utils/cn';
import { getIconSize } from '../../utils';
import { LangSwitchPopup } from './LangSwitchPopup/LangSwitchPopup';
import './LangSwitch.css';
const b = block('lang-switch');
const langSwitchTooltipId = 'lang-switch-tooltip-id';
export const LangSwitch = ({ text, iconClassName, isSearchMode, direction = 'bottom', className, size, iconSize, items, showText, isMobile, }) => {
    const tooltipRef = useRef(null);
    const buttonRef = useRef(null);
    const tooltipOffset = isMobile ? [0, 12] : [0, 14];
    const [isOpened, setIsOpened] = useState(false);
    return (React.createElement(Popover, { className: className, ref: tooltipRef, openOnHover: false, hasArrow: false, placement: direction, content: React.createElement(LangSwitchPopup, { items: items }), tooltipOffset: tooltipOffset, tooltipClassName: b('popup'), tooltipId: langSwitchTooltipId, focusTrap: true, 
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus: true, onOpenChange: setIsOpened, disablePortal: true, restoreFocusRef: buttonRef }, ({ onClick }) => (React.createElement(Button, { view: "flat", size: size || (isMobile ? 'l' : 's'), className: b({ search: isSearchMode, 'show-text': showText, size }), onClick: onClick, extraProps: {
            'aria-expanded': isOpened,
            'aria-controls': langSwitchTooltipId,
        }, ref: buttonRef },
        showText && React.createElement("span", { className: b('text') }, text),
        React.createElement(Icon, { className: b('icon', iconClassName), data: Globe, size: iconSize || getIconSize(isMobile) })))));
};
