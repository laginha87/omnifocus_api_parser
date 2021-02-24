/*{
    "author": "Author Name",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.mycompany.DeferWork",
    "version": "0.1",
    "description": "A plug-in that...",
    "label": "DeferWork",
    "mediumLabel": "DeferWork",
    "paletteLabel": "DeferWork",
}*/
(() => {
  var action = new PlugIn.Action(/**
     * @param {Selection} selection
     */

    function(selection) {
      const today = new Date()
      today.setHours(0,0,0)
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)

      tagsMatching("Geo - Office")[0].projects.filter((t) => !t.completed).forEach(
        /**
       * @param {Project} t
       */
        (t) => {
        t.deferDate = tomorrow
      })
      });

  return action;
})();
