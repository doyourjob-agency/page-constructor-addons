import React from 'react';
import { ClassNameProps } from '@doyourjob/gravity-ui-page-constructor';
import { NavigationTag as NavigationTagModel } from '../../models';
import './Tag.css';
export interface NavigationTagProps extends NavigationTagModel, ClassNameProps {
}
export declare const NavigationTag: ({ text, color, textColor, className, size, }: NavigationTagProps) => React.JSX.Element;
