function getAllVarieties() {
  axios.get('http://localhost:8000/varieties')
  .then(function(response) {
    // Don't remove - need to view varieties
    console.log('Varieties - ', response.data);
    $('#message_var').html('<div class="green">All varieties returned</div>')
    $('#form_var')[0].reset();
  })
  .catch(function(response) {
    $('#form_var')[0].reset();
    $('#message_var').html('<div class="red">Error - Did not work</div>')
  });
}
function getVarietyById(id) {
  axios.get('http://localhost:8000/varieties/' + id)
  .then(function(response) {
    let {id, name, species_id} = response.data;
    $('#variety_name').val(name);
    $('#species_id_var').val(species_id);
    $('#message_var').html('<div class="green">Variety was found</div>')
  })
  .catch(function(response) {
    $('#form_var')[0].reset();
    $('#message_var').html('<div class="red">Error - Variety was not found</div>')
  });
}
function createVariety(data) {
  axios.post('http://localhost:8000/varieties', data)
  .then(function(response) {
    let {id} = response.data;
    $('#next_variety_id').val(id)
    $('#message_var').html('<div class="green">Variety was created</div>');
  })
  .catch(function(response) {
    $('#message_var').html('<div class="red">Error - Variety was not created</div>')
  });
}

function updateVariety(id, data) {
  axios.patch('http://localhost:8000/varieties/' + id, data)
  .then(function(response) {
    $('#message_var').html('<div class="green">Variety was updated</div>')
  })
  .catch(function(response) {
      $('#message_var').html('<div class="red">Error - Variety was not updated</div>')
  });
}
function deleteVariety(id) {
  axios.delete('http://localhost:8000/varieties/' + id)
  .then(function(response) {
    $('#message_var').html('<div class="green">Variety was deleted</div>')
  })
  .catch(function(response) {
    $('#message_var').html('<div class="red">Error - Variety was not deleted</div>')
  });
}
