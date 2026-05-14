import type {RefObject} from 'react';
import React, {useCallback, useEffect, useState} from 'react';

import {block} from '../../../../utils/cn';
import {NO_MENU_TAB_SELECTED, SWITCH_MENU_TAB_TIMEOUT} from '../../constants';
import {
    CompanyPopupData,
    InvestorPopupData,
    MediumPopupData,
    NavigationItemData,
    NavigationItemType,
    ProductsPopupData,
    ResourcesPopupData,
    SetupRouteChangeHandler,
    SolutionsPopupData,
    WhyPopupData,
} from '../../models';
import {CompanyPopup} from '../CompanyPopup/CompanyPopup';
import {InvestorPopup} from '../InvestorPopup/InvestorPopup';
import {MediumPopup} from '../MediumPopup/MediumPopup';
import {NavigationItem} from '../NavigationItem/NavigationItem';
import {NavigationPopup} from '../NavigationPopup/NavigationPopup';
import {ProductsPopup} from '../ProductsPopup/ProductsPopup';
import {ResourcesPopup} from '../ResourcesPopup/ResourcesPopup';
import {SolutionsPopup} from '../SolutionsPopup/SolutionsPopup';
import {WhyPopup} from '../WhyPopup/WhyPopup';

import './Navigation.scss';

const b = block('navigation');
const tooltipPrefixId = 'navigation-item-key';

interface NavigationProps {
    data: NavigationItemData[];
    headerRef?: RefObject<HTMLDivElement>;
    setupRouteChangeHandler?: SetupRouteChangeHandler;
}

const getPopupContent = (sectionData: NavigationItemData) => {
    const {type, data} = sectionData;

    switch (type) {
        case NavigationItemType.MediumPopup:
            return <MediumPopup {...(data as MediumPopupData)} />;
        case NavigationItemType.ProductsPopup:
            return <ProductsPopup {...(data as ProductsPopupData)} />;
        case NavigationItemType.SolutionsPopup:
            return <SolutionsPopup {...(data as SolutionsPopupData)} />;
        case NavigationItemType.WhyPopup:
            return <WhyPopup {...(data as WhyPopupData)} />;
        case NavigationItemType.ResourcesPopup:
            return <ResourcesPopup {...(data as ResourcesPopupData)} />;
        case NavigationItemType.CompanyPopup:
            return <CompanyPopup {...(data as CompanyPopupData)} />;
        case NavigationItemType.InvestorPopup:
            return <InvestorPopup {...(data as InvestorPopupData)} />;
        default:
            return null;
    }
};

export const Navigation = ({data, headerRef, setupRouteChangeHandler}: NavigationProps) => {
    const [activeTab, setActiveTab] = useState(NO_MENU_TAB_SELECTED);
    const [pretendentActiveTab, setPretendentAciveTab] = useState(NO_MENU_TAB_SELECTED);
    const [previouslyFocusedElement, setPreviouslyFocusedElement] = useState<HTMLElement | null>(
        null,
    );

    const handleActiveTab = useCallback((currentIndex: number) => {
        setPreviouslyFocusedElement(document.activeElement as HTMLElement);
        setPretendentAciveTab(currentIndex);
    }, []);

    const onEscapeKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setActiveTab(NO_MENU_TAB_SELECTED);
                setPretendentAciveTab(NO_MENU_TAB_SELECTED);
                previouslyFocusedElement?.focus({preventScroll: true});
            }
        },
        [previouslyFocusedElement],
    );

    useEffect(
        () =>
            setupRouteChangeHandler?.(() => {
                handleActiveTab(NO_MENU_TAB_SELECTED);
            }),
        [setupRouteChangeHandler, handleActiveTab],
    );

    useEffect(() => {
        const timerId = setTimeout(() => {
            setActiveTab(pretendentActiveTab);
        }, SWITCH_MENU_TAB_TIMEOUT);

        return () => clearTimeout(timerId);
    }, [activeTab, pretendentActiveTab]);

    useEffect(() => {
        document.addEventListener('keydown', onEscapeKeyDown);

        return () => {
            document.removeEventListener('keydown', onEscapeKeyDown);
        };
    }, [onEscapeKeyDown]);

    return (
        <nav>
            <ul className={b()}>
                {data.map((item, i) => (
                    <NavigationItem
                        key={item.title}
                        item={item}
                        handleActiveTab={handleActiveTab}
                        index={i}
                        isActive={activeTab === i}
                        tooltipId={`${tooltipPrefixId}-${i}`}
                    >
                        {activeTab === i && item.type !== NavigationItemType.Link && (
                            <NavigationPopup headerRef={headerRef} id={`${tooltipPrefixId}-${i}`}>
                                {getPopupContent(item)}
                            </NavigationPopup>
                        )}
                    </NavigationItem>
                ))}
            </ul>
        </nav>
    );
};
