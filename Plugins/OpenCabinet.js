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

  const getProjectName = (/** @type {Project} */ p) => {
    var projectName = p.note.split("\n").find((e) => e.startsWith("cabinet:"));
    if(projectName) {
      return projectName.split(":")[1];
    } else {
      return p.name;
    }
  }
  var action = new PlugIn.Action(/**
     * @param {Selection} selection
     */

    function(selection) {
      var project = selection.projects[0] || selection.tasks[0].containingProject;

      var url = `http://localhost:30123/code?f=/Users/filipecorreia/Dropbox/Cabinet/${project.parentFolder.name}/${getProjectName(project).replace(/\ /g, "+", )}`;
      URL.fromString(url).open();
      });

  /**
   * @param {Selection} s
   */
  action.validate = (s)  => {
    return s.projects.length == 1 || s.tasks.every((e, i, tasks) => i==0 || e.project == tasks[i-1].project);
  }
  return action;
})();
