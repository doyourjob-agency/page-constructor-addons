import React from 'react';

import {Bars, Xmark} from '@gravity-ui/icons';
import type {ButtonProps} from '@gravity-ui/page-constructor';
import {Button, Icon} from '@gravity-ui/uikit';

import {block} from '../../../../utils/cn';
import {CustomElements, MOBILE_ICON_SIZE} from '../../containers/Header/Header';
import {NavigationSectionData} from '../../models';
import {ButtonsContainer, ButtonsContainerDirection} from '../ButtonsContainer/ButtonsContainer';

import {MobileNavigationItem} from './MobileNavigationItem/MobileNavigationItem';
import {MobileNavigationPopup} from './MobileNavigationPopup/MobileNavigationPopup';

import './MobileNavigation.scss';

const b = block('mobile-navigation');

interface MobileNavigationProps {
    isOpened: boolean;
    toogleOpen: (isOpened: boolean) => void;
    isSearchOpen: boolean;
    data: NavigationSectionData[];
    onMenuScroll: (scrollTop: number) => void;
    popupClassName?: string;
    buttons?: ButtonProps[];
    customElements?: CustomElements;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
    isOpened,
    toogleOpen,
    isSearchOpen,
    data,
    buttons,
    onMenuScroll,
    customElements: {actions, right} = {},
}) => {
    const icon = isOpened ? Xmark : Bars;

    return (
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
                <Icon data={icon} size={MOBILE_ICON_SIZE} />
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
                                <MobileNavigationItem data={item} />
                            </li>
                        ))}
                    </ul>
                    {buttons && (
                        <ButtonsContainer
                            buttons={buttons}
                            className={b('buttons')}
                            width="max"
                            direction={ButtonsContainerDirection.Column}
                        >
                            {actions}
                        </ButtonsContainer>
                    )}
                    {right}
                </nav>
            </MobileNavigationPopup>
        </div>
    );
};
