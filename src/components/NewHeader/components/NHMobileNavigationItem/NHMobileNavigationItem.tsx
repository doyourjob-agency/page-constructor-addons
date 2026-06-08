import React, {Fragment, useCallback, useState} from 'react';

import {Foldable, ToggleArrow, getLinkProps} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {NHNavigationItemData, NHNavigationItemType} from '../../models';

import {NHDefaultPopupContent} from './components/NHDefaultPopupContent/NHDefaultPopupContent';

import './NHMobileNavigationItem.scss';

const b = block('nh-mobile-navigation-item');

interface NHMobileNavigationItemProps {
    item?: NHNavigationItemData;
}

export const NHMobileNavigationItem = ({item}: NHMobileNavigationItemProps) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const toggleOpen = useCallback(() => {
        setIsOpened(!isOpened);
    }, [isOpened]);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleOpen();
            }
        },
        [toggleOpen],
    );

    if (item) {
        if (item.type === NHNavigationItemType.Link) {
            return (
                <a
                    href={item.data.url}
                    className={b({type: 'link'})}
                    {...getLinkProps(item.data.url || '', undefined, item.data.target)}
                >
                    {item.title}
                </a>
            );
        }

        return (
            <Fragment>
                <div
                    className={b()}
                    onClick={toggleOpen}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpened}
                    onKeyDown={handleKeyDown}
                >
                    <div className={b('text')}>{item.title}</div>
                    <div className={b('arrow')}>
                        <ToggleArrow
                            size={12}
                            type="vertical"
                            open={isOpened}
                            iconType="navigation"
                        />
                    </div>
                </div>
                <Foldable isOpened={isOpened}>
                    {item.type === NHNavigationItemType.NHDefaultPopup && (
                        <NHDefaultPopupContent data={item.data} />
                    )}
                </Foldable>
            </Fragment>
        );
    }

    return null;
};
