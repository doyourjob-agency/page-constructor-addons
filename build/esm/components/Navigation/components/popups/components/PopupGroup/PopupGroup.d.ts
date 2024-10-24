import React from 'react';
import { GridColumnSizesType } from '@gravity-ui/page-constructor';
import { CategoryGroupData } from '../../../../models';
import './PopupGroup.css';
type PopupGroupProps = CategoryGroupData & {
    section?: string;
    sizes?: GridColumnSizesType;
    withFixItems?: boolean;
};
export declare const PopupGroup: ({ sizes, section, withFixItems, ...group }: PopupGroupProps) => React.JSX.Element;
export {};
