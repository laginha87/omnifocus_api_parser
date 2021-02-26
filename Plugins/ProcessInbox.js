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
;(() => {
  /**
   * @param {Task} t
   */
  const processYoutube = (t) => {
    if(t.name.match("list=")) {
      let listId = t.name.split("v=")[1].split("list=")[1]
      const req1 = URL.FetchRequest.fromString(
        `https://www.googleapis.com/youtube/v3/playlists?id=${listId}&key=AIzaSyAjHvYBzTBC-3OOdCPelo3IAu63h5niNt8&part=snippet`
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
      })
    }
  }
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

  const assignProject = (t, key, projectName, tags = []) => {
    t.name = t.name.replace(key, '')
    t.assignedContainer = projectsMatching(projectName)[0]
    tags.forEach((e) => {
      t.addTag(tagsMatching(e)[0])
    })
  }

  const processItem = (t) => {
    if (t.name.match(/\$mx/)) {
      assignProject(t, '$mx', 'Mixlab', ['🏢Geo - Office'])
    }

    if (t.name.match(/\$r/)) {
      assignProject(t, '$r', 'Runtime', ['🏢Geo - Office'])
    }

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
