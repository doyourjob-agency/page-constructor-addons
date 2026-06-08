import React from 'react';

import type {ButtonProps} from '@doyourjob/gravity-ui-page-constructor';
import {Button as PCButton} from '@doyourjob/gravity-ui-page-constructor';
import {Bars, Xmark} from '@gravity-ui/icons';
import {Button, Icon, useUniqId} from '@gravity-ui/uikit';

import {block} from '../../../../utils/cn';
import {NHLoginPopupData, NHNavigationData} from '../../models';
import {NHLogo} from '../NHLogo/NHLogo';
import {NHMobileNavigationItem} from '../NHMobileNavigationItem/NHMobileNavigationItem';
import {NHMobileNavigationPopup} from '../NHMobileNavigationPopup/NHMobileNavigationPopup';
import {NHPopupItem} from '../NHPopupItem/NHPopupItem';

import './NHMobileNavigation.scss';

const b = block('nh-mobile-navigation');

interface MobileNavigationProps {
    isOpened: boolean;
    toogleOpen: (isOpened: boolean) => void;
    isSearchOpen: boolean;
    data?: NHNavigationData;
    onMenuScroll: (scrollTop: number) => void;
    popupClassName?: string;
    buttons?: ButtonProps[];
    login?: NHLoginPopupData;
}

export const NHMobileNavigation = ({
    isOpened,
    toogleOpen,
    isSearchOpen,
    data,
    onMenuScroll,
}: MobileNavigationProps) => {
    const popupId = useUniqId();

    return (
        <div className={b()}>
            <Button
                view="flat"
                size="l"
                className={b('icon', {hidden: isSearchOpen})}
                extraProps={{
                    'aria-label': isOpened ? 'Close navigation menu' : 'Open navigation menu',
                    'aria-expanded': isOpened,
                    'aria-controls': popupId,
                }}
                onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    toogleOpen(!isOpened);
                }}
            >
                <Icon data={isOpened ? Xmark : Bars} size={24} />
            </Button>
            <NHMobileNavigationPopup
                id={popupId}
                isOpened={isOpened}
                onClose={() => toogleOpen(false)}
                onMenuScroll={onMenuScroll}
            >
                <div className={b('header')}>
                    {data?.logo && <NHLogo data={data.logo} />}
                    <div className={b('header-right')}>
                        <Button
                            view="flat"
                            size="l"
                            className={b('close-button')}
                            extraProps={{'aria-label': 'Close navigation menu'}}
                            onClick={() => toogleOpen(false)}
                        >
                            <Icon data={Xmark} size={24} />
                        </Button>
                    </div>
                </div>
                <nav className={b('nav')}>
                    <ul className={b('list')}>
                        {data?.left?.map((item, index) => (
                            <li className={b('item')} key={index}>
                                <NHMobileNavigationItem item={item} />
                            </li>
                        ))}
                    </ul>
                    <ul className={b('list')}>
                        {data?.right?.map((item, index) => (
                            <li className={b('item')} key={index}>
                                <NHMobileNavigationItem item={item} />
                            </li>
                        ))}
                    </ul>
                    {data?.buttons && (
                        <div className={b('buttons')}>
                            {data.buttons.map((button, index) => (
                                <PCButton
                                    {...button}
                                    size="l"
                                    key={index}
                                    className={b('button')}
                                />
                            ))}
                        </div>
                    )}
                    {data?.login && (
                        <div className={b('login-items')}>
                            {data.login.items.map((item, index) => (
                                <div key={index} className={b('login-item')}>
                                    <NHPopupItem {...item} />
                                </div>
                            ))}
                        </div>
                    )}
                </nav>
            </NHMobileNavigationPopup>
        </div>
    );
};
