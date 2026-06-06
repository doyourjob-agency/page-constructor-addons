import React, {useMemo} from 'react';

import {Image, getLinkProps} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {
    NHDefaultPopupData,
    NHDefaultPopupSection,
    NHEventCardData,
    NHPopupItemData,
    NHStoryCardData,
} from '../../models';
import {NHPopupItem} from '../NHPopupItem/NHPopupItem';

import './NHDefaultPopup.scss';

const b = block('nh-default-popup');

const NHStoryCard = ({title, description, image, url}: NHStoryCardData) => (
    <a href={url} className={b('card')} {...getLinkProps(url)}>
        <Image className={b('card-image')} src={image} />
        <div className={b('card-wrap')}>
            <div className={b('card-title')}>{title}</div>
            <div className={b('card-description')}>{description}</div>
        </div>
    </a>
);

const NHEventCard = ({title, caption, description, image, url}: NHEventCardData) => (
    <a href={url} className={b('card')} {...getLinkProps(url)}>
        <Image className={b('card-image')} src={image} />
        <div className={b('card-wrap')}>
            <div className={b('card-caption')}>{caption}</div>
            <div className={b('card-title')}>{title}</div>
            <div className={b('card-description')}>{description}</div>
        </div>
    </a>
);

export const NHDefaultPopup = ({sections, right, maxWidth}: NHDefaultPopupData) => {
    const rootStyle = useMemo(
        () =>
            maxWidth
                ? {
                      marginLeft: 'auto',
                      maxWidth,
                  }
                : undefined,
        [maxWidth],
    );
    const wrapsStyle = useMemo(
        () =>
            sections.map((section) => ({
                gridTemplateColumns: `repeat(${section.columns || 3}, 1fr)`,
            })) as React.CSSProperties[],
        [sections],
    );
    const cards = useMemo(() => {
        if (right?.stories) {
            return right.stories.map((card, index) => <NHStoryCard key={index} {...card} />);
        }
        if (right?.events) {
            return right.events.map((card, index) => <NHEventCard key={index} {...card} />);
        }
        return null;
    }, [right]);
    return (
        <div className={b()} style={rootStyle}>
            <div className={b('left')}>
                {sections.map((section: NHDefaultPopupSection, index: number) => (
                    <div key={index} className={b('section')}>
                        {section.title || section.subtitle ? (
                            <div className={b('head')}>
                                <div className={b('title')}>{section.title}</div>
                                <div className={b('subtitle')}>{section.subtitle}</div>
                            </div>
                        ) : null}
                        <div className={b('wrap')} style={wrapsStyle[index]}>
                            {section.items.map((item: NHPopupItemData) => (
                                <NHPopupItem key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {right && (
                <div className={b('right')}>
                    <div className={b('title')}>{right.title}</div>
                    {cards && <div className={b('cards')}>{cards}</div>}
                    {right.stock && (
                        <div className={b('stock')}>
                            {right.stock.background ? (
                                <img
                                    className={b('stock-background')}
                                    src={right.stock.background}
                                    alt="Stock background"
                                />
                            ) : null}
                            <div className={b('stock-title')}>{right.stock.title}</div>
                            <div className={b('stock-value')}>{right.stock.value}</div>
                            <div className={b('stock-date')}>{right.stock.date}</div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
