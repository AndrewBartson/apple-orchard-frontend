function initMap() {
  map = new google.maps.Map(document.getElementById('map_'), {
    center: {lat: 37.76425, lng: -122.03665},
    zoom: 19,
    mapTypeId: 'satellite',
    streetViewControl: false,
    mapTypeControl: false,
    draggableCursor: 'default'
  });
  setMarkers(map, trees);
} /* end of initMap() */


function setMarkers(map, trees) {

  /* initialize variables */
  var lat_lng = {"lng": 0, "lat": 0};
  var tree_id, species, species_cap, variety, start_date, section, row, icon_1;  // notes not implemented
  // tree data is an array with length = 1
  for (var tree in trees) {
    for (var i = 0; i < trees[tree].length; i++) {
      for (key2 in trees[tree][i]) {
        // 1) extract all necessary data for this tree and put in variables
        // also put everything in object - cur_tree
        for (key3 in trees[tree][i][key2]) {
          let cur_tree = {};
          var data_point = trees[tree][i][key2][key3];
          tree_id = key2;
          cur_tree.id = key2;
          icon_1 = "images/t_1.png";
          cur_tree.icon = icon_1;
          if (key3 === "location") {
            lat_lng.lng = data_point.lng;
            lat_lng.lat = data_point.lat;
            cur_tree.lng = data_point.lng;
            cur_tree.lat = data_point.lat;
          }
          else if (key3 === "species") {

            species_cap = capitalizeFirstLetter(data_point);
            cur_tree.species = species_cap;
          }
          else if (key3 === "variety") {
            variety = data_point;
            cur_tree.variety = variety;
          }
          else if (key3 === "section") {
            section = data_point;
            cur_tree.section = section;
          }
          else if (key3 === "row") {
            row = data_point;
            cur_tree.row = row;
          }
          else if (key3 === "date_planted") {
            start_date = data_point;
            cur_tree.start_date = start_date;
            if (!start_date) {
              start_date = "Unknown";
              cur_tree.start_date = start_date;
            }
          }
          //else if (key3 === "notes") {
          // not implemented yet
          //}
          //else if (key3 === "icon") {
          // not implemented yet
          //}
        }
        // 2) set up a marker, give lat lng
        var marker = new google.maps.Marker({
          map: map,
          position: lat_lng,
          icon: icon_1
        });

        map.addListener('click', function(event) {
          // insert lat/long values from map click into "add tree" input field -
          let form_e = document.querySelector('#form_add_tree');
          form_e.lat.value = event.latLng.lat();
          form_e.long.value = event.latLng.lng();

        });

        // 3) create html content for infoWindow
        var content = ("<span><h3>" + species_cap + " - " + variety + "</h3>" +
        "<p>Tree ID - " + key2 + "</p>" +
        "<p>Section - " + section + "</p>" +
        "<p>Row - " + row + "</p>" +
        "<p>Date planted - " + start_date + "</p>" +
        "<p>Notes - </p></span>");
        // 4) load content into infoWindow
        var infowindow = new google.maps.InfoWindow()
        // 5) attach an event listener to each marker
        google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
          return function () {
            /* close previous info-window */
            closeInfos();
            infowindow.setContent(content);
            infowindow.open(map, marker);
            /* keep the handle, to close it on next click event */
            infos[0] = infowindow;

          };
        })(marker, content, infowindow));
      }
    }
  } // end of looping
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function closeInfos() {
  if (infos.length > 0) {
    /* detach info-window from marker */
    infos[0].set("marker", null);
    /* and close it */
    infos[0].close();
    /* blank the array */
    infos.length = 0;
  }
}
