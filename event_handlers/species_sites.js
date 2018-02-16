document.addEventListener("DOMContentLoaded", function() {

  $('#btn_sp_s_all').click(function(e) {
    e.preventDefault();
    getAllSpeciesSites();
  })

  $('#btn_sp_s_rd').click(function(e) {
    e.preventDefault();
    let id = $('input[name="next_sp_s_id"]').val();
    if (id) {
      getSpeciesSiteById(id);
    }
    else {
      $('#message_sp_s').html('<div class="red">Invalid or missing ID</div>')
    }
  })

  $('#form_sp_s').submit(function(e) {
    e.preventDefault();
    let data_arr = $(this).serializeArray();
    let data_obj = {};
    for (let i in data_arr) {
      data_obj[data_arr[i].name] = data_arr[i].value;
    }

    let id = data_obj.next_sp_s_id;
    delete data_obj.next_sp_s_id;
    let name = data_obj.sp_s_name;
    data_obj.name = name;
    delete data_obj.sp_s_name;
    let site_id = data_obj.site_id_sp_s;
    data_obj.site_id = site_id;
    delete data_obj.site_id_sp_s;

    let origin_btn = $(document.activeElement);
    if (origin_btn[0].id === 'btn_sp_s_crt') {
      createSpeciesSite(data_obj);
    }
    if (origin_btn[0].id === 'btn_sp_s_upd') {
      updateSpeciesSite(id, data_obj);
    }
  })

  $('#btn_sp_s_del').click(function(e) {
    e.preventDefault();
    let id = $('input[name="next_sp_s_id"]').val();
    deleteSpeciesSite(id);
  })

  $('input').focus(function() {
    $('#message_sp_s').html('');
  })
});
