/*{
    "author": "Author Name",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.mycompany.OpenLink",
    "version": "0.1",
    "description": "A plug-in that...",
    "label": "OpenLink",
    "mediumLabel": "OpenLink",
    "paletteLabel": "OpenLink",
}*/
(() => {
  var action = new PlugIn.Action(
    /**
     * @param {Selection} selection
     */
    function (selection) {
      // TODO add regex to match with url
      const t = selection.tasks[0];
      URL.fromString(t.note.trim()).open();
    }
  );

  // If needed, uncomment, and add a function that returns true if the current selection is appropriate for the action.

  action.validate = function (selection) {
    return selection.tasks.length == 1;
  };

  return action;
})();
