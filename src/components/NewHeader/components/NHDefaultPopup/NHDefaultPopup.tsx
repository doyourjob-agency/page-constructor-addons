import React, {useMemo} from 'react';

import {block} from '../../../../utils/cn';
import {NHDefaultPopupData, NHDefaultPopupSection, NHPopupItemData} from '../../models';
import {NHBanner} from '../NHBanner/NHBanner';
import {NHEventCard} from '../NHEventCard/NHEventCard';
import {NHPopupItem} from '../NHPopupItem/NHPopupItem';
import {NHStock} from '../NHStock/NHStock';
import {NHStoryCard} from '../NHStoryCard/NHStoryCard';

import './NHDefaultPopup.scss';

const b = block('nh-default-popup');

export const NHDefaultPopup = ({
    sections,
    right,
    maxWidth,
    primaryColor,
    primaryColorHover,
}: NHDefaultPopupData) => {
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

    const renderSectionContent = (section: NHDefaultPopupSection, index: number) => {
        if (section.mode === 'run') {
            return (
                <div className={b('wrap')} style={wrapsStyle[index]}>
                    {section.items?.map((item: NHPopupItemData, cardIndex: number) => (
                        <NHPopupItem key={cardIndex} {...item} column />
                    ))}
                </div>
            );
        }

        return (
            <div className={b('wrap')} style={wrapsStyle[index]}>
                {section.items.map((item: NHPopupItemData, idx: number) => (
                    <NHPopupItem
                        key={idx}
                        {...item}
                        imageColor={primaryColor}
                        imageColorHover={primaryColorHover}
                    />
                ))}
                {section.mode === 'scale' && section.banner && <NHBanner {...section.banner} />}
            </div>
        );
    };

    return (
        <div className={b()} style={rootStyle}>
            <div className={b('left')}>
                {sections.map((section: NHDefaultPopupSection, index: number) => {
                    const hasSideHead = Boolean(section.mode);
                    return (
                        <div key={index} className={b('section', {'side-head': hasSideHead})}>
                            {section.title || section.subtitle ? (
                                <div className={b(hasSideHead ? 'section-head' : 'head')}>
                                    <div className={b('title')}>{section.title}</div>
                                    <div className={b('subtitle')}>{section.subtitle}</div>
                                </div>
                            ) : null}
                            {renderSectionContent(section, index)}
                        </div>
                    );
                })}
            </div>
            {right && (
                <div className={b('right')}>
                    <div className={b('title')}>{right.title}</div>
                    {cards && <div className={b('cards')}>{cards}</div>}
                    {right.stock && <NHStock {...right.stock} />}
                </div>
            )}
        </div>
    );
};
