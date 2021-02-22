/*{
    "author": "Author Name",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.mycompany.SetDuration10m",
    "version": "0.1",
    "description": "A plug-in that...",
    "label": "SetDuration10m",
    "mediumLabel": "SetDuration10m",
    "paletteLabel": "SetDuration10m",
}*/
(() => {
    var action = new PlugIn.Action(function(selection) {
        // Add code to run when the action is invoked

        selection.tasks.forEach((task) => {
            task.estimatedMinutes = 10
        });

    });

    // If needed, uncomment, and add a function that returns true if the current selection is appropriate for the action.

    action.validate = function(selection){
        return selection.tasks.length > 0
    };

    return action;
})();
