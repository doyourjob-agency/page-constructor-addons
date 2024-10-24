import React from 'react';
import { GridColumnSizesType } from '@gravity-ui/page-constructor';
import { CategoryGroupData } from '../../../../models';
type PopupSecondaryGroupProps = CategoryGroupData & {
    sizes?: GridColumnSizesType;
};
export declare const PopupSecondaryGroup: ({ sizes, ...props }: PopupSecondaryGroupProps) => React.JSX.Element;
export {};
