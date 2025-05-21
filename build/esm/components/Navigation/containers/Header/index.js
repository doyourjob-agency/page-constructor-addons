import { __rest } from "tslib";
import React, { Fragment } from 'react';
import { AnalyticsContext, Theme } from '@doyourjob/gravity-ui-page-constructor';
import { DeviceContext } from '../../contexts/device';
import { LocationContext } from '../../contexts/location';
import { MobileContext } from '../../contexts/mobile';
import { ThemeContext } from '../../contexts/theme';
import { Header as HeaderComponent } from './Header';
export const Header = (props) => {
    const { isMobile, theme = Theme.Light, location = {}, analytics = {}, device = {} } = props, rest = __rest(props, ["isMobile", "theme", "location", "analytics", "device"]);
    /* eslint-disable react/jsx-key */
    const context = [
        React.createElement(ThemeContext.Provider, { value: theme }),
        React.createElement(LocationContext.Provider, { value: location }),
        React.createElement(MobileContext.Provider, { value: Boolean(isMobile) }),
        React.createElement(DeviceContext.Provider, { value: device }),
        React.createElement(AnalyticsContext.Provider, { value: analytics }),
    ].reduceRight((prev, provider) => React.cloneElement(provider, {}, prev), React.createElement(HeaderComponent, Object.assign({}, rest)));
    /* eslint-enable react/jsx-key */
    return React.createElement(Fragment, null, context);
};
