$(document).ready(function() {
  $('div').mouseenter(function() {
    $('div').hide();
  });
});
//above changes all div's. You can use "this" to change the div that got clicked
$(document).ready(function() {
  $('div').click(function() {
    $(this).fadeOut('slow');
  });
});

$(document).ready(function() {
  $('#text').click(function() {
    $(this).toggleClass('highlighted');
  });
});
//grabbing input from a form and assigning it to a var
$(document).ready(function() {
  $('#button').click(function() {
    var toAdd = $('input[name=checkListItem]').val();
  });
});
//using that var and input to create text from the users input
$(document).ready(function() {
  $('#button').click(function() {
    var toAdd = $('input[name=checkListItem]').val();
    $('.list').append('<div class="item">' + toAdd + '</div>');
  });
});
