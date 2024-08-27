"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonsContainer = exports.ButtonsContainerDirection = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const cn_1 = require("../../../../utils/cn");
var ButtonsContainerDirection;
(function (ButtonsContainerDirection) {
    ButtonsContainerDirection["Row"] = "row";
    ButtonsContainerDirection["Column"] = "column";
})(ButtonsContainerDirection = exports.ButtonsContainerDirection || (exports.ButtonsContainerDirection = {}));
const b = (0, cn_1.block)('buttons-container');
const ButtonsContainer = ({ buttons, className, width, direction = ButtonsContainerDirection.Row, children, }) => (react_1.default.createElement("div", { className: b({ direction }, className) }, buttons === null || buttons === void 0 ? void 0 :
    buttons.map((button) => (react_1.default.createElement(page_constructor_1.Button, Object.assign({}, button, { size: "l", className: b('item'), key: button.text, width: width })))),
    children));
exports.ButtonsContainer = ButtonsContainer;
