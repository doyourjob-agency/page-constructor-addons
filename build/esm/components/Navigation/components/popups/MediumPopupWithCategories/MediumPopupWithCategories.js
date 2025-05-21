import React, { useMemo } from 'react';
import { BREAKPOINTS, Col, GridColumnSize, Row, Title, useWindowBreakpoint, } from '@doyourjob/gravity-ui-page-constructor';
import { block } from '../../../../../utils/cn';
import { NavigationPopupItem, } from '../../Navigation/NavigationPopupItem/NavigationPopupItem';
import './MediumPopupWithCategories.css';
const b = block('medium-popup-with-categories');
export const MediumPopupWithCategories = ({ data }) => {
    const breakpoint = useWindowBreakpoint();
    const itemsArrays = data.groups.map((dataItem) => dataItem.items.map((item) => (Object.assign(Object.assign({}, item), { imageSize: dataItem.imageSize }))));
    const isDesktop = breakpoint > BREAKPOINTS.lg;
    const maxLength = Math.max(...itemsArrays.map((item) => item.length));
    const desktopItemsArray = useMemo(() => {
        const itemsArray = [];
        for (let i = 0; i < maxLength; i += 2) {
            for (let j = 0; j < 2; j++) {
                itemsArray.push(itemsArrays[j][i]);
                itemsArray.push(itemsArrays[j][i + 1]);
            }
        }
        return itemsArray;
    }, [itemsArrays, maxLength]);
    return (React.createElement(Row, { className: b() },
        data.groups.map(({ title, items, imageSize }) => (React.createElement(Col, { key: title, className: b('col'), sizes: {
                [GridColumnSize.Xl]: 6,
                [GridColumnSize.Lg]: 12,
                [GridColumnSize.All]: 12,
            } },
            title && (React.createElement(Row, null,
                React.createElement(Col, { className: b('title') },
                    React.createElement(Title, { title: { text: title, textSize: 'xs' } })))),
            !isDesktop && (React.createElement("div", null,
                React.createElement(Row, null, items.map((item) => (React.createElement(NavigationPopupItem, Object.assign({}, item, { hover: true, imageSize: imageSize, sizes: {
                        [GridColumnSize.Lg]: 6,
                        [GridColumnSize.Md]: 4,
                        [GridColumnSize.All]: 4,
                    }, key: item.title })))))))))),
        isDesktop && (React.createElement(Col, { className: b('items') },
            React.createElement("div", null,
                React.createElement(Row, null, desktopItemsArray.map((item, index) => {
                    return typeof item === 'undefined' ? (React.createElement(Col, { sizes: {
                            [GridColumnSize.Xl]: 3,
                            [GridColumnSize.Md]: 4,
                            [GridColumnSize.All]: 12,
                        }, key: index })) : (React.createElement(NavigationPopupItem, Object.assign({}, item, { key: item.title, hover: true, sizes: {
                            [GridColumnSize.Xl]: 3,
                            [GridColumnSize.Md]: 4,
                            [GridColumnSize.All]: 12,
                        } })));
                })))))));
};
