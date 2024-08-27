import React from 'react';
import { NavigationItem } from '../../models';
interface SearchResultProps {
    value: string;
    data: NavigationItem[];
    section?: string;
    className?: string;
}
export declare const SearchResult: ({ value, data, section, className }: SearchResultProps) => React.JSX.Element;
export {};
