
const getProjectName = (p : Project) => {
  var projectName = p.note.split("\n").find((e) => e.startsWith("cabinet:"));
  if (projectName) {
    return projectName.split(":")[1];
  } else {
    return p.name;
  }
}
var action = new PlugIn.Action(
  function (selection : Selection) {
    var project = selection.projects[0] || selection.tasks[0].containingProject;

    var url = `http://localhost:30123/code?f=/Users/filipecorreia/Dropbox/Cabinet/${project.parentFolder.name}/${getProjectName(project).replace(/\ /g, "+",)}`;
    URL.fromString(url).open();
  });

action.validate = (s : Selection) => {
  return s.projects.length == 1 || s.tasks.every((e, i, tasks) => i == 0 || e.project == tasks[i - 1].project);
}