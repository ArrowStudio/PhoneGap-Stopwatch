// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    var time = 0;
    var isRunning = false;
    var currentUpdateId;

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

        $("#stopstart").click(function () {

            if (isRunning)
            {
                //stop stopwatch
                clearInterval(currentUpdateId);
                isRunning = false;
                $(this).text("Reset / Start");
                time = 0;
            }
            else
            {
                //start stopwatch
                currentUpdateId = setInterval(updateTimer, 1);
                isRunning = true;
                $(this).text("Stop");
            }
            

        });

    };

    function updateTimer() {

        time++;
        $("#timer").text(time / 100);
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();