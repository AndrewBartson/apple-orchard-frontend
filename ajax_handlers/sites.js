function getAllSites() {
  axios.get('http://localhost:8000/sites')
  .then(function(response) {
    // Don't remove - need to view sites
    console.log('Sites - ', response.data);
    $('#message_site').html('<div class="green">All sites returned</div>')
    $('#form_site')[0].reset();
  })
  .catch(function(response) {
    $('#form_site')[0].reset();
    $('#message_site').html('<div class="red">Error - Did not work</div>')
  });
}
function getSiteById(id) {
  axios.get('http://localhost:8000/sites/' + id)
  .then(function(response) {
    let {id, aspect, lat, lng, site_quality, slope, soil_id} = response.data;
    $('#aspect').val(aspect);
    $('#lat').val(lat);
    $('#lng').val(lng);
    $('#site_quality').val(site_quality);
    $('#slope').val(slope);
    $('#soil_id').val(soil_id);
    $('#message_site').html('<div class="green">Site was found</div>')
  })
  .catch(function(response) {
    $('#form_site')[0].reset();
    $('#message_site').html('<div class="red">Error - Site was not found</div>')
  });
}
function createSite(data) {
  axios.post('http://localhost:8000/sites', data)
  .then(function(response) {
    let {id} = response.data;
    $('#next_site_id').val(id)
    $('#message_site').html('<div class="green">Site was created</div>');
  })
  .catch(function(response) {
    $('#message_site').html('<div class="red">Error - Site was not created</div>')
  });
}

function updateSite(id, data) {
  axios.patch('http://localhost:8000/sites/' + id, data)
  .then(function(response) {
    $('#message_site').html('<div class="green">Site was updated</div>')
  })
  .catch(function(response) {
      $('#message_site').html('<div class="red">Error - Site was not updated</div>')
  });
}
function deleteSite(id) {
  axios.delete('http://localhost:8000/sites/' + id)
  .then(function(response) {
    $('#message_site').html('<div class="green">Site was deleted</div>')
  })
  .catch(function(response) {
    $('#message_site').html('<div class="red">Error - Site was not deleted</div>')
  });
}
