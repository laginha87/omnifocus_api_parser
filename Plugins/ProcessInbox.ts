/*{
    "mediumLabel": "#co->🖥Device - Computer'] #re->📕Read #ca->📁Cabinet #fr->🐸 Frog #mo->☎️Device - Mobile #li->🎧Listen #th->🧠 Think #wa->Watch'],$mx->Mixlab->Office $r->Runtime->Office $gd->Developing Games $p->Personal $a->Omnifocus automation",
}*/

const HTTP_REGEX = /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/

// TODO extract to lib
const getParams = (url) => {
  const [_base, queryString] = url.split("?");
  return queryString.split("&").map((e) => e.split("=")).reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {})
}
const pr = new Preferences("youtub");
const YOUTUBE_API_KEY = pr.read("api_key");)
const processYoutube = (t : Task) => {
  var url = t.name.match(HTTP_REGEX)[0];
  const params = getParams(url);
  if (params.list) {
    var listId = params.list
    const req1 = URL.FetchRequest.fromString(
      `https://www.googleapis.com/youtube/v3/playlists?id=${listId}&key=${YOUTUBE_API_KEY}&part=snippet`
    )

    req1.fetch().then((res) => {
      let data = JSON.parse(res.bodyString)
      console.log(res.bodyString);
      data.items.forEach((e) => {
        t.name = `Watch youtube ${data.items[0].snippet.title}`
      }).catch((e) => {
        console.error(e);
      })
    })

    const req2 = URL.FetchRequest.fromString(
      `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${listId}&key=${YOUTUBE_API_KEY}&part=contentDetails&maxResults=50`
    )

    req2.fetch().then((res) => {
      let data = JSON.parse(res.bodyString)
      console.log(data);
      data.items.forEach((e) => {
        new Task(`https://www.youtube.com/watch?v=${e.contentDetails.videoId}`, t)
      })
    }).catch((e) => {console.error(e)})
  } else {
    let id = params.v
    const req = URL.FetchRequest.fromString(
      `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${YOUTUBE_API_KEY}&part=snippet,contentDetails`
    )
    req.fetch().then((res) => {
      let data = JSON.parse(res.bodyString)
      var video = data.items[0]
      t.estimatedMinutes = convert_time(video.contentDetails.duration)
      t.note = t.name
      t.name = video.snippet.title
      t.addTag(tagNamed("Watch"))
    })
  }
}

const processBlog = (t : Task) => {
  var url = t.name.match(HTTP_REGEX)[0];
  t.note = url;
  URL.FetchRequest.fromString(url).fetch().then((res) => {
    var title = res.bodyString.match(/<title.*>(.*)<\/title>/)[1]
    t.name = title;
    var readtimeExp = res.bodyString.match(/(\d*) min read/)
    if (!readtimeExp) {
      readtimeExp = res.bodyString.match(/(\d*) Mins/)
    }
    t.estimatedMinutes = parseInt(readtimeExp[1]);
  });
}
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
  ["$mx", "Mixlab", "🏢Geo - Office"],
  ["$r", "Runtime", "🏢Geo - Office"],
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

const assignProject = (t : Task, key : string, projectName : string, tags = []) => {
  t.name = t.name.replace(key, "").trim()
  t.assignedContainer = projectsMatching(projectName)[0]

  tags.forEach((e) => {
    t.addTag(tagNamed(e))
  })
}

const processItem = (t : Task) => {

  projectChanges.forEach(([regex, project, ...tags]) => {
    if (t.name.match(regex)) {
      assignProject(t, regex, project, tags)
    }
  })
  tagChanges.forEach(([regex, tag]) => {
    if (t.name.match(regex)) {
      t.name = t.name.replace(regex, "").trim()
      t.addTag(tagNamed(tag))
    }
  })
  if (t.name.match('youtube')) {
    processYoutube(t)
  }

  if (t.tags.some((e) => e.name === "📕Read")) {
    processBlog(t);
  }
}
var action = new PlugIn.Action
  (function (selection : Action) {
  inbox.apply(processItem)
  cleanUp()
})
