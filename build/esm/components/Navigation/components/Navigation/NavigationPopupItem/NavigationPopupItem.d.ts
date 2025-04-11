import React from 'react';
import type { GridColumnSizesType } from '@gravity-ui/page-constructor';
import { NavigationItem } from '../../../models';
import './NavigationPopupItem.css';
export interface NavigationPopupItemProps extends Partial<NavigationItem> {
    hover?: boolean;
    sizes?: GridColumnSizesType;
    className?: string;
    padding?: 'default' | 's';
    imageSize?: 's' | 'xm' | 'm';
    target?: string;
}
export declare const NavigationPopupItem: (props: NavigationPopupItemProps) => React.JSX.Element;
