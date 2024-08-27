import React from 'react';
import { block } from '../../../../utils/cn';
import { NavigationTagColor } from '../../models';
import './Tag.css';
const b = block('navigation-tag');
export const NavigationTag = ({ text, color = NavigationTagColor.Yellow, className, size = 'm', }) => React.createElement("div", { className: b({ size, color }, className) }, text);
