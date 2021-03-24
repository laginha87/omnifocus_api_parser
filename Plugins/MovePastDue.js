/*{
    "author": "Author Name",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.mycompany.MovePastDue",
    "version": "0.1",
    "description": "A plug-in that...",
    "label": "MovePastDue",
    "mediumLabel": "MovePastDue",
    "paletteLabel": "MovePastDue",
}*/
(() => {
  var action = new PlugIn.Action(
    /**
     * @param {Selection} selection
     */
    function (selection) {
      var plugin = PlugIn.find("com.mycompany.TimeLibrary");
      var dateLibrary = plugin.library("TimeLibrary");

      flattenedTasks.filter((e) => e.taskStatus === Task.Status.Overdue).forEach((e) => {
        var date = dateLibrary.Today();
        date.setHours(18,0,0);
        if(date < new Date()) {
          date = dateLibrary.AddDay(date, 1);
        }
        e.dueDate = date;
      })
    }
  );
  return action;
})();
