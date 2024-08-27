"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileNavigationPopup = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const page_constructor_1 = require("@gravity-ui/page-constructor");
const uikit_1 = require("@gravity-ui/uikit");
const react_dom_1 = tslib_1.__importDefault(require("react-dom"));
const react_transition_group_1 = require("react-transition-group");
const cn_1 = require("../../../../../utils/cn");
const b = (0, cn_1.block)('mobile-navigation-popup');
const TRANSITION_TIME = 400;
const POPUP_MARGIN = 80;
const HEADER_HEIGHT = 68;
const MobileNavigationPopup = ({ isOpened, onClose, children, onMenuScroll, }) => {
    const [body, setBody] = (0, react_1.useState)();
    const ref = (0, react_1.useRef)(null);
    const [containerHeight, setContainerHeight] = (0, react_1.useState)(0);
    const handleScroll = (0, react_1.useCallback)(() => {
        var _a;
        const containerScrollTop = (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.scrollTop;
        if (typeof containerScrollTop !== 'undefined') {
            onMenuScroll(containerScrollTop);
        }
    }, [onMenuScroll]);
    (0, uikit_1.useBodyScrollLock)({ enabled: isOpened });
    (0, react_1.useEffect)(() => {
        setBody(document.body);
        setContainerHeight((window === null || window === void 0 ? void 0 : window.innerHeight) - POPUP_MARGIN - HEADER_HEIGHT);
        const element = ref.current;
        if (element) {
            element.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (element) {
                element.removeEventListener('scroll', handleScroll);
            }
        };
    }, [handleScroll, isOpened]);
    if (!body) {
        return null;
    }
    return react_dom_1.default.createPortal(react_1.default.createElement(react_transition_group_1.CSSTransition, { in: isOpened, classNames: b('transition'), unmountOnExit: true, timeout: TRANSITION_TIME },
        react_1.default.createElement(page_constructor_1.OutsideClick, { className: b(), onOutsideClick: onClose },
            react_1.default.createElement("div", { ref: ref, className: b('container'), style: { maxHeight: `${containerHeight}px` } }, children))), body);
};
exports.MobileNavigationPopup = MobileNavigationPopup;
