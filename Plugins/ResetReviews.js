/*{
    "author": "Author Name",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.mycompany.ResetReviews",
    "version": "0.1",
    "description": "A plug-in that...",
    "label": "ResetReviews",
    "mediumLabel": "ResetReviews",
    "paletteLabel": "ResetReviews",
}*/
(() => {
  var action = new PlugIn.Action
  /**
   * @param {Selection} selection
   */(function (selection) {
    var plugin = PlugIn.find("com.mycompany.TimeLibrary");
    var dateLibrary = plugin.library("TimeLibrary");

    flattenedProjects.filter((e) => e.status === Project.Status.Active).forEach((e) => {
      e.nextReviewDate = dateLibrary.setStartOfWeek(e.nextReviewDate);
    });
  });

  return action;
})();
