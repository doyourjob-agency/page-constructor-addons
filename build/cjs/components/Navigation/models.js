"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationTagColor = exports.NavigationItemType = exports.AnalyticsEventType = void 0;
var AnalyticsEventType;
(function (AnalyticsEventType) {
    AnalyticsEventType["ItemClick"] = "item-click";
    AnalyticsEventType["PopupItemClick"] = "popup-item-click";
})(AnalyticsEventType = exports.AnalyticsEventType || (exports.AnalyticsEventType = {}));
var NavigationItemType;
(function (NavigationItemType) {
    NavigationItemType["LargePopup"] = "large-popup";
    NavigationItemType["MediumPopup"] = "medium-popup";
    NavigationItemType["MediumPopupWithCategories"] = "medium-popup-with-categories";
    NavigationItemType["MediumPopupWithFloors"] = "medium-popup-with-floors";
    NavigationItemType["Link"] = "link";
})(NavigationItemType = exports.NavigationItemType || (exports.NavigationItemType = {}));
var NavigationTagColor;
(function (NavigationTagColor) {
    NavigationTagColor["Green"] = "green";
    NavigationTagColor["Yellow"] = "yellow";
    NavigationTagColor["Blue"] = "blue";
})(NavigationTagColor = exports.NavigationTagColor || (exports.NavigationTagColor = {}));
