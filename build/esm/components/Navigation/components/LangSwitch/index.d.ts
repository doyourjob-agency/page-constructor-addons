import React from 'react';
import type { ButtonProps, PopupPlacement } from '@gravity-ui/uikit';
import { LangSwitchItem } from '../../models';
import './LangSwitch.css';
export interface LangSwitchProps {
    text?: string;
    iconClassName?: string;
    className?: string;
    isSearchMode?: boolean;
    direction?: PopupPlacement;
    tooltipClassName?: string;
    showText?: boolean;
    size?: ButtonProps['size'];
    iconSize?: number;
    isMobile?: boolean;
    items: LangSwitchItem[];
}
export declare const LangSwitch: ({ text, iconClassName, isSearchMode, direction, className, size, iconSize, items, showText, isMobile, }: LangSwitchProps) => React.JSX.Element;
