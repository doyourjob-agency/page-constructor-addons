import type { RefObject } from 'react';
import React from 'react';
import { NavigationSectionData, SetupRouteChangeHandler } from '../../models';
import './Navigation.css';
interface NavigationProps {
    data: NavigationSectionData[];
    withBackground: boolean;
    handleOpenPopup: () => void;
    handleClosePopup: () => void;
    headerRef?: RefObject<HTMLDivElement>;
    setupRouteChangeHandler?: SetupRouteChangeHandler;
}
export declare const Navigation: ({ data, headerRef, handleOpenPopup, handleClosePopup, withBackground, setupRouteChangeHandler, }: NavigationProps) => React.JSX.Element;
export {};
