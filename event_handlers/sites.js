document.addEventListener("DOMContentLoaded", function() {

  $('#btn_site_all').click(function(e) {
    e.preventDefault();
    getAllSites();
  })

  $('#btn_site_rd').click(function(e) {
    e.preventDefault();
    let id = $('input[name="next_site_id"]').val();
    if (id) {
      getSiteById(id);
    }
    else {
      $('#message_site').html('<div class="red">Invalid or missing ID</div>')
    }
  })

  $('#form_site').submit(function(e) {
    e.preventDefault();
    let data_arr = $(this).serializeArray();
    let data_obj = {};
    for (let i in data_arr) {
      data_obj[data_arr[i].name] = data_arr[i].value;
    }
    let id = data_obj.next_site_id;
    delete data_obj.next_site_id;

    let origin_btn = $(document.activeElement);
    if (origin_btn[0].id === 'btn_site_crt') {
      createSite(data_obj);
    }
    if (origin_btn[0].id === 'btn_site_upd') {
      updateSite(id, data_obj);
    }
  })

  $('#btn_site_del').click(function(e) {
    e.preventDefault();
    let id = $('input[name="next_site_id"]').val();
    deleteSite(id);
  })

  $('input').focus(function() {
    $('#message_site').html('');
  })
});
