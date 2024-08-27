import React from 'react';
import { GridColumnSize, Row, Title } from '@gravity-ui/page-constructor';
import { block } from '../../../../utils/cn';
import i18n from './i18n';
import './SearchNotFound.css';
const b = block('search-not-found');
export const SearchNotFound = (props) => {
    const { notFoundDescription, size = 's' } = props;
    const title = {
        text: i18n('search-not-found-title'),
        textSize: size,
    };
    return (React.createElement(Row, { className: b() },
        React.createElement(Title, { colSizes: {
                [GridColumnSize.Lg]: 9,
                [GridColumnSize.All]: 12,
            }, title: title, subtitle: notFoundDescription || i18n('search-not-found-description'), className: b('title') })));
};
