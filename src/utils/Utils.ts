/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * returns a promise that resolves after specified time
 * @param time in milliseconds
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

/**
 * returns month and day
 *
 * @export
 * @param {Date} date
 * @returns
 */
export function getShortDateString(date: Date) {
  const month = date.getMonth();
  const day = date.getDate();

  return `${getMonthString(month)} ${day}`;
}

/**
 * returns month string based on number
 *
 * @export
 * @param {number} month
 * @returns {string}
 */
export function getMonthString(month: number): string {
  switch (month) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'September';
    case 9:
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'December';
    default:
      return 'Month';
  }
}

/**
 * returns day of week string based on number
 * where 0 === Sunday
 *
 * @export
 * @param {number} day
 * @returns {string}
 */
export function getDayOfWeekString(day: number): string {
  switch (day) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return 'Day';
  }
}
/**
 * retrieve the days in the month provided by number
 *
 * @export
 * @param {number} monthNum
 * @returns {number}
 */
export function getDaysInMonth(monthNum: number): number {
  switch (monthNum) {
    case 1:
      return 28;

    case 3:
    case 5:
    case 8:
    case 10:
    default:
      return 30;

    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      return 31;
  }
}
/**
 * returns serialized date from month number and year number
 *
 * @export
 * @param {number} month
 * @param {number} year
 * @returns
 */
export function getDateFromMonthYear(month: number, year: number) {
  const yearStr = year + '';

  let monthStr = month + '';
  if (monthStr.length < 2) {
    monthStr = '0' + monthStr;
  }

  return new Date(`${yearStr}-${monthStr}-1T12:00:00-${new Date().getTimezoneOffset() / 60}`);
}
/**
 * ensures one call at a time
 *
 * @export
 * @param {*} func
 * @param {*} time
 * @returns
 */
export function debounce(func, time) {
  let timeout;

  return function() {
    const functionCall = () => func.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
}
