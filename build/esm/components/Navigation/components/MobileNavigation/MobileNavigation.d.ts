import React from 'react';
import type { ButtonProps } from '@gravity-ui/page-constructor';
import { CustomElements } from '../../containers/Header/Header';
import { NavigationSectionData } from '../../models';
import './MobileNavigation.css';
interface MobileNavigationProps {
    isOpened: boolean;
    toogleOpen: (isOpened: boolean) => void;
    isSearchOpen: boolean;
    data: NavigationSectionData[];
    onMenuScroll: (scrollTop: number) => void;
    popupClassName?: string;
    buttons?: ButtonProps[];
    customElements?: CustomElements;
}
export declare const MobileNavigation: ({ isOpened, toogleOpen, isSearchOpen, data, buttons, onMenuScroll, customElements: { actions, right }, }: MobileNavigationProps) => React.JSX.Element;
export {};
