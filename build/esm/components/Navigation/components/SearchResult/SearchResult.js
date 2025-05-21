import React, { Fragment } from 'react';
import { Row, Title, block } from '@doyourjob/gravity-ui-page-constructor';
import { applySearch } from '../../utils';
import { NavigationItemsList } from '../Navigation/NavigationItemsList/NavigationItemsList';
import { SearchNotFound } from '../SearchNotFound/SearchNotFound';
import i18n from './i18n';
import './SearchResult.css';
const b = block('search-result');
export const SearchResult = ({ value, data, section, className }) => {
    const result = applySearch(value, data);
    const title = {
        text: i18n('search-found', { count: result.length }),
        textSize: 'xs',
    };
    return (React.createElement("div", { className: b() }, result.length ? (React.createElement(Fragment, null,
        React.createElement(Row, null,
            React.createElement(Title, { className: b('title'), title: title, colSizes: { all: 12 } })),
        React.createElement("div", null,
            React.createElement(NavigationItemsList, { items: result, section: section, className: className })))) : (React.createElement("div", { className: b('container') },
        React.createElement(SearchNotFound, { notFoundDescription: i18n('search-not-found'), size: "xs" })))));
};
