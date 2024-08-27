import React from 'react';
import type { GridColumnSizesType } from '@gravity-ui/page-constructor';
import { NavigationItem } from '../../../models';
import './NavigationPopupItem.css';
export interface NavigationPopupItemProps extends Partial<NavigationItem> {
    image?: string | null;
    hover?: boolean;
    sizes?: GridColumnSizesType;
    className?: string;
    padding?: 'default' | 's';
    imageSize?: 's' | 'xm' | 'm';
}
export declare const NavigationPopupItem: (props: NavigationPopupItemProps) => React.JSX.Element;
