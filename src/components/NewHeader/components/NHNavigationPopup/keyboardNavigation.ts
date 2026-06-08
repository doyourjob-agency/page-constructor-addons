export const keyboardFocusAttribute = 'data-keyboard-focus';

export const focusableElementSelector = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
].join(',');

const keyboardFocusSelector = `[${keyboardFocusAttribute}='true']`;
const blurHandlers = new WeakMap<HTMLElement, () => void>();

const clearKeyboardFocus = (root: ParentNode) => {
    root.querySelectorAll<HTMLElement>(keyboardFocusSelector).forEach((element) => {
        const blurHandler = blurHandlers.get(element);

        if (blurHandler) {
            element.removeEventListener('blur', blurHandler);
            blurHandlers.delete(element);
        }

        element.removeAttribute(keyboardFocusAttribute);
    });
};

export const getFocusableElements = (root?: HTMLElement | null) =>
    Array.from(root?.querySelectorAll<HTMLElement>(focusableElementSelector) || []);

export const focusFromKeyboard = (element?: HTMLElement | null, root?: ParentNode | null) => {
    if (!element) {
        return;
    }

    const focusRoot = root || element.ownerDocument;
    const handleBlur = () => {
        element.removeAttribute(keyboardFocusAttribute);
        element.removeEventListener('blur', handleBlur);
        blurHandlers.delete(element);
    };

    clearKeyboardFocus(focusRoot);
    element.setAttribute(keyboardFocusAttribute, 'true');
    element.addEventListener('blur', handleBlur);
    blurHandlers.set(element, handleBlur);
    element.focus({preventScroll: true});
};
