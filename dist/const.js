"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMPTY_SPACES_EXPRESSION = exports.NUMERIC_EXPRESSION = exports.NULL = exports.TRUE = exports.FALSE = exports.EMPTY_OBJECT = exports.EMPTY_STRING = exports.EMPTY_ARRAY = exports.ZERO = exports.DEFAULT_DATE = void 0;
// ------------------------------------------------------------------------------------------------
exports.DEFAULT_DATE = new Date();
exports.ZERO = Number();
exports.EMPTY_ARRAY = Array();
exports.EMPTY_STRING = String();
exports.EMPTY_OBJECT = Object();
exports.FALSE = Boolean();
exports.TRUE = !exports.FALSE;
exports.NULL = null;
exports.NUMERIC_EXPRESSION = /^[0-9]*$/;
exports.EMPTY_SPACES_EXPRESSION = /\s/g;
// ------------------------------------------------------------------------------------------------
