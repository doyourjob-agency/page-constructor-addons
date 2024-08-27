import React from 'react';
import type { ClassNameProps } from '@gravity-ui/page-constructor';
import type { IconData } from '@gravity-ui/uikit';
export interface EnrichedLinkProps extends ClassNameProps {
    title: string;
    url: string;
    onClick?: () => void;
    type?: EnrichedLinkType;
    icon?: IconData;
    blank?: boolean;
    noreferrer?: boolean;
}
export declare enum EnrichedLinkType {
    Default = "default",
    OnlyIcon = "icon"
}
export declare const EnrichedLink: React.FC<EnrichedLinkProps>;
