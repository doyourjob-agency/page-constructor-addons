import type { FC } from 'react';
import { GridColumnSizesType } from '@gravity-ui/page-constructor';
import { NavigationItem } from '../../../models';
interface NavigationItemsListProps {
    items: NavigationItem[];
    section?: string;
    sizes?: GridColumnSizesType;
    itemClassName?: string;
    className?: string;
}
export declare const NavigationItemsList: FC<NavigationItemsListProps>;
export {};
