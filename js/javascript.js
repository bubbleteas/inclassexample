console.log("JavaScript is loaded");
$( document ).ready(function() {
    console.log("Document is ready");
    $( "#menu" ).click(function() {
        $("#navigation-bar").toggleClass("navigation-bar--hidden");
        $("#content").toggleClass("content--no-navigation");
    });

    //When the FAB is clicked
    $( "#button-card-transition").click(function() {
        //animate button

        // //Animate button when clicked
        // $("#button-card-transition")
        // .addClass("button-click");

        // //Remove the button click class after 
        // //The animation eds
        // setTimeout(function(){
        //     $("#button-card-transition")
        //     .removeClass("button-click");
        // },300);

        console.log("Button Clicked");
        //If the red card is faded out,
        //Fade in red, fade out blue
        if($(".card__red").hasClass("fade-through-out")){
            fadeThrough(
                $(".card__blue"),
                $(".card__red")
            );
            rotateToggle(
                $("#icon-anchor"),
                $("#icon-switch")
            );
        }
        //If the red card is NOT faded out
        //Fade in blue fade out red
        else{    
            fadeThrough(
                $(".card__red"),
                $(".card__blue")
            );
            rotateToggle(
                $("#icon-switch"),
                $("#icon-anchor")
            );
        }
    });

    function fadeThrough(elementFadeOut, elementFadeIn) {
        //Remove the fade in class from the fade-out element
        $(elementFadeOut).removeClass("fade-through-in");
        //Fade-out element
        $(elementFadeOut).addClass("fade-through-out");

        //Remove the fade out class from the fade-in element
        $(elementFadeIn).removeClass("fade-through-out");
        //Add the fade in class to the fade-in
        $(elementFadeIn).addClass("fade-through-in");
    }

    function rotateToggle(elementRotateOut, elementRotateIn) {
        //Remove the rotate in class
        $(elementRotateOut).removeClass("rotate-in");
        //rotate out element
        $(elementRotateOut).addClass("rotate-out");

        //Remove the rotate out class
        $(elementRotateIn).removeClass("rotate-out");
        //Add the rotate in class
        $(elementRotateIn).addClass("rotate-in");
    }

});
