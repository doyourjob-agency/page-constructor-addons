import React from 'react';

import {Col, Grid, GridColumnSize, Image, Row} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {
    NHPopupItemData,
    NHProductsPopupData,
    NHProductsPopupSection,
    NHRunCardData,
    NHSpecialCardData,
} from '../../models';
import {NHPopupItem} from '../NHPopupItem/NHPopupItem';

import './NHProductsPopup.scss';

const b = block('nh-products-popup');

const PoweredCard = ({title, description, image}: NHSpecialCardData) => {
    return (
        <div className={b('powered-card')}>
            <div className={b('powered-card-wrap')}>
                <div className={b('powered-card-title')}>{title}</div>
                <div className={b('powered-card-description')}>{description}</div>
            </div>
            <Image
                className={b('powered-card-image')}
                containerClassName={b('powered-card-container-image')}
                src={image}
            />
        </div>
    );
};

const RunCard = ({title, description, image, border}: NHRunCardData) => {
    return (
        <div className={b('run-card', {border: border})}>
            <Image className={b('run-card-image')} src={image} />
            <div className={b('run-card-wrap')}>
                <div className={b('run-card-title')}>{title}</div>
                <div className={b('run-card-description')}>{description}</div>
            </div>
        </div>
    );
};

export const NHProductsPopup = ({sections, poweredCard}: NHProductsPopupData) => (
    <Grid className={b()} containerClass={b('container')}>
        {sections.map((section: NHProductsPopupSection, index: number) => {
            const isScaleSection = index === 2; // "Scale" section is usually the 3rd one
            const isRunSection = section.runCards && section.runCards.length > 0;

            let content;

            if (isRunSection) {
                content = (
                    <Col>
                        <Row>
                            {section.runCards?.map((card: NHRunCardData, cardIndex: number) => (
                                <Col
                                    key={`${card.title}-${cardIndex}`}
                                    sizes={{
                                        [GridColumnSize.Md]: 3,
                                        [GridColumnSize.All]: 12,
                                    }}
                                >
                                    <RunCard {...card} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                );
            } else if (isScaleSection) {
                content = (
                    <React.Fragment>
                        <Col
                            sizes={{
                                [GridColumnSize.Md]: 8,
                                [GridColumnSize.All]: 12,
                            }}
                        >
                            <Row>
                                {section.items?.map((item: NHPopupItemData, itemIndex: number) => (
                                    <NHPopupItem
                                        key={`${item.title}-${itemIndex}`}
                                        {...item}
                                        hover
                                        sizes={{
                                            [GridColumnSize.Md]: 6,
                                            [GridColumnSize.All]: 12,
                                        }}
                                    />
                                ))}
                            </Row>
                        </Col>
                        <Col
                            sizes={{
                                [GridColumnSize.Md]: 4,
                                [GridColumnSize.All]: 12,
                            }}
                        >
                            {poweredCard && <PoweredCard {...poweredCard} />}
                        </Col>
                    </React.Fragment>
                );
            } else {
                content = section.items?.map((item: NHPopupItemData, itemIndex: number) => (
                    <NHPopupItem
                        key={`${item.title}-${itemIndex}`}
                        {...item}
                        hover
                        sizes={{
                            [GridColumnSize.Md]: 4,
                            [GridColumnSize.All]: 12,
                        }}
                    />
                ));
            }

            return (
                <Row key={section.title}>
                    <Col className={b('title')}>{section.title}</Col>
                    <Col className={b('wrap')}>
                        <Row>
                            <Col className={b('subtitle')}>{section.subtitle}</Col>
                        </Row>
                        <Row>{content}</Row>
                    </Col>
                </Row>
            );
        })}
    </Grid>
);
