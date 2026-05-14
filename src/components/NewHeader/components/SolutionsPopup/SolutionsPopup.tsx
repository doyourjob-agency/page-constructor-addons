import React from 'react';

import {Col, Grid, GridColumnSize, Row} from '@doyourjob/gravity-ui-page-constructor';

import {block} from '../../../../utils/cn';
import {SolutionsPopupData} from '../../models';
import {PopupItem} from '../PopupItem/PopupItem';

import './SolutionsPopup.scss';

const b = block('solutions-popup');

export const SolutionsPopup = (props: SolutionsPopupData) => (
    <Grid className={b()} containerClass={b('container')}>
        <Row>
            <Col className={b('wrap')}>
                <Row>
                    <Col className={b('head')}>
                        <div className={b('title')}>by industry</div>
                        <div className={b('subtitle')}>
                            AI solutions tailored to industry-specific workflows and requirements
                        </div>
                    </Col>
                </Row>
                <Row>
                    <PopupItem
                        title="AI Orchestration"
                        url=""
                        description="Schedule job using Soperator, Skypilot, Ray or your own solution"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        hover
                        sizes={{
                            [GridColumnSize.Md]: 4,
                            [GridColumnSize.All]: 12,
                        }}
                    />
                    <PopupItem
                        title="AI Orchestration"
                        url=""
                        description="Schedule job using Soperator, Skypilot, Ray or your own solution"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        hover
                        sizes={{
                            [GridColumnSize.Md]: 4,
                            [GridColumnSize.All]: 12,
                        }}
                    />
                    <PopupItem
                        title="AI Orchestration"
                        url=""
                        description="Schedule job using Soperator, Skypilot, Ray or your own solution"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        hover
                        sizes={{
                            [GridColumnSize.Md]: 4,
                            [GridColumnSize.All]: 12,
                        }}
                    />
                    <PopupItem
                        title="AI Orchestration"
                        url=""
                        description="Schedule job using Soperator, Skypilot, Ray or your own solution"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        hover
                        sizes={{
                            [GridColumnSize.Md]: 4,
                            [GridColumnSize.All]: 12,
                        }}
                    />
                    <PopupItem
                        title="AI Orchestration"
                        url=""
                        description="Schedule job using Soperator, Skypilot, Ray or your own solution"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        hover
                        sizes={{
                            [GridColumnSize.Md]: 4,
                            [GridColumnSize.All]: 12,
                        }}
                    />
                </Row>
            </Col>
        </Row>
        <Row>
            <Col className={b('wrap')}>
                <Row>
                    <Col className={b('head')}>
                        <div className={b('title')}>by use case</div>
                        <div className={b('subtitle')}>
                            End-to-end AI capabilities across the ML and generative AI lifecycle
                        </div>
                    </Col>
                </Row>
                <Row>
                    <PopupItem
                        title="AI Orchestration"
                        url=""
                        description="Schedule job using Soperator, Skypilot, Ray or your own solution"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        hover
                        sizes={{
                            [GridColumnSize.Md]: 4,
                            [GridColumnSize.All]: 12,
                        }}
                    />
                    <PopupItem
                        title="AI Orchestration"
                        url=""
                        description="Schedule job using Soperator, Skypilot, Ray or your own solution"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        hover
                        sizes={{
                            [GridColumnSize.Md]: 4,
                            [GridColumnSize.All]: 12,
                        }}
                    />
                    <PopupItem
                        title="AI Orchestration"
                        url=""
                        description="Schedule job using Soperator, Skypilot, Ray or your own solution"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        hover
                        sizes={{
                            [GridColumnSize.Md]: 4,
                            [GridColumnSize.All]: 12,
                        }}
                    />
                    <PopupItem
                        title="AI Orchestration"
                        url=""
                        description="Schedule job using Soperator, Skypilot, Ray or your own solution"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        hover
                        sizes={{
                            [GridColumnSize.Md]: 4,
                            [GridColumnSize.All]: 12,
                        }}
                    />
                    <PopupItem
                        title="AI Orchestration"
                        url=""
                        description="Schedule job using Soperator, Skypilot, Ray or your own solution"
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        hover
                        sizes={{
                            [GridColumnSize.Md]: 4,
                            [GridColumnSize.All]: 12,
                        }}
                    />
                </Row>
            </Col>
        </Row>
        <Row>
            <Col className={b('wrap')}>
                <Row>
                    <Col className={b('head')}>
                        <div className={b('title')}>by workload</div>
                        <div className={b('subtitle')}>AI solutions for your workload stage</div>
                    </Col>
                </Row>
                <Row>
                    <PopupItem
                        title="AI Orchestration"
                        url=""
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        hover
                        sizes={{
                            [GridColumnSize.Md]: 3,
                            [GridColumnSize.All]: 12,
                        }}
                    />
                    <PopupItem
                        title="AI Orchestration"
                        url=""
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        hover
                        sizes={{
                            [GridColumnSize.Md]: 3,
                            [GridColumnSize.All]: 12,
                        }}
                    />
                    <PopupItem
                        title="AI Orchestration"
                        url=""
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        hover
                        sizes={{
                            [GridColumnSize.Md]: 3,
                            [GridColumnSize.All]: 12,
                        }}
                    />
                    <PopupItem
                        title="AI Orchestration"
                        url=""
                        image="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy44MDUyIDUuNTY0MTdDOC43MjUzOCAxMC40NDk5IDIuNDUxNTQgMTkuODc2OSAyLjAyMzUxIDMwLjgwNTJIMTcuODA1MlY1LjU2NDE3Wk0yLjAxMDc0IDMyLjgwNTJDMi4zMDMwNCA0My44OTg4IDguNjE3NjQgNTMuNDkyMSAxNy44MDUyIDU4LjQzNThWMzIuODA1MkgyLjAxMDc0Wk0xOS44MDUyIDU5LjQxNzdDMjMuNTMxMiA2MS4wNzc1IDI3LjY1NzkgNjIgMzIuMDAwMSA2MkM0OC4yOTk1IDYyIDYxLjU2MjggNDkuMDAxNSA2MS45ODk1IDMyLjgwNTJIMTkuODA1MlY1OS40MTc3Wk02MS45NzY4IDMwLjgwNTJDNjEuMzQ5NSAxNC43OTA1IDQ4LjE2ODUgMiAzMi4wMDAxIDJDMjcuNjU3OSAyIDIzLjUzMTIgMi45MjI1MyAxOS44MDUyIDQuNTgyMjhWMzAuODA1Mkg2MS45NzY4WiIgZmlsbD0iIzg0ODg5NCIvPgo8L3N2Zz4K"
                        hover
                        sizes={{
                            [GridColumnSize.Md]: 3,
                            [GridColumnSize.All]: 12,
                        }}
                    />
                </Row>
            </Col>
        </Row>
    </Grid>
);
