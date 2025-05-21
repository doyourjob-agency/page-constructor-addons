"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargePopup = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const gravity_ui_page_constructor_1 = require("@doyourjob/gravity-ui-page-constructor");
const icons_1 = require("@gravity-ui/icons");
const cn_1 = require("../../../../../utils/cn");
const utils_1 = require("../../../utils");
const SearchResult_1 = require("../../SearchResult/SearchResult");
const PopupCategory_1 = require("../components/PopupCategory/PopupCategory");
const PopupGroup_1 = require("../components/PopupGroup/PopupGroup");
const PopupSecondaryGroup_1 = require("../components/PopupSecondaryGroup/PopupSecondaryGroup");
const Search_1 = tslib_1.__importDefault(require("../components/Search/Search"));
const b = (0, cn_1.block)('large-popup');
const LARGE_POPUP_INDENT = 240;
const LargePopup = (props) => {
    const { data, section, placeholder, links } = props;
    const { categories } = data;
    const [currentCategory, setCurrentCategory] = (0, react_1.useState)(Object.values(categories)[0]);
    const [search, setSearch] = (0, react_1.useState)('');
    const categoriesRef = (0, react_1.useRef)(null);
    const [maxHeightCategories, setMaxHeightCategories] = (0, react_1.useState)(0);
    const [minHeightCategories, setMinHeightCategories] = (0, react_1.useState)(355);
    const [categoriesWithScroll, setCategoriesWithScroll] = (0, react_1.useState)(false);
    const rightSideRef = (0, react_1.useRef)(null);
    const rightSideContentRef = (0, react_1.useRef)(null);
    const controlsRef = (0, react_1.useRef)(null);
    const currentCategoryData = categories[currentCategory.slug];
    const flatList = (0, react_1.useMemo)(() => {
        const searchableItems = Object.entries(categories).reduce((result, [slug, { groups }]) => {
            // eslint-disable-next-line no-param-reassign
            result[slug] = groups[0].items;
            return result;
        }, {});
        return (0, utils_1.getFlatList)(searchableItems);
    }, [categories]);
    const onSearch = (0, react_1.useCallback)((value) => setSearch(value), []);
    const changeCategory = (0, react_1.useCallback)((value) => {
        const rightSideCurrent = rightSideRef === null || rightSideRef === void 0 ? void 0 : rightSideRef.current;
        if (rightSideCurrent) {
            rightSideCurrent.scrollTop = 0;
        }
        setCurrentCategory(value);
    }, []);
    (0, react_1.useEffect)(() => {
        var _a, _b;
        const maxHeight = window.innerHeight - (0, utils_1.getHeaderHeight)(false) - LARGE_POPUP_INDENT;
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
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(gravity_ui_page_constructor_1.Row, null,
            react_1.default.createElement(gravity_ui_page_constructor_1.Col, { className: b('left'), sizes: { [gravity_ui_page_constructor_1.GridColumnSize.Lg]: 3, [gravity_ui_page_constructor_1.GridColumnSize.All]: 4 } },
                react_1.default.createElement("ul", { className: b('categories', { 'with-scroll': categoriesWithScroll }), ref: categoriesRef, style: {
                        maxHeight: `${maxHeightCategories}px`,
                        minHeight: `${minHeightCategories}px`,
                    } }, Object.values(categories).map((category) => (react_1.default.createElement(PopupCategory_1.PopupCategory, { data: category, onClick: changeCategory, key: category.slug, isActive: currentCategory.slug === category.slug })))),
                react_1.default.createElement("div", { className: b('controls'), ref: controlsRef },
                    react_1.default.createElement("div", { className: b('links') }, links &&
                        links.map((link) => (react_1.default.createElement(gravity_ui_page_constructor_1.Link, { className: b('link'), url: link.url, text: link.text, textSize: "m", key: link.url, theme: "normal", arrow: true })))),
                    placeholder && (react_1.default.createElement(Search_1.default, { initialValue: "", onSubmit: onSearch, className: b('search'), placeholder: placeholder, value: search, size: "s", customSearchIcon: icons_1.Magnifier })))),
            react_1.default.createElement(gravity_ui_page_constructor_1.Col, { className: b('right'), sizes: { [gravity_ui_page_constructor_1.GridColumnSize.Lg]: 9, [gravity_ui_page_constructor_1.GridColumnSize.All]: 8 }, ref: rightSideRef },
                react_1.default.createElement("div", { className: b('right-content'), ref: rightSideContentRef }, search ? (react_1.default.createElement(SearchResult_1.SearchResult, { value: search, data: flatList, section: section, className: b('items') })) : (react_1.default.createElement(react_1.Fragment, null, currentCategoryData.groups.map((group, index) => {
                    const key = group.title || group.url || index;
                    return index ? (react_1.default.createElement(PopupSecondaryGroup_1.PopupSecondaryGroup, Object.assign({}, group, { key: key }))) : (react_1.default.createElement(PopupGroup_1.PopupGroup, Object.assign({}, group, { section: section, key: key })));
                }))))))));
};
exports.LargePopup = LargePopup;
