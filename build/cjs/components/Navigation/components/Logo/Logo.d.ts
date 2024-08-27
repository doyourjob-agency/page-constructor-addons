import React from 'react';
import { ClassNameProps, Theme } from '@gravity-ui/page-constructor';
import { LogoData } from '../../models';
export interface LogoProps extends LogoData, ClassNameProps {
    theme?: Theme;
    imageClassName?: string;
}
declare const Logo: React.FC<LogoProps>;
export default Logo;
