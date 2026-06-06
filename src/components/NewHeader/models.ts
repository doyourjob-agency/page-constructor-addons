import type {ButtonProps, LinkProps} from '@doyourjob/gravity-ui-page-constructor';

export enum NHNavigationItemType {
    NHProductsPopup = 'products-popup',
    NHDefaultPopup = 'default-popup',
    Link = 'link',
}

export interface NHLogoData {
    href?: string;
    src?: string;
    alt?: string;
}

export interface NHPopupItemData {
    title: string;
    url: string;
    slug?: string;
    description?: string;
    image?: string | null;
    imageMobile?: string | null;
    imageColor?: string;
    imageColorHover?: string;
    target?: string;
}

export interface NHProductBannerData {
    title: string;
    description: string;
    image: string;
    url: string;
    background?: string;
    color?: string;
    border?: boolean;
}

export interface NHProductsPopupSectionBase {
    title: string;
    subtitle: string;
    items?: NHPopupItemData[];
}

export interface NHProductsPopupSectionRun extends NHProductsPopupSectionBase {
    mode: 'run';
}

export interface NHProductsPopupSectionScale extends NHProductsPopupSectionBase {
    mode: 'scale';
    banner?: NHProductBannerData;
}

export type NHProductsPopupSection =
    | NHProductsPopupSectionRun
    | NHProductsPopupSectionScale
    | NHProductsPopupSectionBase;

export interface NHProductsPopupData {
    primaryColor?: string;
    primaryColorHover?: string;
    sections: NHProductsPopupSection[];
}

export interface NHDefaultPopupSection {
    title: string;
    subtitle: string;
    items: NHPopupItemData[];
    columns?: number;
}

export interface NHStoryCardData {
    title: string;
    description: string;
    image: string;
    url: string;
}

export interface NHEventCardData {
    title: string;
    caption: string;
    description: string;
    image: string;
    url: string;
}

export interface NHStockData {
    title?: string;
    image?: string;
    delayed?: string;
}

export interface NHDefaultPopupData {
    sections: NHDefaultPopupSection[];
    maxWidth?: number;
    primaryColor?: string;
    primaryColorHover?: string;
    right?: {
        title: string;
        stories?: NHStoryCardData[];
        events?: NHEventCardData[];
        stock?: NHStockData;
    };
}

export interface NHLoginItemData {
    title: string;
    subtitle: string;
    url?: string;
}

export interface NHLoginPopupData {
    text: string;
    items: NHPopupItemData[];
}

export interface NHNavigationDefaultData {
    title: string;
}

export interface NHNavigationLinkData extends NHNavigationDefaultData {
    type: NHNavigationItemType.Link;
    data: LinkProps;
}

export interface NHNavigationProductsPopupData extends NHNavigationDefaultData {
    type: NHNavigationItemType.NHProductsPopup;
    data: NHProductsPopupData;
}

export interface NHNavigationDefaultPopupData extends NHNavigationDefaultData {
    type: NHNavigationItemType.NHDefaultPopup;
    data: NHDefaultPopupData;
}

export type NHNavigationItemData =
    | NHNavigationLinkData
    | NHNavigationProductsPopupData
    | NHNavigationDefaultPopupData;

export interface NHNavigationData {
    left?: NHNavigationItemData[];
    right?: NHNavigationItemData[];
    login?: NHLoginPopupData;
    logo?: NHLogoData;
    buttons?: ButtonProps[];
}

export type SetupRouteChangeHandler = (handler: () => void) => void;
