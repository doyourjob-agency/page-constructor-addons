"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LangSwitch = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Globe_1 = tslib_1.__importDefault(require("@gravity-ui/icons/Globe"));
const uikit_1 = require("@gravity-ui/uikit");
const cn_1 = require("../../../../utils/cn");
const utils_1 = require("../../utils");
const LangSwitchPopup_1 = require("./LangSwitchPopup/LangSwitchPopup");
const b = (0, cn_1.block)('lang-switch');
const langSwitchTooltipId = 'lang-switch-tooltip-id';
const LangSwitch = ({ text, iconClassName, isSearchMode, direction = 'bottom', className, size, iconSize, items, showText, isMobile, }) => {
    const tooltipRef = (0, react_1.useRef)(null);
    const buttonRef = (0, react_1.useRef)(null);
    const tooltipOffset = isMobile ? [0, 12] : [0, 14];
    const [isOpened, setIsOpened] = (0, react_1.useState)(false);
    return (react_1.default.createElement(uikit_1.Popover, { className: className, ref: tooltipRef, openOnHover: false, hasArrow: false, placement: direction, content: react_1.default.createElement(LangSwitchPopup_1.LangSwitchPopup, { items: items }), tooltipOffset: tooltipOffset, tooltipClassName: b('popup'), tooltipId: langSwitchTooltipId, focusTrap: true, 
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus: true, onOpenChange: setIsOpened, disablePortal: true, restoreFocusRef: buttonRef }, ({ onClick }) => (react_1.default.createElement(uikit_1.Button, { view: "flat", size: size || (isMobile ? 'l' : 's'), className: b({ search: isSearchMode, 'show-text': showText, size }), onClick: onClick, extraProps: {
            'aria-expanded': isOpened,
            'aria-controls': langSwitchTooltipId,
        }, ref: buttonRef },
        showText && react_1.default.createElement("span", { className: b('text') }, text),
        react_1.default.createElement(uikit_1.Icon, { className: b('icon', iconClassName), data: Globe_1.default, size: iconSize || (0, utils_1.getIconSize)(isMobile) })))));
};
exports.LangSwitch = LangSwitch;
