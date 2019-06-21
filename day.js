// Returns the day of the week for the given date.
function dayName(date) {
  const daysOfTheWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  return daysOfTheWeek[date.getDay()];
}

function greeting(date) {
  return `Hello, world! Happy ${dayName(date)}.`;
}