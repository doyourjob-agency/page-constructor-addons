"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const device_1 = require("../../contexts/device");
const location_1 = require("../../contexts/location");
const mobile_1 = require("../../contexts/mobile");
const theme_1 = require("../../contexts/theme");
const Header_1 = require("./Header");
const Header = (props) => {
    const { isMobile, theme = page_constructor_1.Theme.Light, location = {}, analytics = {}, device = {} } = props, rest = tslib_1.__rest(props, ["isMobile", "theme", "location", "analytics", "device"]);
    /* eslint-disable react/jsx-key */
    const context = [
        react_1.default.createElement(theme_1.ThemeContext.Provider, { value: theme }),
        react_1.default.createElement(location_1.LocationContext.Provider, { value: location }),
        react_1.default.createElement(mobile_1.MobileContext.Provider, { value: Boolean(isMobile) }),
        react_1.default.createElement(device_1.DeviceContext.Provider, { value: device }),
        react_1.default.createElement(page_constructor_1.AnalyticsContext.Provider, { value: analytics }),
    ].reduceRight((prev, provider) => react_1.default.cloneElement(provider, {}, prev), react_1.default.createElement(Header_1.Header, Object.assign({}, rest)));
    /* eslint-enable react/jsx-key */
    return react_1.default.createElement(react_1.Fragment, null, context);
};
exports.Header = Header;
