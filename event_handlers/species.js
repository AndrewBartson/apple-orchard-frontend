document.addEventListener("DOMContentLoaded", function() {

  $('#btn_sp_all').click(function(e) {
    e.preventDefault();
    getAllSpecies();
  })

  $('#btn_sp_rd').click(function(e) {
    e.preventDefault();
    let id = $('input[name="next_sp_id"]').val();
    if (id) {
      getSpeciesById(id);
    }
    else {
      $('#message_sp').html('<div class="red">Invalid or missing ID</div>')
    }
  })

  $('#form_sp').submit(function(e) {
    e.preventDefault();
    let data_arr = $(this).serializeArray();
    let data_obj = {};
    for (let i in data_arr) {
      data_obj[data_arr[i].name] = data_arr[i].value;
    }
    let id = data_obj.next_sp_id;
    delete data_obj.next_sp_id;

    let origin_btn = $(document.activeElement);
    if (origin_btn[0].id === 'btn_sp_crt') {
      createSpecies(data_obj);
    }
    if (origin_btn[0].id === 'btn_sp_upd') {
      updateSpecies(id, data_obj);
    }
  })

  $('#btn_sp_del').click(function(e) {
    e.preventDefault();
    let id = $('input[name="next_sp_id"]').val();
    deleteSpecies(id);
  })

  $('input').focus(function() {
    $('#message_sp').html('');
  })
});
