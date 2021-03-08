/*{
    "author": "Author Name",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.mycompany.OpenCabinet",
    "version": "0.1",
    "description": "A plug-in that...",
    "label": "OpenCabinet",
    "mediumLabel": "OpenCabinet",
    "paletteLabel": "OpenCabinet",
}*/
(() => {
  var action = new PlugIn.Action(/**
     * @param {Selection} selection
     */

    function(selection) {
      var project = selection.projects[0] || selection.tasks[0].containingProject;
      URL.fromString(`http://localhost:30123/code?f=/Users/filipecorreia/Dropbox/Cabinet/${project.parentFolder.name}/${project.name.replace(" ", "+")}`).open();
      });

  /**
   * @param {Selection} s
   */
  action.validate = (s)  => {
    return s.projects.length == 1 || s.tasks.every((e, i, tasks) => i==0 || e.project == tasks[i-1].project);
  }
  return action;
})();
