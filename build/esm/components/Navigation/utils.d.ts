import { NavigationItem } from './models';
export declare const getIconSize: (isMobile?: boolean) => 16 | 24;
export declare const SERVICES_PREFIX = "services";
export declare const SOLUTIONS_PREFIX = "solutions";
export interface MobileLargePopupDataItem {
    id: number;
    description: string;
    slug: string;
    url: string;
    title: string;
}
export interface MobileLargePopupData {
    items: MobileLargePopupDataItem[];
}
export type NaviationItemsMap = Record<string, NavigationItem[]>;
export declare const getHeaderHeight: (isMobile: boolean) => 68 | 94;
export declare function getFlatList(dataByKeys: NaviationItemsMap, key?: keyof NavigationItem): NavigationItem[];
export declare function applySearch(searchRaw: string, navigationItems: NavigationItem[]): NavigationItem[];
