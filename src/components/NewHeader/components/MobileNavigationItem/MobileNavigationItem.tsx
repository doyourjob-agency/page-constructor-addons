import React, {Fragment, useCallback, useState} from 'react';

import {Foldable, ToggleArrow, getLinkProps} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {MobileNavigationItemData} from '../../models';

import './MobileNavigationItem.scss';

const b = block('mobile-navigation-item');

export const MobileNavigationItem = (props: MobileNavigationItemData) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const toggleOpen = useCallback(() => {
        setIsOpened(!isOpened);
    }, [isOpened]);

    if ('link' in props) {
        return (
            <a
                href={props.link.url}
                className={b({type: 'link'})}
                {...getLinkProps(props.link.url || '', undefined, props.link.target)}
            >
                {props.title}
            </a>
        );
    }

    if ('data' in props) {
        return (
            <Fragment>
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
                <div className={b({opened: isOpened})} onClick={toggleOpen}>
                    <div className={b('text')}>{props.title}</div>
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
                    {props.data.map(({title: itemTitle, items}) => (
                        <div className={b('list')} key={items[0].title}>
                            {itemTitle && <h5 className={b('list-title')}>{itemTitle}</h5>}
                            <ul className={b('list-items')}>
                                {items.map((linkItem) => (
                                    <li className={b('li')} key={linkItem.title}>
                                        <a
                                            href={linkItem.url}
                                            className={b('list-item')}
                                            {...getLinkProps(linkItem.url || '')}
                                        >
                                            {linkItem.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </Foldable>
            </Fragment>
        );
    }

    return null;
};
