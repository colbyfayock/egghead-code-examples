/**
 * friendlyDate
 * @description Takes in a date value and returns a friendly version
 */

export function friendlyDate(value) {
  const date = new Date(value);
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(date);
}