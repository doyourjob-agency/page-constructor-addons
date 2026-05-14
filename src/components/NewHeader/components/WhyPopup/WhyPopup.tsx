import React from 'react';

import {Col, Grid, GridColumnSize, Image, Row} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {WhyPopupData} from '../../models';
import {PopupItem} from '../PopupItem/PopupItem';

import './WhyPopup.scss';

const b = block('why-popup');

export const WhyPopup = (props: WhyPopupData) => (
    <Grid className={b()} containerClass={b('container')}>
        <div className={b('wrap')}>
            <div className={b('group')}>
                <Row>
                    <Col>
                        <div className={b('title')}>Why Nebius?</div>
                    </Col>
                </Row>
                <Row>
                    <PopupItem
                        title="Performance at scale"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        sizes={{[GridColumnSize.All]: 12}}
                    />
                    <PopupItem
                        title="Cloud simplicity"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        sizes={{[GridColumnSize.All]: 12}}
                    />
                    <PopupItem
                        title="Customer support"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        sizes={{[GridColumnSize.All]: 12}}
                    />
                    <PopupItem
                        title="Research & Development"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        sizes={{[GridColumnSize.All]: 12}}
                    />
                    <PopupItem
                        title="Custom hardware"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        sizes={{[GridColumnSize.All]: 12}}
                    />
                    <PopupItem
                        title="Partners ecosystem"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        sizes={{[GridColumnSize.All]: 12}}
                    />
                </Row>
            </div>
            <div className={b('group')}>
                <Row>
                    <Col>
                        <div className={b('title')}>Programs</div>
                    </Col>
                </Row>
                <Row>
                    <PopupItem
                        title="Nebius for startups"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        sizes={{[GridColumnSize.All]: 12}}
                    />
                    <PopupItem
                        title="Research credits program"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        sizes={{[GridColumnSize.All]: 12}}
                    />
                </Row>
            </div>
        </div>
        <div className={b('card')}>
            <Image
                className={b('card-image')}
                containerClassName={b('card-container-image')}
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
            />
            <div className={b('card-wrap')}>
                <div className={b('card-title')}>Powered by NVIDIA</div>
                <div className={b('card-description')}>
                    Get the latest and greatest GPU platforms from NVIDIA first
                </div>
            </div>
        </div>
    </Grid>
);
