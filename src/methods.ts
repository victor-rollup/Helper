// ------------------------------------------------------------------------------------------------
import {
  DEFAULT_DATE,
  EMPTY_SPACES_EXPRESSION,
  EMPTY_STRING,
  NUMERIC_EXPRESSION,
  ZERO,
} from './const';
// ------------------------------------------------------------------------------------------------
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
export function formatDate(date: Date = DEFAULT_DATE, dateStyle: time_format) {
  return Intl.DateTimeFormat(LOCALE_TIME_ZONE, {
    dateStyle,
  }).format(date);
}
// ------------------------------------------------------------------------------------------------
export function toFullDate(date: Date = DEFAULT_DATE) {
  return formatDate(date, 'full');
}
// ------------------------------------------------------------------------------------------------
export function toLongDate(date: Date = DEFAULT_DATE) {
  return formatDate(date, 'long');
}
// ------------------------------------------------------------------------------------------------
export function toMediumDate(date: Date = DEFAULT_DATE) {
  return formatDate(date, 'medium');
}
// ------------------------------------------------------------------------------------------------
export function toShortDate(date: Date = DEFAULT_DATE) {
  return formatDate(date, 'short');
}
// ------------------------------------------------------------------------------------------------
export function hasElements(collection: any[]) {
  return collection.length > ZERO;
}
// ------------------------------------------------------------------------------------------------
