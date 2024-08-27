"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const debounce_1 = tslib_1.__importDefault(require("lodash/debounce"));
const useIsIPhone_1 = require("../../../../../../hooks/useIsIPhone");
const cn_1 = require("../../../../../../utils/cn");
const i18n_1 = tslib_1.__importDefault(require("./i18n"));
const b = (0, cn_1.block)('large-popup-search');
const Search = (props) => {
    const { className, initialValue, onSubmit, debounce: debounceTime = 300, placeholder = (0, i18n_1.default)('search'), size = 'm', autoFocus = false, value: externalValue, customSearchIcon, } = props;
    const [value, setValue] = (0, react_1.useState)(initialValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onChangeDebounce = (0, react_1.useCallback)((0, debounce_1.default)(onSubmit, debounceTime), []);
    const inputRef = (0, react_1.useRef)(null);
    const isIPhone = (0, useIsIPhone_1.useIsIPhone)();
    (0, react_1.useEffect)(() => {
        if (externalValue !== undefined) {
            setValue(externalValue);
        }
    }, [externalValue]);
    (0, react_1.useEffect)(() => {
        if (autoFocus && !isIPhone) {
            setTimeout(() => { var _a; return (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true }); }, 0);
        }
    }, [autoFocus, inputRef, isIPhone]);
    return (react_1.default.createElement("div", { className: b({ size }, className) },
        react_1.default.createElement("div", { className: b('search-suggest-container'), "data-qa": "search-suggest-container" },
            react_1.default.createElement(uikit_1.TextInput, { value: value, onUpdate: (query) => {
                    setValue(query);
                    onChangeDebounce(query);
                }, placeholder: placeholder, className: b('search-suggest'), size: size === 'm' ? 'xl' : 'l', controlRef: inputRef })),
        value ? (react_1.default.createElement(uikit_1.Button, { className: b('close-button'), size: "xs", onClick: () => {
                onChangeDebounce.cancel();
                setValue('');
                onSubmit('');
            }, view: "flat", extraProps: { 'aria-label': (0, i18n_1.default)('clear-button-label') } },
            react_1.default.createElement(uikit_1.Icon, { data: icons_1.Xmark, size: 18 }))) : (react_1.default.createElement(uikit_1.Button, { className: b('search-button'), size: "xs", disabled: true, onClick: () => {
                onChangeDebounce.cancel();
                setValue('');
                onSubmit('');
            }, view: "flat", extraProps: { 'aria-label': (0, i18n_1.default)('search-button-label') } },
            react_1.default.createElement(uikit_1.Icon, { data: customSearchIcon || icons_1.Magnifier, size: 16 })))));
};
exports.default = Search;
