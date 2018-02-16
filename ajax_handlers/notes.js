function getAllNotes() {
  axios.get('http://localhost:8000/notes')
  .then(function(response) {
    // Don't remove - need to view notes
    console.log('Notes - ', response.data);
    $('#message_note').html('<div class="green">All notes returned</div>')
    $('#form_note')[0].reset();
  })
  .catch(function(response) {
    $('#form_note')[0].reset();
    $('#message_note').html('<div class="red">Error - Did not work</div>')
  });
}
function getNoteById(id) {
  axios.get('http://localhost:8000/notes/' + id)
  .then(function(response) {
    let {id, title, content, author_id, species_site_id, site_id, species_id, variety_id} = response.data;
    $('#title').val(title);
    $('#content').val(content);
    $('#author_id').val(author_id);
    $('#species_site_id').val(species_site_id);
    $('#site_id').val(site_id);
    $('#species_id').val(species_id);
    $('#variety_id').val(variety_id)
    $('#message_note').html('<div class="green">Note was found</div>')
  })
  .catch(function(response) {
    $('#form_note')[0].reset();
    $('#message_note').html('<div class="red">Error - Note was not found</div>')
  });
}
function createNote(data) {
  axios.post('http://localhost:8000/notes', data)
  .then(function(response) {

    let {id} = response.data;
    $('#next_note_id').val(id)
    $('#message_note').html('<div class="green">Note was created</div>');
  })
  .catch(function(response) {
    $('#message_note').html('<div class="red">Error - Note was not created</div>')
  });
}

function updateNote(id, data) {
  axios.patch('http://localhost:8000/notes/' + id, data)
  .then(function(response) {
    $('#message_note').html('<div class="green">Note was updated</div>')
  })
  .catch(function(response) {
      $('#message_note').html('<div class="red">Error - Note was not updated</div>')
  });
}
function deleteNote(id) {
  axios.delete('http://localhost:8000/notes/' + id)
  .then(function(response) {
    $('#message_note').html('<div class="green">Note was deleted</div>')
  })
  .catch(function(response) {
    $('#message_note').html('<div class="red">Error - Note was not deleted</div>')
  });
}
