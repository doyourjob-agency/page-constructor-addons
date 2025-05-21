import React from 'react';

import {Theme} from '@doyourjob/gravity-ui-page-constructor';

export type ThemeContextProps = Theme;

export const ThemeContext = React.createContext<ThemeContextProps>(Theme.Light);
