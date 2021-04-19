export const Today = () => {
  const date = new Date();
  date.setHours(0, 0, 0)
  return date;
}

export const AddDay = (date, days) => {
  const nextDay = new Date(date)
  nextDay.setDate(nextDay.getDate() + days)
  return nextDay;
}

export const Tomorrow = () => {
  const date = Today();
  return AddDay(date, 1);
}

export const SetStartOfWeek = (date) => {
  var day = date.getDay();
  var diff = date.getDate() - day + (day == 0 ? -6 : 1);
  return new Date(date.setDate(diff));
}