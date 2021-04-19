var action = new PlugIn.Action(
  function (selection : Selection) {
    const today = new Date()
    today.setHours(0, 0, 0)
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    tagsMatching("Geo - Office")[0].projects.filter((p) => !p.completed).forEach(
      (p) => {
        p.deferDate = tomorrow
      })
  });
