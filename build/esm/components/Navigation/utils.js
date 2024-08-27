export const getIconSize = (isMobile) => {
    return isMobile ? 24 : 16;
};
export const SERVICES_PREFIX = 'services';
export const SOLUTIONS_PREFIX = 'solutions';
export const getHeaderHeight = (isMobile) => {
    return isMobile ? 68 : 94;
};
export function getFlatList(dataByKeys, key = 'slug') {
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
export function applySearch(searchRaw, navigationItems) {
    const search = searchRaw.toLowerCase();
    return navigationItems.filter(({ title, slug, description }) => (title && title.toLowerCase().includes(search)) ||
        slug.includes(search) ||
        (description && description.toLowerCase().includes(search)));
}
