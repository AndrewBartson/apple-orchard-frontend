document.addEventListener("DOMContentLoaded", function() {

  $('#btn_note_all').click(function(e) {
    e.preventDefault();
    getAllNotes();
  })

  $('#btn_note_rd').click(function(e) {
    e.preventDefault();
    let id = $('input[name="next_note_id"]').val();
    if (id) {
      getNoteById(id);
    }
    else {
      $('#message_note').html('<div class="red">Invalid or missing ID</div>')
    }
  })

  $('#form_note').submit(function(e) {
    e.preventDefault();
    let data_arr = $(this).serializeArray();
    let data_obj = {};
    for (let i in data_arr) {
      data_obj[data_arr[i].name] = data_arr[i].value;
    }
    let id = data_obj.next_note_id;
    delete data_obj.next_note_id;

    let origin_btn = $(document.activeElement);
    if (origin_btn[0].id === 'btn_note_crt') {
      createNote(data_obj);
    }
    if (origin_btn[0].id === 'btn_note_upd') {
      updateNote(id, data_obj);
    }
  })

  $('#btn_note_del').click(function(e) {
    e.preventDefault();
    let id = $('input[name="next_note_id"]').val();
    deleteNote(id);
  })

  $('input').focus(function() {
    $('#message_note').html('');
  })
});
