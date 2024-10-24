import React from 'react';
import type { IconData } from '@gravity-ui/uikit';
import { ClassNameProps } from '../../../../../../models';
export type SearchSize = 's' | 'm';
interface SearchProps extends ClassNameProps {
    value?: string;
    initialValue: string;
    onSubmit: (value: string) => void;
    debounce?: number;
    placeholder?: string;
    size?: SearchSize;
    autoFocus?: boolean;
    className?: string;
    customSearchIcon?: IconData;
}
declare const Search: (props: SearchProps) => React.JSX.Element;
export default Search;
