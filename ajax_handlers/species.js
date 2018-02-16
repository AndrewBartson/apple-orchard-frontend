function getAllSpecies() {
  axios.get('http://localhost:8000/species')
  .then(function(response) {
    // Don't remove - need to view species
    console.log('Species - ', response.data);
    $('#message_sp').html('<div class="green">All species returned</div>')
    $('#form_sp')[0].reset();
  })
  .catch(function(response) {
    $('#form_sp')[0].reset();
    $('#message_sp').html('<div class="red">Error - Did not work</div>')
  });
}
function getSpeciesById(id) {
  axios.get('http://localhost:8000/species/' + id)
  .then(function(response) {
    let {id, common_name, genus, species_name} = response.data;
    $('#common_name').val(common_name);
    $('#genus').val(genus);
    $('#species_name').val(species_name);
    $('#message_sp').html('<div class="green">Species was found</div>')
  })
  .catch(function(response) {
    $('#form_sp')[0].reset();
    $('#message_sp').html('<div class="red">Error - Species was not found</div>')
  });
}
function createSpecies(data) {
  axios.post('http://localhost:8000/species', data)
  .then(function(response) {
    let {id} = response.data;
    $('#next_sp_id').val(id)
    $('#message_sp').html('<div class="green">Species was created</div>');
  })
  .catch(function(response) {
    $('#message_sp').html('<div class="red">Error - Species was not created</div>')
  });
}

function updateSpecies(id, data) {
  axios.patch('http://localhost:8000/species/' + id, data)
  .then(function(response) {
    $('#message_sp').html('<div class="green">Species was updated</div>')
  })
  .catch(function(response) {
      $('#message_sp').html('<div class="red">Error - Species was not updated</div>')
  });
}
function deleteSpecies(id) {
  axios.delete('http://localhost:8000/species/' + id)
  .then(function(response) {
    $('#message_sp').html('<div class="green">Species was deleted</div>')
  })
  .catch(function(response) {
    $('#message_sp').html('<div class="red">Error - Species was not deleted</div>')
  });
}
