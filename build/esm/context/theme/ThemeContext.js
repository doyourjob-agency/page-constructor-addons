import React from 'react';
import { DEFAULT_THEME } from '../../constants';
export var Theme;
(function (Theme) {
    Theme["Light"] = "light";
    Theme["Dark"] = "dark";
})(Theme || (Theme = {}));
export const initialValue = {
    theme: DEFAULT_THEME,
};
export const ThemeContext = React.createContext(initialValue);
