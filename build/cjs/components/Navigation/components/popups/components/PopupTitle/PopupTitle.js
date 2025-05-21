"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupTitle = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const gravity_ui_page_constructor_1 = require("@doyourjob/gravity-ui-page-constructor");
const PopupTitle = ({ title, url, className }) => {
    const titleProps = (0, react_1.useMemo)(() => {
        return title
            ? {
                text: title,
                textSize: 'xs',
                url: url,
            }
            : undefined;
    }, [title, url]);
    return react_1.default.createElement(gravity_ui_page_constructor_1.Title, { title: titleProps, className: className });
};
exports.PopupTitle = PopupTitle;
