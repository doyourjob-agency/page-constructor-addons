/// <reference types="react" />
import type { ClassNameProps } from '@doyourjob/gravity-ui-page-constructor';
import type { EnrichedLinkProps } from '../../../EnrichedLink/EnrichedLink';
import { LangSwitchProps } from '../../components/LangSwitch';
import type { GroupLinkColumn } from './GroupLinks/GroupLinks';
export type FooterType = 'simple' | 'default';
export type FooterMedia = {
    item: React.ReactNode;
    md?: number;
    position: 'left' | 'right';
};
export interface FooterProps extends ClassNameProps {
    type?: FooterType;
    underline?: {
        leftItems?: EnrichedLinkProps[];
        rightItems?: EnrichedLinkProps[];
        copyright?: string;
        langSwitch?: Pick<LangSwitchProps, 'text' | 'showText' | 'items'>;
    };
    columns?: GroupLinkColumn[][];
    customItems?: React.ReactNode;
    media?: FooterMedia;
}
