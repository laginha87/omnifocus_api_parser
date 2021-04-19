

var action = new PlugIn.Action(
  function (selection: Selection) {
    const pr = new Preferences("youtub");
    const YOUTUBE_API_KEY = pr.read("api_key");
    const form = new Form();
    const yt = new Form.Field.String(
      "yt",
      "Youtube API Key",
      YOUTUBE_API_KEY
    );
    form.addField(yt, 0);
    form.show("Preferences", "Confirm Preferences").then(({ values }) => {
      pr.write("api_key", values.yt);
    });

  }
);