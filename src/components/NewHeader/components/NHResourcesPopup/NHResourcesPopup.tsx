import React from 'react';

import {
    Col,
    Grid,
    GridColumnSize,
    Image,
    Row,
    getLinkProps,
} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {
    NHEventCardData,
    NHPopupItemData,
    NHResourcesPopupData,
    NHResourcesPopupGroup,
} from '../../models';
import {NHPopupItem} from '../NHPopupItem/NHPopupItem';

import './NHResourcesPopup.scss';

const b = block('nh-resources-popup');

const EventCard = ({url, tag, image, date, title, location}: NHEventCardData) => {
    return (
        <a href={url} className={b('event-card')} {...getLinkProps(url)}>
            <div className={b('event-card-tag')}>{tag}</div>
            <Image
                className={b('event-card-image')}
                containerClassName={b('event-card-container-image')}
                src={image}
            />
            <div className={b('event-card-content')}>
                <div className={b('event-card-wrap')}>
                    <div className={b('event-card-date')}>{date}</div>
                    <div className={b('event-card-title')}>{title}</div>
                </div>
                <div className={b('event-card-location')}>{location}</div>
            </div>
        </a>
    );
};

export const NHResourcesPopup = ({groups, banner, events}: NHResourcesPopupData) => (
    <Grid className={b()} containerClass={b('container')}>
        <div className={b('wrap')}>
            {groups.map((group: NHResourcesPopupGroup) => (
                <div className={b('group')} key={group.title}>
                    <Row>
                        <Col sizes={{[GridColumnSize.Md]: 8, [GridColumnSize.All]: 12}}>
                            <a href={group.url} className={b('title')} {...getLinkProps(group.url)}>
                                {group.title}
                            </a>
                            <div className={b('subtitle')}>{group.subtitle}</div>
                        </Col>
                        <Col sizes={{[GridColumnSize.Md]: 4, [GridColumnSize.All]: 12}}></Col>
                    </Row>
                    <Row>
                        {group.items.map((item: NHPopupItemData) => (
                            <NHPopupItem key={item.title} hover {...item} />
                        ))}
                    </Row>
                </div>
            ))}
            {banner && (
                <div className={b('group')}>
                    <Row>
                        <Col>
                            <a
                                href={banner.url}
                                className={b('banner')}
                                {...getLinkProps(banner.url)}
                            >
                                <Image
                                    className={b('banner-image')}
                                    containerClassName={b('banner-container-image')}
                                    src={banner.image}
                                />
                                <div className={b('banner-wrap')}>
                                    <Image
                                        className={b('banner-icon')}
                                        containerClassName={b('banner-container-icon')}
                                        src={banner.icon}
                                    />
                                    <div className={b('banner-content')}>
                                        <div className={b('banner-title')}>{banner.title}</div>
                                        <div className={b('banner-description')}>
                                            {banner.description}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </div>
            )}
        </div>
        {events && (
            <div className={b('events')}>
                <div className={b('events-title')}>{events.title}</div>
                {events.items.map((event: NHEventCardData) => (
                    <EventCard key={event.title} {...event} />
                ))}
            </div>
        )}
    </Grid>
);
