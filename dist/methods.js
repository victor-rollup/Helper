"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trim = trim;
exports.compare = compare;
exports.isEmpty = isEmpty;
exports.notEmpty = notEmpty;
exports.assertRegExp = assertRegExp;
exports.isNumber = isNumber;
exports.isNegative = isNegative;
exports.isPositive = isPositive;
exports.toRelativeTime = toRelativeTime;
exports.toCurrency = toCurrency;
exports.formatDate = formatDate;
exports.toFullDate = toFullDate;
exports.toLongDate = toLongDate;
exports.toMediumDate = toMediumDate;
exports.toShortDate = toShortDate;
// ------------------------------------------------------------------------------------------------
const const_1 = require("./const");
// ------------------------------------------------------------------------------------------------
const LOCALE_TIME_ZONE = 'es-mx';
// ------------------------------------------------------------------------------------------------
function trim(text) {
    return text.replace(const_1.EMPTY_SPACES_EXPRESSION, const_1.EMPTY_STRING);
}
// ------------------------------------------------------------------------------------------------
function compare(text, target) {
    return text === target;
}
// ------------------------------------------------------------------------------------------------
function isEmpty(text) {
    return compare(text, const_1.EMPTY_STRING);
}
// ------------------------------------------------------------------------------------------------
function notEmpty(text) {
    return !isEmpty(text);
}
// ------------------------------------------------------------------------------------------------
function assertRegExp(value, expression) {
    return new RegExp(expression).test(value);
}
// ------------------------------------------------------------------------------------------------
function isNumber(value) {
    return assertRegExp(String(value), const_1.NUMERIC_EXPRESSION);
}
// ------------------------------------------------------------------------------------------------
function isNegative(value) {
    return value < const_1.ZERO;
}
// ------------------------------------------------------------------------------------------------
function isPositive(value) {
    return !isNegative(value);
}
// ------------------------------------------------------------------------------------------------
function toRelativeTime(value, unit = 'day') {
    return new Intl.RelativeTimeFormat(LOCALE_TIME_ZONE, {
        style: 'long',
        numeric: 'auto',
    }).format(value, unit);
}
// ------------------------------------------------------------------------------------------------
function toCurrency(value, currency = 'MXN') {
    return Intl.NumberFormat(LOCALE_TIME_ZONE, {
        style: 'currency',
        currency,
    }).format(value);
}
// ------------------------------------------------------------------------------------------------
function formatDate(date = const_1.DEFAULT_DATE, dateStyle) {
    return Intl.DateTimeFormat(LOCALE_TIME_ZONE, {
        dateStyle,
    }).format(date);
}
// ------------------------------------------------------------------------------------------------
function toFullDate(date = const_1.DEFAULT_DATE) {
    return formatDate(date, 'full');
}
// ------------------------------------------------------------------------------------------------
function toLongDate(date = const_1.DEFAULT_DATE) {
    return formatDate(date, 'long');
}
// ------------------------------------------------------------------------------------------------
function toMediumDate(date = const_1.DEFAULT_DATE) {
    return formatDate(date, 'medium');
}
// ------------------------------------------------------------------------------------------------
function toShortDate(date = const_1.DEFAULT_DATE) {
    return formatDate(date, 'short');
}
// ------------------------------------------------------------------------------------------------
