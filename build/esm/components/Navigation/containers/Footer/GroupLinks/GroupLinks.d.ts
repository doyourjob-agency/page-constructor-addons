import React from 'react';
import type { EnrichedLinkProps } from '../../../../EnrichedLink/EnrichedLink';
import './GroupLinks.css';
export interface GroupLinksProps {
    columnGroup: GroupLinkColumn;
    className?: string;
}
export interface GroupLinkColumn {
    title?: string;
    items: EnrichedLinkProps[];
}
declare const GroupLinks: ({ columnGroup: { title, items }, className }: GroupLinksProps) => React.JSX.Element;
export default GroupLinks;
