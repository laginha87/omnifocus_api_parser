/*{
    "author": "Author Name",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.mycompany.WatchSomething",
    "version": "0.1",
    "description": "A plug-in that...",
    "label": "WatchSomething",
    "mediumLabel": "WatchSomething",
    "paletteLabel": "WatchSomething",
}*/
(() => {
var action = new PlugIn.Action(/**
     * @param {Selection} selection
     */
function(selection) {
    let task = tagNamed("Watch").remainingTasks[0]
    URL.fromString(task.note.trim()).open();
    document.windows[0].selectObjects([task]);
  });

  return action;
})();
