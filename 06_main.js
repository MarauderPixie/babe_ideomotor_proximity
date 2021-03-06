// In this file you initialize and configure your experiment using babeInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls babeInit
    // in debug mode this returns the babe-object, which you can access in the console of your browser
    // e.g. >> window.babe_monitor or window.babe_monitor.findNextView()
    // in all other modes null will be returned
    window.babe_monitor = babeInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
            intro,
            instructions,
            practice,
            begin_prompt,
            experiment,
            post_test,
            thanks,
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "6",
            serverAppURL: "https://babe.tadaa-data.de/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "directLink",
            contact_email: "tanton@uos.de"
            // prolificURL: "https://app.prolific.ac/not_available_yet"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                practice
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
