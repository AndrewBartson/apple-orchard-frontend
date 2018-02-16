function getAllUsers() {
  axios.get('http://localhost:8000/users')
  .then(function(response) {
    // Don't remove - need to view users
    console.log('Users - ', response.data);
    $('#message_user').html('<div class="green">All users returned</div>')
    $('#form_user')[0].reset();
  })
  .catch(function(response) {
    $('#form_user')[0].reset();
    $('#message_user').html('<div class="red">Error - Did not work</div>')
  });
}
function getUserById(id) {
  axios.get('http://localhost:8000/users/' + id)
  .then(function(response) {
    let {id, email, first_name, last_name, phone} = response.data;
    $('#email').val(email);
    $('#first_name').val(first_name);
    $('#last_name').val(last_name);
    $('#phone').val(phone)
    $('#message_user').html('<div class="green">User was found</div>')
  })
  .catch(function(response) {
    $('#form_user')[0].reset();
    $('#message_user').html('<div class="red">Error - User was not found</div>')
  });
}
function createUser(data) {
  axios.post('http://localhost:8000/users', data)
  .then(function(response) {
    let {id} = response.data;
    $('#next_usr_id').val(id)
    $('#message_user').html('<div class="green">User was created</div>');
  })
  .catch(function(response) {
    $('#message_user').html('<div class="red">Error - User was not created</div>')
  });
}

function updateUser(id, data) {
  axios.patch('http://localhost:8000/users/' + id, data)
  .then(function(response) {
    $('#message_user').html('<div class="green">User was updated</div>')
  })
  .catch(function(response) {
      $('#message_user').html('<div class="red">Error - User was not updated</div>')
  });
}
function deleteUser(id) {
  axios.delete('http://localhost:8000/users/' + id)
  .then(function(response) {
    $('#message_user').html('<div class="green">User was deleted</div>')
  })
  .catch(function(response) {
    $('#message_user').html('<div class="red">Error - User was not deleted</div>')
  });
}
