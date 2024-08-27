import type { RefObject } from 'react';
import React from 'react';
import './NavigationPopup.css';
interface NavigationPopupProps {
    withBackground: boolean;
    headerRef?: RefObject<HTMLDivElement>;
    children: React.ReactNode;
    className?: string;
    id?: string;
}
export declare const NavigationPopup: ({ withBackground, headerRef, children, className, id, }: NavigationPopupProps) => React.ReactPortal | null;
export {};
