"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applySearch = exports.getFlatList = exports.getHeaderHeight = exports.SOLUTIONS_PREFIX = exports.SERVICES_PREFIX = exports.getIconSize = void 0;
const getIconSize = (isMobile) => {
    return isMobile ? 24 : 16;
};
exports.getIconSize = getIconSize;
exports.SERVICES_PREFIX = 'services';
exports.SOLUTIONS_PREFIX = 'solutions';
const getHeaderHeight = (isMobile) => {
    return isMobile ? 68 : 94;
};
exports.getHeaderHeight = getHeaderHeight;
function getFlatList(dataByKeys, key = 'slug') {
    const navigationItems = {};
    Object.values(dataByKeys).forEach((dataByKey) => {
        dataByKey.forEach((data) => {
            if (data[key]) {
                navigationItems[data[key]] = data;
            }
        });
    });
    return Object.values(navigationItems);
}
exports.getFlatList = getFlatList;
function applySearch(searchRaw, navigationItems) {
    const search = searchRaw.toLowerCase();
    return navigationItems.filter(({ title, slug, description }) => (title && title.toLowerCase().includes(search)) ||
        slug.includes(search) ||
        (description && description.toLowerCase().includes(search)));
}
exports.applySearch = applySearch;
