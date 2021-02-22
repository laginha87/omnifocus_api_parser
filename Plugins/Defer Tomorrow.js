
/*{
    "author": "Author Name",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.mycompany.DeferTomorrow",
    "version": "0.1",
    "description": "A plug-in that...",
    "label": "DeferTomorrow",
    "mediumLabel": "DeferTomorrow",
    "paletteLabel": "DeferTomorrow",
}*/
(() => {
    var action = new PlugIn.Action(/**
         * @param {{ tasks: Task[]; }} selection
         */
function(selection) {
        // Add code to run when the action is invoked
        const today = new Date()
        today.setHours(0,0,0)
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        selection.tasks.forEach((task) => {
            task.deferDate = tomorrow;
        });
    });

    // If needed, uncomment, and add a function that returns true if the current selection is appropriate for the action.

    action.validate = function(selection){
        return selection.tasks.length > 0
    };

    return action;
})();
