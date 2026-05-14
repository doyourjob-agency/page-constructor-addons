import React from 'react';

import {Col, Grid, GridColumnSize, Image, Row} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {ResourcesPopupData} from '../../models';
import {PopupItem} from '../PopupItem/PopupItem';

import './ResourcesPopup.scss';

const b = block('resources-popup');

const EventCard = () => {
    return (
        <div className={b('event-card')}>
            <div className={b('event-card-tag')}>Conference</div>
            <Image
                className={b('event-card-image')}
                containerClassName={b('event-card-container-image')}
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
            />
            <div className={b('event-card-content')}>
                <div className={b('event-card-wrap')}>
                    <div className={b('event-card-date')}>March 23-26, 2026</div>
                    <div className={b('event-card-title')}>KubeCon 2026</div>
                </div>
                <div className={b('event-card-location')}>Netherlands</div>
            </div>
        </div>
    );
};

export const ResourcesPopup = (props: ResourcesPopupData) => (
    <Grid className={b()} containerClass={b('container')}>
        <div className={b('wrap')}>
            <div className={b('group')}>
                <Row>
                    <Col sizes={{[GridColumnSize.Md]: 8, [GridColumnSize.All]: 12}}>
                        <div className={b('title')}>Resource hub →</div>
                        <div className={b('subtitle')}>
                            Learn and explore main cloud related topics
                        </div>
                    </Col>
                    <Col sizes={{[GridColumnSize.Md]: 4, [GridColumnSize.All]: 12}}></Col>
                </Row>
                <Row>
                    <PopupItem
                        title="Compute guides"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                    />
                    <PopupItem
                        title="Optimizing сosts"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                    />
                    <PopupItem
                        title="Fine-tuning AI Models"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                    />
                    <PopupItem
                        title="Inference insights"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                    />
                    <PopupItem
                        title="Unlocking Serverless AI"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                    />
                    <PopupItem
                        title="Events & Webinars"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                    />
                </Row>
            </div>
            <div className={b('group')}>
                <Row>
                    <Col sizes={{[GridColumnSize.Md]: 8, [GridColumnSize.All]: 12}}>
                        <div className={b('title')}>Nebius for AI Builders↗</div>
                        <div className={b('subtitle')}>
                            Hub with knowledge, and community to build faster
                        </div>
                    </Col>
                    <Col sizes={{[GridColumnSize.Md]: 4, [GridColumnSize.All]: 12}}></Col>
                </Row>
                <Row>
                    <PopupItem
                        title="Docs and cookbooks"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                    />
                    <PopupItem
                        title="GitHub library ↗"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                    />
                    <PopupItem
                        title="Safety & Security"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                    />
                </Row>
                <Row>
                    <Col>
                        <div className={b('banner')}>
                            <Image
                                className={b('banner-image')}
                                containerClassName={b('banner-container-image')}
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                            />
                            <div className={b('banner-wrap')}>
                                <Image
                                    className={b('banner-icon')}
                                    containerClassName={b('banner-container-icon')}
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                                />
                                <div className={b('banner-content')}>
                                    <div className={b('banner-title')}>Nebius Academy ↗</div>
                                    <div className={b('banner-description')}>
                                        Focused training, expert-led courses that help professionals
                                        and teams turn AI knowledge into real-world impact.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        <div className={b('events')}>
            <div className={b('events-title')}>Featured events</div>
            <EventCard />
            <EventCard />
        </div>
    </Grid>
);
