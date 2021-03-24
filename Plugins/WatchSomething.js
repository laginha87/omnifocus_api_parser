/*{
    "author": "Author Name",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.mycompany.WatchSomething",
    "version": "0.1",
    "description": "A plug-in that...",
    "label": "WatchSomething",
    "mediumLabel": "WatchSomething",
    "paletteLabel": "WatchSomething",
}*/
;(() => {
  var action = new PlugIn.Action
  /**
   * @param {Selection} selection
   */(function (selection) {
    const form = new Form()
    const watchTag = tagNamed('Watch')
    const tasks = watchTag.remainingTasks
    const tags = [
      ...tasks
        .reduce((acc, e) => {
          e.tags.forEach((e) => acc.add(e))
          return acc
        }, new Set())
        .values()
    ]

    const optionsField = new Form.Field.Option(
      'tag',
      'Which Tag you want to watch?',
      tags,
      tags.map((e) => e.name),
      tags[0]
    )

    form.addField(optionsField)
    form
      .show("Here's what's available", 'Confirm')
      .then(({ values: { tag } }) => {
        const task = tag.remainingTasks.filter((e) =>
          e.tags.some((e) => e == watchTag)
        )[0]
        URL.fromString(task.note.trim()).open()
        document.windows[0].selectObjects([task])
      })
  })

  return action
})()
