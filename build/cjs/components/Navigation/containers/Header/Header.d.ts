import React, { ReactNode } from 'react';
import { ClassNameProps } from '@doyourjob/gravity-ui-page-constructor';
import { NavigationData, SetupRouteChangeHandler } from '../../models';
export declare const MOBILE_ICON_SIZE = 24;
export interface CustomElements {
    left?: ReactNode;
    right?: ReactNode;
    actions?: ReactNode;
}
export interface HeaderProps extends ClassNameProps {
    data: NavigationData;
    customElements?: CustomElements;
    renderSearch?: (props: {
        onActiveToggle: (isActive: boolean) => void;
    }) => ReactNode;
    setupRouteChangeHandler?: SetupRouteChangeHandler;
}
export declare const Header: ({ data, customElements, setupRouteChangeHandler, renderSearch, className, }: HeaderProps) => React.JSX.Element;
