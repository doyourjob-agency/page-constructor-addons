import type { FC } from 'react';
import { NavigationItem } from '../../../models';
interface NavigationItemsListProps {
    items: NavigationItem[];
    section?: string;
    itemClassName?: string;
    className?: string;
}
export declare const NavigationItemsList: FC<NavigationItemsListProps>;
export {};
