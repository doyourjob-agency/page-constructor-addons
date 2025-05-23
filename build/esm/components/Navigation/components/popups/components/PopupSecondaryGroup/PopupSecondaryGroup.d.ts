import React from 'react';
import { GridColumnSizesType } from '@doyourjob/gravity-ui-page-constructor';
import { CategoryGroupData } from '../../../../models';
import './PopupSecondaryGroup.css';
type PopupSecondaryGroupProps = CategoryGroupData & {
    sizes?: GridColumnSizesType;
};
export declare const PopupSecondaryGroup: ({ sizes, ...props }: PopupSecondaryGroupProps) => React.JSX.Element;
export {};
