import type { FC, ReactNode } from 'react';
import { NavigationSectionData } from '../../../models';
interface NavigationItemOwnProps {
    index: number;
    item: NavigationSectionData;
    isActive: boolean;
    handleOpenPopup: () => void;
    handleClosePopup: () => void;
    handleActiveTab: (currentIndex: number) => void;
    children?: ReactNode;
    tooltipId?: string;
}
export declare const NavigationItem: FC<NavigationItemOwnProps>;
export {};
