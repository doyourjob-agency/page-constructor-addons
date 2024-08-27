"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const cn_1 = require("../../../../../utils/cn");
const EnrichedLink_1 = require("../../../../EnrichedLink/EnrichedLink");
const b = (0, cn_1.block)('group-links');
const GroupLinks = ({ columnGroup: { title, items }, className }) => {
    return (react_1.default.createElement("div", { className: b(null, className), key: title },
        react_1.default.createElement("ul", { className: b('group') },
            title && react_1.default.createElement("h5", { className: b('group-title') }, title),
            items.map((item) => (react_1.default.createElement("li", { key: item.title, className: b('item-wrapper') },
                react_1.default.createElement(EnrichedLink_1.EnrichedLink, Object.assign({ className: b('item') }, item))))))));
};
exports.default = GroupLinks;
