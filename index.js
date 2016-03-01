$(document).ready(function () {
        console.log("ready");

        //        window.onload = function () {
        //            console.log("reading js");
        //            $('#welcome-overlay').css('left', 'center').animate({
        //                width: '100%',
        //                left: '0'
        //            });
        //            $('section #welcome-overlay').animate({
        //                width: '100%',
        //                left: '0'
        //            });
        //            $('section #welcome-overlay').css('visibility', 'visible');
        //
        //            return false;
        //
        //        }

        $('#share a').click(function () {
            console.log("clicked share button");
            $('section#share-overlay').css('visibility', 'visible');
            return false;
        });

        $('#share-overlay nav#share-close a').click(function () {
            console.log("clicked close");
            $('section#share-overlay').css('visibility', 'hidden');
        });

        //share story form
        document.share.onsubmit = processForm;

        function processForm() {
            var title = document.share.title.value;
            var story = document.share.story.value;

            return false;
        }

    }) //end