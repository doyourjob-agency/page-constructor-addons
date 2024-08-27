"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerKeyset = void 0;
const i18n_1 = require("../i18n");
function registerKeyset(data, keysetName) {
    Object.entries(data).forEach(([lang, keys]) => i18n_1.i18n.registerKeyset(lang, keysetName, keys));
    return i18n_1.i18n.keyset(keysetName);
}
exports.registerKeyset = registerKeyset;
