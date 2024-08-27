"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsCurrentPage = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useIsCurrentPage = (url) => {
    const [isCurrentPage, setIsCurrentPage] = react_1.default.useState(false);
    (0, react_1.useEffect)(() => {
        setIsCurrentPage(Boolean(url && location.href.includes(url)));
    }, [url]);
    return isCurrentPage;
};
exports.useIsCurrentPage = useIsCurrentPage;
