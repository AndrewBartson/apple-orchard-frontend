function getAllSpeciesSites() {
  axios.get('http://localhost:8000/speciesSites')
  .then(function(response) {
    // Don't remove - need to view speciesSites
    console.log('SpeciesSites - ', response.data);
    $('#message_sp_s').html('<div class="green">All Trees returned</div>')
    $('#form_sp_s')[0].reset();
  })
  .catch(function(response) {
    $('#form_sp_s')[0].reset();
    $('#message_sp_s').html('<div class="red">Error - Did not work</div>')
  });
}
function getSpeciesSiteById(id) {
  axios.get('http://localhost:8000/speciesSites/' + id)
  .then(function(response) {
    let {id, name, date_planted, end_date, site_id, species_id, variety_id} = response.data;
    $('#sp_s_name').val(name);
    $('#date_planted').val(date_planted);
    $('#end_date').val(end_date);
    $('#site_id_sp_s').val(site_id);
    $('#species_id_sp_s').val(species_id);
    $('#variety_id_sp_s').val(variety_id);
    $('#message_sp_s').html('<div class="green">Tree was found</div>')
  })
  .catch(function(response) {
    $('#form_sp_s')[0].reset();
    $('#message_sp_s').html('<div class="red">Error - Tree was not found</div>')
  });
}
function createSpeciesSite(data) {
  axios.post('http://localhost:8000/speciesSites', data)
  .then(function(response) {
    let {id} = response.data;
    $('#next_sp_s_id').val(id)
    $('#message_sp_s').html('<div class="green">Tree was created</div>');
  })
  .catch(function(response) {
    $('#message_sp_s').html('<div class="red">Error - Tree was not created</div>')
  });
}

function updateSpeciesSite(id, data) {
  axios.patch('http://localhost:8000/speciesSites/' + id, data)
  .then(function(response) {
    $('#message_sp_s').html('<div class="green">Tree was updated</div>')
  })
  .catch(function(response) {
      $('#message_sp_s').html('<div class="red">Error - Tree was not updated</div>')
  });
}
function deleteSpeciesSite(id) {
  axios.delete('http://localhost:8000/speciesSites/' + id)
  .then(function(response) {
    $('#message_sp_s').html('<div class="green">Tree was deleted</div>')
  })
  .catch(function(response) {
    $('#message_sp_s').html('<div class="red">Error - Tree was not deleted</div>')
  });
}
