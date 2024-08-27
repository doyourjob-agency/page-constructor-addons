import React from 'react';
import { AnalyticsContextProps } from '../../contexts/analytics';
import { DeviceContextProps } from '../../contexts/device';
import { LocationContextProps } from '../../contexts/location';
import { MobileContextProps } from '../../contexts/mobile';
import { ThemeContextProps } from '../../contexts/theme';
import { HeaderProps as HeaderComponentProps } from './Header';
export interface HeaderProps extends HeaderComponentProps {
    isMobile?: MobileContextProps;
    location?: LocationContextProps;
    analytics?: AnalyticsContextProps;
    device?: DeviceContextProps;
    theme?: ThemeContextProps;
}
export declare const Header: (props: HeaderProps) => React.JSX.Element;
