import React from 'react';

import {Col, Grid, GridColumnSize, Row} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {CompanyPopupData} from '../../models';
import {PopupItem} from '../PopupItem/PopupItem';

import './CompanyPopup.scss';

const b = block('company-popup');

export const CompanyPopup = (props: CompanyPopupData) => (
    <Grid className={b()} containerClass={b('container')}>
        <Row>
            <Col sizes={{[GridColumnSize.All]: 12, [GridColumnSize.Md]: 4}}>
                <Row>
                    <Col>
                        <div className={b('title')}>About Nebius</div>
                    </Col>
                </Row>
                <Row>
                    <PopupItem
                        title="Company"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        sizes={{[GridColumnSize.All]: 12}}
                    />
                    <PopupItem
                        title="Newsroom"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        sizes={{[GridColumnSize.All]: 12}}
                    />
                    <PopupItem
                        title="Trust center"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        sizes={{[GridColumnSize.All]: 12}}
                    />
                    <PopupItem
                        title="Careers"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        sizes={{[GridColumnSize.All]: 12}}
                    />
                    <PopupItem
                        title="Contacts"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        sizes={{[GridColumnSize.All]: 12}}
                    />
                </Row>
            </Col>
            <Col sizes={{[GridColumnSize.All]: 12, [GridColumnSize.Md]: 8}}>
                <Row>
                    <Col>
                        <div className={b('title')}>Other business and assets</div>
                    </Col>
                </Row>
                <Row>
                    <PopupItem
                        title="Avride ↗"
                        description="Builds autonomous cars and delivery robots"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        sizes={{[GridColumnSize.All]: 12, [GridColumnSize.Md]: 6}}
                    />
                    <PopupItem
                        title="ClickHouse ↗"
                        description="Fast open-source database for real-time analytics"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        sizes={{[GridColumnSize.All]: 12, [GridColumnSize.Md]: 6}}
                    />
                    <PopupItem
                        title="Tripleten ↗"
                        description="An online platform for learning tech skills "
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        sizes={{[GridColumnSize.All]: 12, [GridColumnSize.Md]: 6}}
                    />
                    <PopupItem
                        title="Toloka ↗"
                        description="Data platform for AI training and evaluation"
                        url="#"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        sizes={{[GridColumnSize.All]: 12, [GridColumnSize.Md]: 6}}
                    />
                </Row>
            </Col>
        </Row>
    </Grid>
);
