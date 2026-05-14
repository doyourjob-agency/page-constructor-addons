import React from 'react';

import type {ButtonProps} from '@doyourjob/gravity-ui-page-constructor';
import {Button as PCButton} from '@doyourjob/gravity-ui-page-constructor';
import {Bars, Xmark} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';

import {block} from '../../../../utils/cn';
import {MobileNavigationItemData} from '../../models';
import {MobileNavigationItem} from '../MobileNavigationItem/MobileNavigationItem';
import {MobileNavigationPopup} from '../MobileNavigationPopup/MobileNavigationPopup';

import './MobileNavigation.scss';

const b = block('mobile-navigation');

interface MobileNavigationProps {
    isOpened: boolean;
    toogleOpen: (isOpened: boolean) => void;
    isSearchOpen: boolean;
    data: MobileNavigationItemData[];
    onMenuScroll: (scrollTop: number) => void;
    popupClassName?: string;
    buttons?: ButtonProps[];
}

export const MobileNavigation = ({
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
        <MobileNavigationPopup
            isOpened={isOpened}
            onClose={() => toogleOpen(false)}
            onMenuScroll={onMenuScroll}
        >
            <nav>
                <ul className={b()}>
                    {data.map((item) => (
                        <li className={b()} key={item.title}>
                            <MobileNavigationItem {...item} />
                        </li>
                    ))}
                </ul>
                {buttons &&
                    buttons?.map((button) => <PCButton {...button} size="l" key={button.text} />)}
            </nav>
        </MobileNavigationPopup>
    </div>
);
