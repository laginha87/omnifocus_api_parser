/*{
    "author": "Author Name",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.mycompany.ProccessInbox",
    "version": "0.1",
    "description": "A plug-in that...",
    "label": "ProccessInbox",
    "mediumLabel": "ProccessInbox",
    "paletteLabel": "ProccessInbox",
}*/
(() => {

  function convert_time(duration) {
    var a = duration.match(/\d+/g);

    if (duration.indexOf('M') >= 0 && duration.indexOf('H') == -1 && duration.indexOf('S') == -1) {
        a = [0, a[0], 0];
    }

    if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1) {
        a = [a[0], 0, a[1]];
    }
    if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1 && duration.indexOf('S') == -1) {
        a = [a[0], 0, 0];
    }

    duration = 0;

    if (a.length == 3) {
        duration = duration + parseInt(a[0]) * 3600;
        duration = duration + parseInt(a[1]) * 60;
        duration = duration + parseInt(a[2]);
    }

    if (a.length == 2) {
        duration = duration + parseInt(a[0]) * 60;
        duration = duration + parseInt(a[1]);
    }

    if (a.length == 1) {
        duration = duration + parseInt(a[0]);
    }
    return duration / 60
}
  /**
   * @param {Task} t
   */

   const assignProject = (t, key, projectName, tags=[]) =>{
    t.name = t.name.replace(key, "")
    t.assignedContainer = projectsMatching(projectName)[0]
    tags.forEach((e) => {
      t.addTag(tagsMatching(e)[0])
    })
   }

  const processItem = (t) => {
    if(t.name.match(/\$mx/)) {
      assignProject(t, "$mx", "Mixlab", ["🏢Geo - Office"])
    }

    if(t.name.match(/\$r/)) {
      assignProject(t, "$r", "Runtime", ["🏢Geo - Office"])
    }

    if(t.name.match("youtube")) {
        let id = t.name.split("v=")[1]
        const req = URL.FetchRequest.fromString(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=$YOUTUBE_API_KEY&part=snippet,contentDetails`)
        req.fetch().then((res) => {
          let data =JSON.parse(res.bodyString);
          var video = data.items[0];
          t.estimatedMinutes =  convert_time(video.contentDetails.duration)
          t.note = t.name
          t.name = video.snippet.title
        });
    }

  }
  var action = new PlugIn.Action(/**
     * @param {Selection} selection
     */
    function(selection) {
        inbox.forEach(processItem)
        cleanUp()
      });

  return action;
})();
