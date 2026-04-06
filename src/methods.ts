// ------------------------------------------------------------------------------------------------
import {
  EMPTY_STRING,
  EMPTY_SPACES_EXPRESSION,
  NUMERIC_EXPRESSION,
  ZERO,
} from './const';
// ------------------------------------------------------------------------------------------------
type date = number | Date | undefined;
type time_unit = Intl.RelativeTimeFormatUnit;
type time_format = Intl.DateTimeFormatOptions['dateStyle'];
type currency_unit = 'MXN' | 'USD' | 'EUR';
// ------------------------------------------------------------------------------------------------
const LOCALE_TIME_ZONE = 'es-mx';
// ------------------------------------------------------------------------------------------------
export function trim(text: string) {
  return text.replace(EMPTY_SPACES_EXPRESSION, EMPTY_STRING);
}
// ------------------------------------------------------------------------------------------------
export function compare(text: string, target: string): boolean {
  return text === target;
}
// ------------------------------------------------------------------------------------------------
export function isEmpty(text: string): boolean {
  return compare(text, EMPTY_STRING);
}
// ------------------------------------------------------------------------------------------------
export function notEmpty(text: string): boolean {
  return !isEmpty(text);
}
// ------------------------------------------------------------------------------------------------
export function assertRegExp(value: string, expression: RegExp) {
  return new RegExp(expression).test(value);
}
// ------------------------------------------------------------------------------------------------
export function isNumber(value: number | string) {
  return assertRegExp(String(value), NUMERIC_EXPRESSION);
}
// ------------------------------------------------------------------------------------------------
export function isNegative(value: number) {
  return value < ZERO;
}
// ------------------------------------------------------------------------------------------------
export function isPositive(value: number) {
  return !isNegative(value);
}
// ------------------------------------------------------------------------------------------------
export function toRelativeTime(value: number, unit: time_unit = 'day') {
  return new Intl.RelativeTimeFormat(LOCALE_TIME_ZONE, {
    style: 'long',
    numeric: 'auto',
  }).format(value, unit);
}
// ------------------------------------------------------------------------------------------------
export function toCurrency(value: number, currency: currency_unit = 'MXN') {
  return Intl.NumberFormat(LOCALE_TIME_ZONE, {
    style: 'currency',
    currency,
  }).format(value);
}
// ------------------------------------------------------------------------------------------------
export function formatDate(date: date = ZERO, dateStyle: time_format) {
  return Intl.DateTimeFormat(LOCALE_TIME_ZONE, {
    dateStyle,
  }).format(new Date(date));
}
// ------------------------------------------------------------------------------------------------
export function toFullDate(date: date = ZERO) {
  return formatDate(date, 'full');
}
// ------------------------------------------------------------------------------------------------
export function toLongDate(date: date = ZERO) {
  return formatDate(date, 'long');
}
// ------------------------------------------------------------------------------------------------
export function toMediumDate(date: date = ZERO) {
  return formatDate(date, 'medium');
}
// ------------------------------------------------------------------------------------------------
export function toShortDate(date: date = ZERO) {
  return formatDate(date, 'short');
}
// ------------------------------------------------------------------------------------------------
export function hasElements(collection: any[]) {
  return collection.length > ZERO;
}
// ------------------------------------------------------------------------------------------------
