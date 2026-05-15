import type {ButtonProps, LinkProps} from '@doyourjob/gravity-ui-page-constructor';

export enum NHNavigationItemType {
    NHMediumPopup = 'medium-popup',
    NHProductsPopup = 'products-popup',
    NHSolutionsPopup = 'solutions-popup',
    NHWhyPopup = 'why-popup',
    NHResourcesPopup = 'resources-popup',
    NHCompanyPopup = 'company-popup',
    NHInvestorPopup = 'investor-popup',
    Link = 'link',
}

export enum NHNavigationTagColor {
    Green = 'green',
    Yellow = 'yellow',
    Blue = 'blue',
}

export interface NHLogoData {
    href?: string;
    src?: string;
    alt?: string;
}

export interface NHNavigationTag {
    text: string;
    color?: string;
    textColor?: string;
    size?: 's' | 'm';
}

export interface NHPopupItemData {
    title: string;
    url: string;
    slug?: string;
    description?: string;
    icon?: string;
    image?: string | null;
    tag?: NHNavigationTag;
}

export interface NHCategoryGroupData {
    title?: string;
    items: NHPopupItemData[];
    imageSize?: 's' | 'xm' | 'm';
    url?: string;
}

export interface NHMediumPopupData {
    groups: NHCategoryGroupData[];
}

export interface NHSpecialCardData {
    title: string;
    description: string;
    image: string;
    url: string;
}

export interface NHRunCardData {
    title: string;
    description: string;
    image: string;
    border?: boolean;
    url: string;
}

export interface NHProductsPopupSection {
    title: string;
    subtitle: string;
    items?: NHPopupItemData[];
    runCards?: NHRunCardData[];
}

export interface NHProductsPopupData {
    sections: NHProductsPopupSection[];
    poweredCard: NHSpecialCardData;
}

export interface NHSolutionsPopupSection {
    title: string;
    subtitle: string;
    items: NHPopupItemData[];
}

export interface NHSolutionsPopupData {
    sections: NHSolutionsPopupSection[];
}

export interface NHWhyPopupGroup {
    title: string;
    items: NHPopupItemData[];
}

export interface NHWhyPopupData {
    groups: NHWhyPopupGroup[];
    card: NHSpecialCardData;
}

export interface NHBannerData {
    title: string;
    description: string;
    image: string;
    icon: string;
    url: string;
}

export interface NHEventCardData {
    url: string;
    tag: string;
    title: string;
    date: string;
    image: string;
    location: string;
}

export interface NHResourcesPopupGroup {
    title: string;
    subtitle: string;
    url: string;
    items: NHPopupItemData[];
}

export interface NHResourcesPopupData {
    groups: NHResourcesPopupGroup[];
    banner: NHBannerData;
    events: {
        title: string;
        items: NHEventCardData[];
    };
}

export interface NHCompanyPopupSection {
    title: string;
    items: NHPopupItemData[];
}

export interface NHCompanyPopupData {
    sections: NHCompanyPopupSection[];
}

export interface NHStockData {
    title: string;
    price: string;
    date: string;
}

export interface NHInvestorPopupData {
    title: string;
    subtitle: string;
    url: string;
    items: NHPopupItemData[];
    stock: NHStockData;
}

export interface NHLoginItemData {
    title: string;
    subtitle: string;
    url?: string;
}

export interface NHLoginPopupData {
    text: string;
    items: NHLoginItemData[];
}

export interface NHNavigationDefaultData {
    title: string;
}

export interface NHNavigationLinkData extends NHNavigationDefaultData {
    type: NHNavigationItemType.Link;
    data: LinkProps;
}

export interface NHNavigationMediumPopupData extends NHNavigationDefaultData {
    type: NHNavigationItemType.NHMediumPopup;
    data: NHMediumPopupData;
}

export interface NHNavigationProductsPopupData extends NHNavigationDefaultData {
    type: NHNavigationItemType.NHProductsPopup;
    data: NHProductsPopupData;
}

export interface NHNavigationSolutionsPopupData extends NHNavigationDefaultData {
    type: NHNavigationItemType.NHSolutionsPopup;
    data: NHSolutionsPopupData;
}

export interface NHNavigationWhyPopupData extends NHNavigationDefaultData {
    type: NHNavigationItemType.NHWhyPopup;
    data: NHWhyPopupData;
}

export interface NHNavigationResourcesPopupData extends NHNavigationDefaultData {
    type: NHNavigationItemType.NHResourcesPopup;
    data: NHResourcesPopupData;
}

export interface NHNavigationCompanyPopupData extends NHNavigationDefaultData {
    type: NHNavigationItemType.NHCompanyPopup;
    data: NHCompanyPopupData;
}

export interface NHNavigationInvestorPopupData extends NHNavigationDefaultData {
    type: NHNavigationItemType.NHInvestorPopup;
    data: NHInvestorPopupData;
}

export type NHNavigationItemData =
    | NHNavigationLinkData
    | NHNavigationMediumPopupData
    | NHNavigationProductsPopupData
    | NHNavigationSolutionsPopupData
    | NHNavigationWhyPopupData
    | NHNavigationResourcesPopupData
    | NHNavigationCompanyPopupData
    | NHNavigationInvestorPopupData;

export interface NHMobileNavigationDefaultData {
    title: string;
}

export interface NHMobileNavigationLinkData extends NHMobileNavigationDefaultData {
    link: LinkProps;
}

export interface NHMobileNavigationGroupData extends NHMobileNavigationDefaultData {
    data: {
        title?: string;
        items: {
            title: string;
            url: string;
        }[];
    }[];
}

export type NHMobileNavigationItemData = NHMobileNavigationLinkData | NHMobileNavigationGroupData;

export interface NHNavigationData {
    left: NHNavigationItemData[];
    right: NHNavigationItemData[];
    mobile: NHMobileNavigationItemData[];
    login: NHLoginPopupData;
    logo: NHLogoData;
    buttons: ButtonProps[];
}

export type SetupRouteChangeHandler = (handler: () => void) => void;
