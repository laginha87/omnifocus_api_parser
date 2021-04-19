var action = new PlugIn.Action(
  function (selection : Selection) {
    const form = new Form();
    const fields = [
      ["breakfast", "07:30"],
      ["morning", "10:00"],
      ["lunch", "12:00"],
      ["afternoon", "14:30"],
      ["afternoon 2", "16:00"],
      ["dinner", "18:30"],
    ];
    fields.forEach(([key, time], i) => {
      const timeField = new Form.Field.String(
        key + "Time",
        key.toLocaleUpperCase() + " Time",
        time
      );

      const mealField = new Form.Field.String(
        key + "Meal",
        key.toLocaleUpperCase() + " Meal",
        ''
      );


      form.addField(timeField, i);
      form.addField(mealField, i);
    })

    form.show("Meal Plan of the day", "Set it").then(({ values }) => {
      const project = Project.byIdentifier("nZoP99Mqvef");
      fields.forEach(([key,]) => {
        const task = new Task(key + ": " + values[key + "Meal"], project);
        const date = new Date();
        const [hours, mins] = values[key + "Time"].split(":");
        date.setHours(hours, mins);
        task.dueDate = date;
      })
    });

  }
);