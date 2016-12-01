
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
      }

