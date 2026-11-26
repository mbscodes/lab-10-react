export function getTimeOfDay(hours) {
  if (hours < 12) {
    return 'morning'
  }

  if (hours < 17) {
    return 'afternoon'
  }

  return 'night'
}
