"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = void 0;
exports.isEmail = (s) => {
    if (!s)
        return;
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s);
};
