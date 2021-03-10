/*{
    "author": "Author Name",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.mycompany.ConfigurePreferences",
    "version": "0.1",
    "description": "A plug-in that...",
    "label": "ConfigurePreferences",
    "mediumLabel": "ConfigurePreferences",
    "paletteLabel": "ConfigurePreferences",
}*/
(() => {
  var action = new PlugIn.Action(
    /**
     * @param {Selection} selection
     */
    function (selection) {
      const pr = new Preferences("youtub");
      const YOUTUBE_API_KEY = pr.read("api_key");
      const form = new Form();
      const yt = new Form.Field.String(
        "yt",
        "Youtube API Key",
        YOUTUBE_API_KEY
      );

      form.addField(yt, 0);
      form.show("Preferences", "Confirm Preferences").then(({values}) => {
        pr.write("api_key", values.yt);
      });

    }
  );

  return action;
})();
