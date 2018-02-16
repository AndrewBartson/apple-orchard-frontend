document.addEventListener("DOMContentLoaded", function() {

  // Dynamic dropdown menu for selecting species and
  // varieties related to that species
  $("#species_tab_add").change(function() {
    var $dropdown = $(this);
    $.getJSON("../jsondata/species_varieties.json", function(data) {
      var key = $dropdown.val();
      var vals = [];
      switch(key) {
        case 'apple':
        vals = data.apple.split(",");
        break;
        case 'plum':
        vals = data.plum.split(",");
        break;
        case 'persimmon':
        vals = data.persimmon.split(",");
        break;
        case 'other':
        vals = data.other.split(",");
        break;
        case 'base':
        vals = ['Please choose from above'];
      }
      var $variety_tab_add = $("#variety_tab_add");
      $variety_tab_add.empty();
      $.each(vals, function(index, value) {
        $variety_tab_add.append("<option>" + value + "</option>");
      });
    });
  });

  $("#species_tab_edit").change(function() {
    var $dropdown = $(this);
    $.getJSON("../jsondata/species_varieties.json", function(data) {
      var key = $dropdown.val();
      var vals = [];
      switch(key) {
        case 'apple':
        vals = data.apple.split(",");
        break;
        case 'plum':
        vals = data.plum.split(",");
        break;
        case 'persimmon':
        vals = data.persimmon.split(",");
        break;
        case 'other':
        vals = data.other.split(",");
        break;
        case 'base':
        vals = ['Please choose from above'];
      }
      var $variety_tab_edit = $("#variety_tab_edit");
      $variety_tab_edit.empty();
      $.each(vals, function(index, value) {
        $variety_tab_edit.append("<option>" + value + "</option>");
      });
    });
  });

  //------ "Go to Data Editor" button - hide map and sidebar, show editor -----

  $("#show_editor").click(function(){
    $("#map_").toggle();
    $("#side_bar_").toggle();
    $("#data_editor").toggle();
  });

  //------ "Return to Map" button - hide editor, show map and sidebar -----

  $("#goBack").click(function(){
    $("#map_").toggle();
    google.maps.event.trigger(map, 'resize');
    $("#side_bar_").toggle();
    $("#data_editor").toggle();
  });

  // changes the active tab in sidebar menu
  $('#tabs-1').removeClass('ui-state-active');
  $( function() {
    $( "#tabs" ).tabs();
  } );
  // attempt to have both tabs inactive (not blue) when page loads - doesn't work
  // $('#first_tab').removeClass('ui-state-active');
});
