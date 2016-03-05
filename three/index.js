$(document).ready(function () {
        console.log("ready");


        $('section#welcome-overlay nav#welcome-close').click(function () {
            console.log("clicked close");
            $('section#welcome-overlay').css('visibility', 'hidden');
        });

        $('nav#top-nav ul li#share a').click(function () {
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


            return false;
        }

    }) //end