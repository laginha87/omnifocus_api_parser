var action = new PlugIn.Action(
  function (selection : Selection) {
    // TODO add regex to match with url
    const t = selection.tasks[0];
    URL.fromString(t.note.trim()).open();
  }
);

// If needed, uncomment, and add a function that returns true if the current selection is appropriate for the action.

action.validate = function (selection : Selection) {
  return selection.tasks.length == 1;
};
