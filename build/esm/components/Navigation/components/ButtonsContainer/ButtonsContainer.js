import React from 'react';
import { Button as PCButton } from '@doyourjob/gravity-ui-page-constructor';
import { block } from '../../../../utils/cn';
import './ButtonsContainer.css';
export var ButtonsContainerDirection;
(function (ButtonsContainerDirection) {
    ButtonsContainerDirection["Row"] = "row";
    ButtonsContainerDirection["Column"] = "column";
})(ButtonsContainerDirection || (ButtonsContainerDirection = {}));
const b = block('buttons-container');
export const ButtonsContainer = ({ buttons, className, width, direction = ButtonsContainerDirection.Row, children, }) => (React.createElement("div", { className: b({ direction }, className) }, buttons === null || buttons === void 0 ? void 0 :
    buttons.map((button) => (React.createElement(PCButton, Object.assign({}, button, { size: "l", className: b('item'), key: button.text, width: width })))),
    children));
