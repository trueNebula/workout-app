import { DateTime } from "luxon";

/**
 * Parses JS Date, DateTime or iso string to luxon DateTime
 *
 * @param date
 * @param format
 * @returns DateTime
 */
export const getDateTime = (
  date: Date | DateTime | string,
  format?: string
): DateTime => {
  if (DateTime.isDateTime(date)) {
    return date;
  }

  if (date instanceof Date) {
    return DateTime.fromJSDate(date);
  }

  if (format) {
    return DateTime.fromFormat(date, format);
  }

  return DateTime.fromISO(date, { setZone: true });
};

/**
 * Parses an iso string or luxon DateTime to JS Date
 *
 * @param date
 * @returns JS Date
 */
export const getJSDate = (date: DateTime | string): Date => {
  if (DateTime.isDateTime(date)) {
    return date.toJSDate();
  }
  return getDateTime(date).toJSDate();
};

/**
 * Parses a JS Date or luxon DateTIme to iso string
 *
 * Returns an empty string if no date is provided
 *
 * @param date
 * @returns Iso Date
 */
export const getIsoDate = (date: Date | DateTime | undefined): string => {
  if (!date) return "";
  if (date instanceof Date) {
    return date.toISOString();
  }
  return date.toISO() || "";
};

/**
 * Prepares a date for DB operations
 *
 * @param date
 * @returns DB Date
 */
export const prepDBDate = (date: Date | DateTime | string): Date => {
  if (date instanceof Date) {
    return date;
  }

  return getJSDate(date);
};
