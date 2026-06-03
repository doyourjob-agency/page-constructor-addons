import React from 'react';

import type {ButtonProps} from '@doyourjob/gravity-ui-page-constructor';
import {Button as PCButton} from '@doyourjob/gravity-ui-page-constructor';
import {Bars, Xmark} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';

import {block} from '../../../../utils/cn';
import {NHMobileNavigationItemData} from '../../models';
import {NHMobileNavigationItem} from '../NHMobileNavigationItem/NHMobileNavigationItem';
import {NHMobileNavigationPopup} from '../NHMobileNavigationPopup/NHMobileNavigationPopup';

import './NHMobileNavigation.scss';

const b = block('nh-mobile-navigation');

interface MobileNavigationProps {
    isOpened: boolean;
    toogleOpen: (isOpened: boolean) => void;
    isSearchOpen: boolean;
    data: NHMobileNavigationItemData[];
    onMenuScroll: (scrollTop: number) => void;
    popupClassName?: string;
    buttons?: ButtonProps[];
}

export const NHMobileNavigation = ({
    isOpened,
    toogleOpen,
    isSearchOpen,
    data,
    buttons,
    onMenuScroll,
}: MobileNavigationProps) => (
    <div className={b()}>
        <Button
            view="flat"
            size="l"
            className={b('icon', {hidden: isSearchOpen})}
            onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                toogleOpen(!isOpened);
            }}
        >
            <Icon data={isOpened ? Xmark : Bars} size={24} />
        </Button>
        <NHMobileNavigationPopup
            isOpened={isOpened}
            onClose={() => toogleOpen(false)}
            onMenuScroll={onMenuScroll}
        >
            <nav>
                <ul className={b()}>
                    {data.map((item) => (
                        <li className={b()} key={item.title}>
                            <NHMobileNavigationItem {...item} />
                        </li>
                    ))}
                </ul>
                {buttons &&
                    buttons?.map((button) => <PCButton {...button} size="l" key={button.text} />)}
            </nav>
        </NHMobileNavigationPopup>
    </div>
);
