/*{
    "author": "Author Name",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.mycompany.Test",
    "version": "0.1",
    "description": "A plug-in that...",
    "label": "Test",
    "mediumLabel": "Test",
    "paletteLabel": "Test",
}*/
(() => {
    var action = new PlugIn.Action(/**
         * @param {Selection} selection
         */
        function(selection) {
        // Add code to run when the action is invoked

    });

    // If needed, uncomment, and add a function that returns true if the current selection is appropriate for the action.
    /*
    action.validate = function(selection){

    };
    */
    return action;
})();
