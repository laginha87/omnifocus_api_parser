/*{
    "author": "Author Name",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.mycompany.SplitOut",
    "version": "0.1",
    "description": "A plug-in that...",
    "label": "SplitOut",
    "mediumLabel": "SplitOut",
    "paletteLabel": "SplitOut",
}*/
(() => {
  const incDate = (date) => {
    const tomorrow = new Date(date)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow;
  }
  var action = new PlugIn.Action(/**
     * @param {Selection} selection
     */
function(selection) {
      // Add code to run when the action is invoked
      const tasksPerDay = Math.floor(selection.tasks.length / 5);
      let today = new Date()
      today.setHours(0,0,0)
      selection.tasks.forEach((task, index) => {
          task.dueDate = today;
          if(index % tasksPerDay === 0 ) {
            today = incDate(today);
          }
      });

  });

  // If needed, uncomment, and add a function that returns true if the current selection is appropriate for the action.

  action.validate = function(selection){
      return selection.tasks.length > 0
  };

  return action;
})();
