var action = new PlugIn.Action(function (selection : Selection) {
    // Add code to run when the action is invoked
    selection.tasks.forEach((task : Task) => {
        task.estimatedMinutes = 60
    });
});

// If needed, uncomment, and add a function that returns true if the current selection is appropriate for the action.

action.validate = function (selection : Selection) {
    return selection.tasks.length > 0
};
