/*{
    "author": "Author Name",
    "targets": ["omnifocus"],
    "type": "library",
    "identifier": "com.mycompany.TimeLibrary",
    "version": "1.0",
    "name": "timelibrary"
}*/
(() => {
  const myLibrary = new PlugIn.Library(new Version("1.0"));
  myLibrary.today = () => {
    const date = new Date();
    date.setHours(0,0,0)
    return date;
  }

  myLibrary.addDay = (date, days) => {
    const nextDay = new Date(date)
    nextDay.setDate(nextDay.getDate() + days)
    return nextDay;
  }

  myLibrary.tomorrow = () => {
    const date = myLibrary.today();
    return myLibrary.addDay(date, 1);
  }

  myLibrary.setStartOfWeek = (date) => {
      var day = date.getDay();
      var diff = date.getDate() - day + (day == 0 ? -6:1);
      return new Date(date.setDate(diff));
  }
  return myLibrary;
})();
