import React, {useCallback, useEffect, useMemo, useState} from 'react';

import {Col, Grid} from '@doyourjob/gravity-ui-page-constructor';
import {Xmark} from '@gravity-ui/icons';
import {Icon, useMobile} from '@gravity-ui/uikit';

import {block} from '../../utils/cn';

import {CloseIcon} from './CloseIcon';
import i18n from './i18n';

import './HeaderStripe.scss';

type HeaderStripeItemType =
    | {
          text: string;
          link?: string;
          target?: string;
          onlyDesktop?: boolean;
          background?: string;
          textColor?: string;
      }
    | string;

export type HeaderStripeProps = {
    duration?: number;
    background?: string;
    backgroundImage?: string;
    textColor?: string;
    items: HeaderStripeItemType[];
    onlyDesktop?: boolean;
    isAbsolute?: boolean;
    canClose?: boolean;
    onClose?: () => void;
    newDesign?: boolean;
};

const b = block('header-stripe');

const renderItemContent = (item: HeaderStripeItemType) => {
    if (typeof item === 'string') {
        return item;
    } else if (item.link) {
        return (
            <a className={b('item-link')} href={item.link} target={item.target}>
                {item.text}
            </a>
        );
    } else {
        return item.text;
    }
};

export const HeaderStripe = ({
    duration = 8000,
    items,
    textColor,
    background,
    backgroundImage,
    onlyDesktop,
    canClose,
    onClose,
    newDesign,
}: HeaderStripeProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isClosing, setIsClosing] = useState(false);
    const isMobile = useMobile();

    const filteredItems = useMemo(
        () =>
            isMobile
                ? items.filter((item) => (typeof item === 'object' ? !item.onlyDesktop : true))
                : items,
        [items, isMobile],
    );

    const handleClose = useCallback(() => {
        setIsClosing(true);
        onClose?.();
    }, [onClose]);

    useEffect(() => {
        if (filteredItems.length > 0) {
            setActiveIndex(0);
        }
    }, [filteredItems.length]);

    useEffect(() => {
        if (filteredItems.length < 1) return undefined;

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
        }, duration);

        return () => {
            clearInterval(interval);
        };
    }, [duration, filteredItems.length]);

    const rootStyle = useMemo(() => {
        const properties: React.CSSProperties = {};
        if (background) {
            properties.background = background;
        }
        if (backgroundImage) {
            properties.backgroundImage = `url("${backgroundImage}")`;
        }
        if (textColor) {
            properties.color = textColor;
        }
        return properties;
    }, [textColor, background, backgroundImage]);

    const contentStyle = useMemo(() => {
        if (!newDesign) {
            return {};
        }
        const item = filteredItems[activeIndex];
        const properties: React.CSSProperties = {};
        if (typeof item === 'object' && item.background) {
            properties.background = item.background;
        }
        if (typeof item === 'object' && item.textColor) {
            properties.color = item.textColor;
        }
        return properties;
    }, [newDesign, filteredItems, activeIndex]);

    return (
        <div
            className={b('root', {
                'only-desktop': onlyDesktop,
                closing: isClosing,
                'new-design': newDesign,
            })}
            style={rootStyle}
        >
            <Grid>
                <Col>
                    <div
                        className={b('content', {'with-close': Boolean(onClose)})}
                        style={contentStyle}
                    >
                        {filteredItems.map((item, index) => {
                            const isActive = index === activeIndex;
                            const isPrev =
                                filteredItems.length > 1 &&
                                index ===
                                    (activeIndex === 0
                                        ? filteredItems.length - 1
                                        : activeIndex - 1);
                            return (
                                <div
                                    key={String(index)}
                                    className={b('item', {
                                        active: isActive,
                                        prev: isPrev,
                                    })}
                                >
                                    <div className={b('item-content')}>
                                        {renderItemContent(item)}
                                    </div>
                                </div>
                            );
                        })}
                        {canClose && (
                            <button
                                aria-label={i18n('close')}
                                className={b('close')}
                                onClick={handleClose}
                            >
                                <Icon
                                    data={newDesign ? CloseIcon : Xmark}
                                    className={b('close-icon')}
                                    size={16}
                                />
                            </button>
                        )}
                    </div>
                </Col>
            </Grid>
        </div>
    );
};
