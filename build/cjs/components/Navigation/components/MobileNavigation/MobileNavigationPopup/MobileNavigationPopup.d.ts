import React from 'react';
interface MobileNavigationPopupProps {
    isOpened: boolean;
    onClose: () => void;
    children: React.ReactNode;
    onMenuScroll: (scrollTop: number) => void;
}
export declare const MobileNavigationPopup: ({ isOpened, onClose, children, onMenuScroll, }: MobileNavigationPopupProps) => React.ReactPortal | null;
export {};
