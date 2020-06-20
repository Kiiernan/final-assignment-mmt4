// Accordion
$( "#accordion" ).accordion({
    heightStyle: "content"
});

// Darkmode
let dmSwitch = $("#dark-switch");
let dmIndic = $(".mode-indicator");
let body = $("body");

$(document).ready(function() {
    dmSwitch.click(function(){
        if(dmIndic.hasClass("dark-active") && body.hasClass("dark-active") ) {
            dmIndic.removeClass("dark-active") && body.removeClass("dark-active");
        } else {
            dmIndic.addClass("dark-active") && body.addClass("dark-active");
        }
    });
});

// Slider
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});

// Video Buttons
$( document ).ready(function() {

    var clicked = false;

    $('video').each(function(){
        var player = videojs(this.id);
        console.log(this.id);
        $(this).parents('.vid-wrap').find('.toggle').click(function(){

            if(!clicked){
                player.play();
                clicked = true;
                $('body').removeClass('clickedPlay');
                $('body').addClass('clickedPause');
            } else{
                player.pause();
                clicked = false;
                $('body').removeClass('clickedPause');
                $('body').addClass('clickedPlay');
            }

            $('.back').click(function () {
                player.currentTime(player.currentTime() - 10);
            });

            $('.forward').click(function () {
                player.currentTime(player.currentTime() + 10);
            });

            player.on('ended', function() {
                modal.style.display = "block";

                // When the user clicks on <span> (x), close the modal
                span.onclick = function() {
                    modal.style.display = "none";
                }

                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            });
        });
    });
     // Get the modal
     var modal = document.getElementById("myModal");
     
     // Get the <span> element that closes the modal
         var span = document.getElementsByClassName("close")[0];
     
     
         var poggers = {};
         poggers.opacityIn = [0,1];
         poggers.scaleIn = [0.3, 0.9];
         poggers.scaleOut = 2;
         poggers.durationIn = 600;
         poggers.durationOut = 400;
         poggers.delay = 200;
     
         anime.timeline({loop: true})
            .add({
                targets: '.poggers .letters-1',
                opacity: poggers.opacityIn,
                scale: poggers.scaleIn,
                duration: poggers.durationIn
            })
            .add({
                targets: '.poggers .letters-1',
                opacity: 0,
                scale: poggers.scaleOut,
                duration: poggers.durationOut,
                easing: "easeInExpo",
                delay: poggers.delay
            })
            .add({
                targets: '.poggers .letters-2',
                opacity: poggers.opacityIn,
                scale: poggers.scaleIn,
                duration: poggers.durationIn
            })
            .add({
                targets: '.poggers .letters-2',
                opacity: 0,
                scale: poggers.scaleOut,
                duration: poggers.durationOut,
                easing: "easeInExpo",
                delay: poggers.delay
            })
            .add({
                targets: '.poggers .letters-3',
                opacity: poggers.opacityIn,
                scale: poggers.scaleIn,
                duration: poggers.durationIn
            })
            .add({
                targets: '.poggers .letters-3',
                opacity: 0,
                scale: poggers.scaleOut,
                duration: poggers.durationOut,
                easing: "easeInExpo",
                delay: poggers.delay
            })
            .add({
                targets: '.poggers .letters-4',
                opacity: poggers.opacityIn,
                scale: poggers.scaleIn,
                duration: poggers.durationIn
            })
            .add({
                targets: '.poggers .letters-4',
                opacity: 0,
                scale: poggers.scaleOut,
                duration: poggers.durationOut,
                easing: "easeInExpo",
                delay: poggers.delay
            })
            .add({
                targets: '.poggers',
                opacity: 0,
                duration: 200,
                delay: 200
            });
        });