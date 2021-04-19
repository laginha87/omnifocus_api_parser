import { AddDay, Today } from "../Lib/time";

var action = new PlugIn.Action(
  function (selection : Selection) {
    flattenedTasks.filter((e) => e.taskStatus === Task.Status.Overdue).forEach((e) => {
      var date = Today();
      date.setHours(18, 0, 0);
      if (date < new Date()) {
        date = AddDay(date, 1);
      }
      e.dueDate = date;
    })
  }
);