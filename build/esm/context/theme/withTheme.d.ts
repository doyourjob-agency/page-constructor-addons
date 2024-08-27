import React from 'react';
import { Subtract } from 'utility-types';
import { ThemeContextProps } from './ThemeContext';
export interface WithThemeProps extends ThemeContextProps {
}
export declare function withTheme<T extends WithThemeProps>(WrappedComponent: React.ComponentType<T>): React.ComponentType<Subtract<T, WithThemeProps>>;
