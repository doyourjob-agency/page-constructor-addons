"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const registerKeyset_1 = require("../../../../../utils/registerKeyset");
const en_json_1 = tslib_1.__importDefault(require("./en.json"));
const ru_json_1 = tslib_1.__importDefault(require("./ru.json"));
const COMPONENT = 'SearchFound';
exports.default = (0, registerKeyset_1.registerKeyset)({ en: en_json_1.default, ru: ru_json_1.default }, COMPONENT);
