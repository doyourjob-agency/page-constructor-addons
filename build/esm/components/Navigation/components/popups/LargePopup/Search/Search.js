import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Magnifier, Xmark } from '@gravity-ui/icons';
import { Button, Icon, TextInput } from '@gravity-ui/uikit';
import debounce from 'lodash/debounce';
import { useIsIPhone } from '../../../../../../hooks/useIsIPhone';
import { block } from '../../../../../../utils/cn';
import i18n from './i18n';
import './Search.css';
const b = block('large-popup-search');
const Search = (props) => {
    const { className, initialValue, onSubmit, debounce: debounceTime = 300, placeholder = i18n('search'), size = 'm', autoFocus = false, value: externalValue, customSearchIcon, } = props;
    const [value, setValue] = useState(initialValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onChangeDebounce = useCallback(debounce(onSubmit, debounceTime), []);
    const inputRef = useRef(null);
    const isIPhone = useIsIPhone();
    useEffect(() => {
        if (externalValue !== undefined) {
            setValue(externalValue);
        }
    }, [externalValue]);
    useEffect(() => {
        if (autoFocus && !isIPhone) {
            setTimeout(() => { var _a; return (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true }); }, 0);
        }
    }, [autoFocus, inputRef, isIPhone]);
    return (React.createElement("div", { className: b({ size }, className) },
        React.createElement("div", { className: b('search-suggest-container'), "data-qa": "search-suggest-container" },
            React.createElement(TextInput, { value: value, onUpdate: (query) => {
                    setValue(query);
                    onChangeDebounce(query);
                }, placeholder: placeholder, className: b('search-suggest'), size: size === 'm' ? 'xl' : 'l', controlRef: inputRef })),
        value ? (React.createElement(Button, { className: b('close-button'), size: "xs", onClick: () => {
                onChangeDebounce.cancel();
                setValue('');
                onSubmit('');
            }, view: "flat", extraProps: { 'aria-label': i18n('clear-button-label') } },
            React.createElement(Icon, { data: Xmark, size: 18 }))) : (React.createElement(Button, { className: b('search-button'), size: "xs", disabled: true, onClick: () => {
                onChangeDebounce.cancel();
                setValue('');
                onSubmit('');
            }, view: "flat", extraProps: { 'aria-label': i18n('search-button-label') } },
            React.createElement(Icon, { data: customSearchIcon || Magnifier, size: 16 })))));
};
export default Search;
