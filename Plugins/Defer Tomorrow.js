
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
        var plugin = PlugIn.find("com.mycompany.TimeLibrary");
        var dateLibrary = plugin.library("TimeLibrary");
        // Add code to run when the action is invoked
        selection.tasks.forEach((task) => {
            task.deferDate = dateLibrary.Tomorrow();
        });
    });

    // If needed, uncomment, and add a function that returns true if the current selection is appropriate for the action.

    action.validate = function(selection){
        return selection.tasks.length > 0
    };

    return action;
})();
