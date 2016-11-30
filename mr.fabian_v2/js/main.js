//apperar image-logo
window.onload=function(){
    var image = document.getElementById("image-logo");
    var i = 0,
    display_arr = ["block","none"],
    time_arr = [27000,5000]; //76s - block, 5.5s - none
    function show()
        {  i ^= 1;
           image.style.display = display_arr[i];
            setTimeout(show,time_arr[i]);
        }
    show();
}

// google maps
function initMap() {
    var uluru = {lat: 49.838278, lng: 24.032292};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru,
        scrollwheel:  false
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
};