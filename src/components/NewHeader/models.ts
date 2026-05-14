import type {ButtonProps, LinkProps} from '@doyourjob/gravity-ui-page-constructor';

export enum NavigationItemType {
    MediumPopup = 'medium-popup',
    ProductsPopup = 'products-popup',
    SolutionsPopup = 'solutions-popup',
    WhyPopup = 'why-popup',
    ResourcesPopup = 'resources-popup',
    CompanyPopup = 'company-popup',
    InvestorPopup = 'investor-popup',
    Link = 'link',
}

export enum NavigationTagColor {
    Green = 'green',
    Yellow = 'yellow',
    Blue = 'blue',
}

export interface LogoData {
    href?: string;
    src?: string;
    alt?: string;
}

export interface NavigationTag {
    text: string;
    color?: string;
    textColor?: string;
    size?: 's' | 'm';
}

export interface PopupItemData {
    title: string;
    url: string;
    slug?: string;
    description?: string;
    icon?: string;
    image?: string | null;
    tag?: NavigationTag;
}

export interface CategoryGroupData {
    title?: string;
    items: PopupItemData[];
    imageSize?: 's' | 'xm' | 'm';
    url?: string;
}

export interface MediumPopupData {
    groups: CategoryGroupData[];
}

export interface SpecialCardData {
    title: string;
    description: string;
    image: string;
}

export interface RunCardData {
    title: string;
    description: string;
    image: string;
    border?: boolean;
}

export interface ProductsPopupSection {
    title: string;
    subtitle: string;
    items?: PopupItemData[];
    runCards?: RunCardData[];
}

export interface ProductsPopupData {
    sections: ProductsPopupSection[];
    poweredCard: SpecialCardData;
}

export interface SolutionsPopupSection {
    title: string;
    subtitle: string;
    items: PopupItemData[];
}

export interface SolutionsPopupData {
    sections: SolutionsPopupSection[];
}

export interface WhyPopupGroup {
    title: string;
    items: PopupItemData[];
}

export interface WhyPopupData {
    groups: WhyPopupGroup[];
    card: SpecialCardData;
}

export interface BannerData {
    title: string;
    description: string;
    image: string;
    icon: string;
    url: string;
}

export interface EventCardData {
    tag: string;
    title: string;
    date: string;
    image: string;
    location: string;
}

export interface ResourcesPopupGroup {
    title: string;
    subtitle: string;
    url: string;
    items: PopupItemData[];
}

export interface ResourcesPopupData {
    groups: ResourcesPopupGroup[];
    banner: BannerData;
    events: {
        title: string;
        items: EventCardData[];
    };
}

export interface CompanyPopupSection {
    title: string;
    items: PopupItemData[];
}

export interface CompanyPopupData {
    sections: CompanyPopupSection[];
}

export interface StockData {
    title: string;
    price: string;
    date: string;
}

export interface InvestorPopupData {
    title: string;
    subtitle: string;
    url: string;
    items: PopupItemData[];
    stock: StockData;
}

export interface LoginItemData {
    title: string;
    subtitle: string;
    url?: string;
}

export interface LoginPopupData {
    text: string;
    items: LoginItemData[];
}

export interface NavigationDefaultData {
    title: string;
}

export interface NavigationLinkData extends NavigationDefaultData {
    type: NavigationItemType.Link;
    data: LinkProps;
}

export interface NavigationMediumPopupData extends NavigationDefaultData {
    type: NavigationItemType.MediumPopup;
    data: MediumPopupData;
}

export interface NavigationProductsPopupData extends NavigationDefaultData {
    type: NavigationItemType.ProductsPopup;
    data: ProductsPopupData;
}

export interface NavigationSolutionsPopupData extends NavigationDefaultData {
    type: NavigationItemType.SolutionsPopup;
    data: SolutionsPopupData;
}

export interface NavigationWhyPopupData extends NavigationDefaultData {
    type: NavigationItemType.WhyPopup;
    data: WhyPopupData;
}

export interface NavigationResourcesPopupData extends NavigationDefaultData {
    type: NavigationItemType.ResourcesPopup;
    data: ResourcesPopupData;
}

export interface NavigationCompanyPopupData extends NavigationDefaultData {
    type: NavigationItemType.CompanyPopup;
    data: CompanyPopupData;
}

export interface NavigationInvestorPopupData extends NavigationDefaultData {
    type: NavigationItemType.InvestorPopup;
    data: InvestorPopupData;
}

export type NavigationItemData =
    | NavigationLinkData
    | NavigationMediumPopupData
    | NavigationProductsPopupData
    | NavigationSolutionsPopupData
    | NavigationWhyPopupData
    | NavigationResourcesPopupData
    | NavigationCompanyPopupData
    | NavigationInvestorPopupData;

export interface MobileNavigationDefaultData {
    title: string;
}

export interface MobileNavigationLinkData extends MobileNavigationDefaultData {
    link: LinkProps;
}

export interface MobileNavigationGroupData extends MobileNavigationDefaultData {
    data: {
        title?: string;
        items: {
            title: string;
            url: string;
        }[];
    }[];
}

export type MobileNavigationItemData = MobileNavigationLinkData | MobileNavigationGroupData;

export interface NavigationData {
    left: NavigationItemData[];
    right: NavigationItemData[];
    mobile: MobileNavigationItemData[];
    login: LoginPopupData;
    logo: LogoData;
    buttons: ButtonProps[];
}

export type SetupRouteChangeHandler = (handler: () => void) => void;
