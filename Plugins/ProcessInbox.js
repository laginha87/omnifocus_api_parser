/*{
    "author": "Author Name",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.mycompany.ProccessInbox",
    "version": "0.1",
    "description": "A plug-in that...",
    "label": "ProccessInbox",
    "mediumLabel": "#co->🖥Device - Computer'] #re->📕Read #ca->📁Cabinet #fr->🐸 Frog #mo->☎️Device - Mobile #li->🎧Listen #th->🧠 Think #wa->Watch'],$mx->Mixlab->Office $r->Runtime->Office $gd->Developing Games $p->Personal $a->Omnifocus automation",
    "paletteLabel": "ProccessInbox",
}*/

(() => {
  const pr = new Preferences("youtub");
  const YOUTUBE_API_KEY = pr.read("api_key");
  /**
   * @param {Task} t
   */
  const processYoutube = (t) => {
    if(t.name.match("list=")) {
      let listId = t.name.split("v=")[1].split("list=")[1]
      const req1 = URL.FetchRequest.fromString(
        `https://www.googleapis.com/youtube/v3/playlists?id=${listId}&key=${YOUTUBE_API_KEY}&part=snippet`
        )

        req1.fetch().then((res) => {
          let data = JSON.parse(res.bodyString)
          data.items.forEach((e) => {
            t.name = `Watch youtube ${data.items[0].snippet.title}`
          })
        })

      const req2 =URL.FetchRequest.fromString(
        `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${listId}&key=AIzaSyAjHvYBzTBC-3OOdCPelo3IAu63h5niNt8&part=contentDetails`
        )

      req2.fetch().then((res) => {
          let data = JSON.parse(res.bodyString)
          data.items.forEach((e) => {
            new Task(`https://www.youtube.com/watch?v=${e.contentDetails.videoId}`, t)
          })
        })
      } else {
        let id = t.name.split('v=')[1]
        const req = URL.FetchRequest.fromString(
          `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyAjHvYBzTBC-3OOdCPelo3IAu63h5niNt8&part=snippet,contentDetails`
        )
        req.fetch().then((res) => {
          let data = JSON.parse(res.bodyString)
          var video = data.items[0]
          t.estimatedMinutes = convert_time(video.contentDetails.duration)
          t.note = t.name
          t.name = video.snippet.title
          t.addTag(tagNamed("Watch"))
        })
  }}

  const regexifyFirstElement = (([regex, ...first]) => [new RegExp(`\\${regex}(\\s|$)`), ...first]);
  const tagChanges = [
    ["#co", "🖥Device - Computer"],
    ["#re", "📕Read"],
    ["#ca", "📁Cabinet"],
    ["#fr", "🐸 Frog"],
    ["#mo", "☎️Device - Mobile"],
    ["#li", "🎧Listen"],
    ["#th", "🧠 Think"],
    ["#wa", "Watch"],
  ].map(regexifyFirstElement);
  const projectChanges = [
    ["$mx", "Mixlab", "Office"],
    ["$r", "Runtime", "Office"],
    ["$gd", "Developing Games"],
    ["$p", "Personal"],
    ["$a", "Omnifocus automation"],
  ].map(regexifyFirstElement);

  function convert_time(duration) {
    var a = duration.match(/\d+/g)

    if (
      duration.indexOf('M') >= 0 &&
      duration.indexOf('H') == -1 &&
      duration.indexOf('S') == -1
    ) {
      a = [0, a[0], 0]
    }

    if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1) {
      a = [a[0], 0, a[1]]
    }
    if (
      duration.indexOf('H') >= 0 &&
      duration.indexOf('M') == -1 &&
      duration.indexOf('S') == -1
    ) {
      a = [a[0], 0, 0]
    }

    duration = 0

    if (a.length == 3) {
      duration = duration + parseInt(a[0]) * 3600
      duration = duration + parseInt(a[1]) * 60
      duration = duration + parseInt(a[2])
    }

    if (a.length == 2) {
      duration = duration + parseInt(a[0]) * 60
      duration = duration + parseInt(a[1])
    }

    if (a.length == 1) {
      duration = duration + parseInt(a[0])
    }
    return duration / 60
  }
  /**
   * @param {Task} t
   */

   const assignProject = (t, key, projectName, tags=[]) =>{
    t.name = t.name.replace(key, "").trim()
    t.assignedContainer = projectsMatching(projectName)[0]
    tags.forEach((e) => {
      t.addTag(tagNamed(e))
    })
  }

  /**
   * @param {Task} t
   */
  const processItem = (t) => {

    projectChanges.forEach(([regex, project, ...tags]) => {
      if(t.name.match(regex)) {
        assignProject(t, regex, project, tags)
      }
    })
    tagChanges.forEach(([regex, tag]) => {
      if(t.name.match(regex)) {
        t.name = t.name.replace(regex, "").trim()
        t.addTag(tagNamed(tag))
      }
    })
    if (t.name.match('youtube')) {
      processYoutube(t)
    }
  }
  var action = new PlugIn.Action
  /**
   * @param {Selection} selection
   */(function (selection) {
    inbox.apply(processItem)
    cleanUp()
  })

  return action
})()
