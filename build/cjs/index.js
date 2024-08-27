"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./components"), exports);
//i18n setup
var configure_1 = require("./utils/configure");
Object.defineProperty(exports, "configure", { enumerable: true, get: function () { return configure_1.configure; } });
