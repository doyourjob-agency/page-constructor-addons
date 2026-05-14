import React from 'react';

import {Col, Grid, GridColumnSize, Row} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {InvestorPopupData} from '../../models';
import {PopupItem} from '../PopupItem/PopupItem';

import './InvestorPopup.scss';

const b = block('investor-popup');

export const InvestorPopup = (props: InvestorPopupData) => (
    <Grid className={b()} containerClass={b('container')}>
        <div className={b('wrap')}>
            <Row>
                <Col>
                    <div className={b('title')}>Investor hub →</div>
                    <div className={b('subtitle')}>
                        Information about Nebius Group for shareholders, potential investors, and
                        financial analysts
                    </div>
                </Col>
            </Row>
            <Row>
                <PopupItem
                    title="Company"
                    url="#"
                    image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                    sizes={{[GridColumnSize.All]: 12, [GridColumnSize.Md]: 6}}
                />
                <PopupItem
                    title="Newsroom"
                    url="#"
                    image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                    sizes={{[GridColumnSize.All]: 12, [GridColumnSize.Md]: 6}}
                />
                <PopupItem
                    title="Trust center"
                    url="#"
                    image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                    sizes={{[GridColumnSize.All]: 12, [GridColumnSize.Md]: 6}}
                />
                <PopupItem
                    title="Careers"
                    url="#"
                    image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                    sizes={{[GridColumnSize.All]: 12, [GridColumnSize.Md]: 6}}
                />
                <PopupItem
                    title="Contacts"
                    url="#"
                    image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                    sizes={{[GridColumnSize.All]: 12, [GridColumnSize.Md]: 6}}
                />
            </Row>
        </div>
        <div className={b('card')}>
            <div className={b('card-title')}>NASDAQ: Nebius Group 3.51 (2.99 %)</div>
            <div className={b('card-wrap')}>
                <div className={b('card-price')}>$120.91</div>
                <div className={b('card-date')}>Last update: Apr 8, 2026</div>
            </div>
        </div>
    </Grid>
);
