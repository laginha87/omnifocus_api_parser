import { Tomorrow } from "../Lib/time";

var action = new PlugIn.Action(
    function (selection : Selection) {
        // Add code to run when the action is invoked
        selection.tasks.forEach((task) => {
            task.deferDate = Tomorrow();
        });
    });

// If needed, uncomment, and add a function that returns true if the current selection is appropriate for the action.

action.validate = function (selection : Selection) {
    return selection.tasks.length > 0
};
