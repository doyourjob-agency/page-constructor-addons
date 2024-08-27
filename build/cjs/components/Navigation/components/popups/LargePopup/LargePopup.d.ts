import React from 'react';
import { CategorizedPopupData, NavigationSectionData } from '../../../models';
export interface LargePopupProps extends Omit<NavigationSectionData, 'data'> {
    data: CategorizedPopupData;
}
export declare const LargePopup: (props: LargePopupProps) => React.JSX.Element;
