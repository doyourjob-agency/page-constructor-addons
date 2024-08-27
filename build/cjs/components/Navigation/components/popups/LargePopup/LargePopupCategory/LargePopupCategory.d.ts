import React from 'react';
import { CategoryData } from '../../../../models';
interface ExtraPopupCategoryProps {
    data: CategoryData;
    onClick: (category: CategoryData) => void;
    isActive: boolean;
}
export declare const LargePopupCategory: ({ data, onClick, isActive }: ExtraPopupCategoryProps) => React.JSX.Element;
export {};
