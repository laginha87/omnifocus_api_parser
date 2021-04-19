const incDate = (date) => {
  const tomorrow = new Date(date)
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow;
}

var action = new PlugIn.Action(
  function (selection : Selection) {
    // Add code to run when the action is invoked
    const tasksPerDay = Math.floor(selection.tasks.length / 5);
    let today = new Date()
    today.setHours(0, 0, 0)
    selection.tasks.forEach((task, index) => {
      task.dueDate = today;
      if (index % tasksPerDay === 0) {
        today = incDate(today);
      }
    });

  });

// If needed, uncomment, and add a function that returns true if the current selection is appropriate for the action.

action.validate = function (selection : Selection) {
  return selection.tasks.length > 0
};
