import React, { PropsWithChildren } from 'react';
import type { ButtonProps } from '@gravity-ui/page-constructor';
import type { ButtonWidth } from '@gravity-ui/uikit';
export declare enum ButtonsContainerDirection {
    Row = "row",
    Column = "column"
}
interface ButtonsContainerProps extends PropsWithChildren {
    buttons: ButtonProps[];
    className?: string;
    width?: ButtonWidth;
    direction?: ButtonsContainerDirection;
}
export declare const ButtonsContainer: ({ buttons, className, width, direction, children, }: ButtonsContainerProps) => React.JSX.Element;
export {};