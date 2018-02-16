document.addEventListener("DOMContentLoaded", function() {

  $('#btn_usr_all').click(function(e) {
    e.preventDefault();
    getAllUsers();
  })

  $('#btn_usr_rd').click(function(e) {
    e.preventDefault();
    let id = $('input[name="next_usr_id"]').val();
    if (id) {
      getUserById(id);
    }
    else {
      $('#message_user').html('<div class="red">Invalid or missing ID</div>')
    }
  })

  $('#form_user').submit(function(e) {
    e.preventDefault();
    let data_arr = $(this).serializeArray();
    let data_obj = {};
    for (let i in data_arr) {
      data_obj[data_arr[i].name] = data_arr[i].value;
    }
    let id = data_obj.next_usr_id;
    delete data_obj.next_usr_id;
    data_obj.password = 'none';

    let origin_btn = $(document.activeElement);
    if (origin_btn[0].id === 'btn_usr_crt') {
      createUser(data_obj);
    }
    if (origin_btn[0].id === 'btn_usr_upd') {
      updateUser(id, data_obj);
    }
  })

  $('#btn_usr_del').click(function(e) {
    e.preventDefault();
    let id = $('input[name="next_usr_id"]').val();
    deleteUser(id);
  })

  $('input').focus(function() {
    $('#message_user').html('');
  })

  $("#return_to_map").click(function(){
    $("#map_").toggle();
    $("#side_bar_").toggle();
    $("#data_editor").toggle();
  });
});
