$(document).ready(function () {
    console.log("ready");

    alert("Hello! What you will be seeing and using is just a prototype, so some links and functions may not work just yet. Thank you for taking the time to test our website!");


    $('.contact-nav, nav#top-nav ul li.universe a').click(function () {
        alert("This function is not ready yet. Sorry for the inconvenience :( ");
    });
    //geoLocation
    function getLocation() {
        var location = document.getElementById("location");

        if (!navigator.geolocation) {
            console.log("geolocation not supported by browser");
            return;
        }

        function success(position) {
            //var latitude = position.coords.latitude;
            //var longitude = position.coords.longitude;
            console.log("location tracked");
            $('section#welcome-overlay').css('visibility', 'hidden');
        }

        function error() {
            console.log("error");
        };
        navigator.geolocation.getCurrentPosition(success, error);
    }

    //clicked yes-location
    $('section#welcome-overlay ul#share-location li a#yes-location').click(function () {
        console.log("clicked location button");
        getLocation();
    });

    //clicked no-enter
    $('section#welcome-overlay ul#share-location li a#no-enter').click(function () {
        $('section#welcome-overlay').css('visibility', 'hidden');
    });

    //about overlay
    $('nav#top-nav ul li a.info-nav').click(function () {
        $('section#about-overlay').css('visibility', 'visible');
        return false;
    });

    //about overlay close
    $('section#about-overlay #about-close a').click(function () {
        $('section#about-overlay').css('visibility', 'hidden');
    });

    //share overlay
    $('nav#top-nav ul li#share a').click(function () {
        //console.log("clicked share button");
        $('section#share-overlay').css('visibility', 'visible');
    });



    //share overlay close
    $('#share-overlay nav#share-close a, #share-overlay form#share-form input[type="submit"]').click(function () {
        console.log("clicked close");
        $('section#share-overlay').css('visibility', 'hidden');
    });

    //share story form
    document.share.onsubmit = processForm;

    function processForm() {
        var title = document.share.title.value;
        return false;
    }

    //map
    var mymap = L.map('mapid', {
        zoomControl: false
    }).setView([38.5538, -121.7381], 14);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        maxZoom: 18,
        id: 'tiffachoi.pbn9d7d4',
        accessToken: 'pk.eyJ1IjoidGlmZmFjaG9pIiwiYSI6ImNpbGphMGc4NTRiNmZ1dG0wMG5zMzFsMWIifQ.M8zCDPQqnFfczyJc79VMDQ'
    }).addTo(mymap);

    new L.Control.Zoom({
        position: 'bottomleft'
    }).addTo(mymap);

    //define marker icons 
    var raceIcon = L.icon({
        iconUrl: 'images/icon-race.png',
        iconSize: [30, 30]
    });

    var genderIcon = L.icon({
        iconUrl: 'images/icon-gender.png',
        iconSize: [30, 30]
    });

    var sexualityIcon = L.icon({
        iconUrl: 'images/icon-sexuality.png',
        iconSize: [30, 30]
    });

    var classIcon = L.icon({
        iconUrl: 'images/icon-class.png',
        iconSize: [30, 30]
    });

    //place marker icons on map
    L.marker([38.551, -121.7389], {
        icon: raceIcon
    }).bindPopup("This is a story about race... ").addTo(mymap);


    L.marker([38.54, -121.75], {
        icon: genderIcon
    }).bindPopup("This is a story about gender...").addTo(mymap);

    L.marker([38.537, -121.732], {
        icon: sexualityIcon
    }).bindPopup("This is a story about sexuality...").addTo(mymap);

    L.marker([38.552, -121.695], {
        icon: classIcon,
    }).bindPopup("This is a story about social classes...").addTo(mymap);


}); //end