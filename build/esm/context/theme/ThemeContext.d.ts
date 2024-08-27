import React from 'react';
export declare enum Theme {
    Light = "light",
    Dark = "dark"
}
export interface ThemeContextProps {
    theme: Theme;
}
export declare const initialValue: ThemeContextProps;
export declare const ThemeContext: React.Context<ThemeContextProps>;
