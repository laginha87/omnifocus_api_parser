/*{
    "author": "Author Name",
    "targets": ["omnifocus"],
    "type": "library",
    "identifier": "com.mycompany.TimeLibrary",
    "version": "1.1",
    "name": "timelibrary"
}*/
(() => {
  const myLibrary = new PlugIn.Library(new Version("1.1"));
  myLibrary.Today = () => {
    const date = new Date();
    date.setHours(0,0,0)
    return date;
  }

  myLibrary.AddDay = (date, days) => {
    const nextDay = new Date(date)
    nextDay.setDate(nextDay.getDate() + days)
    return nextDay;
  }

  myLibrary.Tomorrow = () => {
    const date = myLibrary.Today();
    return myLibrary.AddDay(date, 1);
  }

  myLibrary.SetStartOfWeek = (date) => {
      var day = date.getDay();
      var diff = date.getDate() - day + (day == 0 ? -6:1);
      return new Date(date.setDate(diff));
  }
  return myLibrary;
})();
