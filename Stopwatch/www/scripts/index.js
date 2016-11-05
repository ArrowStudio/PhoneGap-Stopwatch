// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    var time = 0; //time
    var lap = 1; //current lap
    var isRunning = false; //is the timer running
    var isPaused = false; //is the app paused
    var currentUpdateId; //current interval id

    function onDeviceReady() {

        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

        $("#stopstart").click(function () {

            if (isRunning)
            {
                //pause timer
                isPaused = true;
                isRunning = false;

                //set button text
                $(this).text("Start");
                $("#lapreset").text("Reset");
            }
            else
            {
                //start stopwatch - if pause continue else new timer
                if (isPaused)
                {
                    isPaused = false;
                }
                else {
                    currentUpdateId = setInterval(updateTimer, 1);
                }

                isRunning = true;

                //update button text
                $(this).text("Stop");
                $("#lapreset").text("Lap");
            }
        });

        $("#lapreset").click(function () {

            //if paused reset else take lap
            if (isPaused)
            {
                //stop stopwatch
                clearInterval(currentUpdateId);
                isRunning = false;
                isPaused = false;

                //update button text
                $(this).text("Lap");
                $("#stopstart").text("Start");

                //reset time
                time = 0;
                $("#timer").text("0.00");

                //reset lap
                lap = 1;
                $("#list-times").html("");
            }
            else {

                //If the app is not paused and the timer is running add a new lap
                if (!isPaused && isRunning) {
                    //register lap
                    $("#list-times").append('<li>Lap ' + lap + ' : ' + time / 100 + ' </li>');
                    lap++;
                }
            }
        });

    };

    function updateTimer() {

        //if the app is not paused increase the timer
        if (!isPaused)
        {
            time++;
            $("#timer").text(time / 100);
        }
        
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();