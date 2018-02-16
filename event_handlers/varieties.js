document.addEventListener("DOMContentLoaded", function() {

  $('#btn_var_all').click(function(e) {
    e.preventDefault();
    getAllVarieties();
  })

  $('#btn_var_rd').click(function(e) {
    e.preventDefault();
    let id = $('input[name="next_variety_id"]').val();
    if (id) {
      getVarietyById(id);
    }
    else {
      $('#message_var').html('<div class="red">Invalid or missing ID</div>')
    }
  })

  $('#form_var').submit(function(e) {
    e.preventDefault();
    let data_arr = $(this).serializeArray();
    let data_obj = {};
    for (let i in data_arr) {
      data_obj[data_arr[i].name] = data_arr[i].value;
    }
    let id = data_obj.next_variety_id;
    delete data_obj.next_variety_id;
    let name = data_obj.variety_name;
    data_obj.name = name;
    delete data_obj.variety_name;
    let species_id = data_obj.species_id_var;
    data_obj.species_id = species_id;
    delete data_obj.species_id_var;

    let origin_btn = $(document.activeElement);
    if (origin_btn[0].id === 'btn_var_crt') {
      createVariety(data_obj);
    }
    if (origin_btn[0].id === 'btn_var_upd') {
      updateVariety(id, data_obj);
    }
  })

  $('#btn_var_del').click(function(e) {
    e.preventDefault();
    let id = $('input[name="next_variety_id"]').val();
    deleteVariety(id);
  })

  $('input').focus(function() {
    $('#message_var').html('');
  })
});
