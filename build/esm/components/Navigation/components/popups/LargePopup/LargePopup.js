import React, { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Col, GridColumnSize, Link, Row } from '@doyourjob/gravity-ui-page-constructor';
import { Magnifier } from '@gravity-ui/icons';
import { block } from '../../../../../utils/cn';
import { getFlatList, getHeaderHeight } from '../../../utils';
import { SearchResult } from '../../SearchResult/SearchResult';
import { PopupCategory } from '../components/PopupCategory/PopupCategory';
import { PopupGroup } from '../components/PopupGroup/PopupGroup';
import { PopupSecondaryGroup } from '../components/PopupSecondaryGroup/PopupSecondaryGroup';
import Search from '../components/Search/Search';
import './LargePopup.css';
const b = block('large-popup');
const LARGE_POPUP_INDENT = 240;
export const LargePopup = (props) => {
    const { data, section, placeholder, links } = props;
    const { categories } = data;
    const [currentCategory, setCurrentCategory] = useState(Object.values(categories)[0]);
    const [search, setSearch] = useState('');
    const categoriesRef = useRef(null);
    const [maxHeightCategories, setMaxHeightCategories] = useState(0);
    const [minHeightCategories, setMinHeightCategories] = useState(355);
    const [categoriesWithScroll, setCategoriesWithScroll] = useState(false);
    const rightSideRef = useRef(null);
    const rightSideContentRef = useRef(null);
    const controlsRef = useRef(null);
    const currentCategoryData = categories[currentCategory.slug];
    const flatList = useMemo(() => {
        const searchableItems = Object.entries(categories).reduce((result, [slug, { groups }]) => {
            // eslint-disable-next-line no-param-reassign
            result[slug] = groups[0].items;
            return result;
        }, {});
        return getFlatList(searchableItems);
    }, [categories]);
    const onSearch = useCallback((value) => setSearch(value), []);
    const changeCategory = useCallback((value) => {
        const rightSideCurrent = rightSideRef === null || rightSideRef === void 0 ? void 0 : rightSideRef.current;
        if (rightSideCurrent) {
            rightSideCurrent.scrollTop = 0;
        }
        setCurrentCategory(value);
    }, []);
    useEffect(() => {
        var _a, _b;
        const maxHeight = window.innerHeight - getHeaderHeight(false) - LARGE_POPUP_INDENT;
        const rightColumnHeight = (_a = rightSideContentRef === null || rightSideContentRef === void 0 ? void 0 : rightSideContentRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight;
        const controlsHeight = (_b = controlsRef === null || controlsRef === void 0 ? void 0 : controlsRef.current) === null || _b === void 0 ? void 0 : _b.clientHeight;
        setMaxHeightCategories(maxHeight);
        if (rightColumnHeight && controlsHeight) {
            setMinHeightCategories(rightColumnHeight - controlsHeight);
        }
        if (categoriesRef.current) {
            if (categoriesRef.current.scrollHeight > maxHeight) {
                setCategoriesWithScroll(true);
            }
        }
    }, []);
    return (React.createElement(Fragment, null,
        React.createElement(Row, null,
            React.createElement(Col, { className: b('left'), sizes: { [GridColumnSize.Lg]: 3, [GridColumnSize.All]: 4 } },
                React.createElement("ul", { className: b('categories', { 'with-scroll': categoriesWithScroll }), ref: categoriesRef, style: {
                        maxHeight: `${maxHeightCategories}px`,
                        minHeight: `${minHeightCategories}px`,
                    } }, Object.values(categories).map((category) => (React.createElement(PopupCategory, { data: category, onClick: changeCategory, key: category.slug, isActive: currentCategory.slug === category.slug })))),
                React.createElement("div", { className: b('controls'), ref: controlsRef },
                    React.createElement("div", { className: b('links') }, links &&
                        links.map((link) => (React.createElement(Link, { className: b('link'), url: link.url, text: link.text, textSize: "m", key: link.url, theme: "normal", arrow: true })))),
                    placeholder && (React.createElement(Search, { initialValue: "", onSubmit: onSearch, className: b('search'), placeholder: placeholder, value: search, size: "s", customSearchIcon: Magnifier })))),
            React.createElement(Col, { className: b('right'), sizes: { [GridColumnSize.Lg]: 9, [GridColumnSize.All]: 8 }, ref: rightSideRef },
                React.createElement("div", { className: b('right-content'), ref: rightSideContentRef }, search ? (React.createElement(SearchResult, { value: search, data: flatList, section: section, className: b('items') })) : (React.createElement(Fragment, null, currentCategoryData.groups.map((group, index) => {
                    const key = group.title || group.url || index;
                    return index ? (React.createElement(PopupSecondaryGroup, Object.assign({}, group, { key: key }))) : (React.createElement(PopupGroup, Object.assign({}, group, { section: section, key: key })));
                }))))))));
};
