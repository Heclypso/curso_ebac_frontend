$(document).ready(function() {

    $('#taskForm').submit(function(e) {
      e.preventDefault();
      var taskName = $('#taskInput').val();
      if (taskName.trim() !== '') {
        $('#taskList').append('<li>' + taskName + '</li>');
        $('#taskInput').val('');
      }
    });


    $('#taskList').on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });