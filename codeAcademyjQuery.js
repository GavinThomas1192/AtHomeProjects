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

//to delete newly created divs by clicking
$(document).ready(function() {
  $('#button').click(function() {
    var toAdd = $('input[name=checkListItem]').val();
    $('.list').append('<div class="item">' + toAdd + '</div>');
  });
  $(document).on('click', '.item', function() {
    $(this).remove();
  });
});
//fade out on something when clicked
$(document).ready(function() {
  $('div').click(function() {
    $(this).fadeOut('fast');
  });
});
//Adds Two functions
$(document).ready(function() {
  $('div').click(function() {
    $(this).fadeOut('fast');
  });
  $('div').hover(function() {
    $(this).addClass('red');
  });
});
//animate!!!!!!
$(document).ready(function() {
  $(document).keydown(function() {
    $('div').animate({
      left: '+=10px'
    });
  });
});
//move an image around!!!!!!! case =  specific key
$(document).ready(function() {
  $(document).keydown(function(key) {
    switch (parseInt(key.which, 10)) {
      // Left arrow key pressed
      case 37:
        $('img').animate({
          left: "-=10px"
        }, 'fast');
        break;
        // Up Arrow Pressed
      case 38:
        $('img').animate({
          top: "-=10px"
        }, 'fast');
        // Put our code here
        break;
        // Right Arrow Pressed
      case 39:
        $('img').animate({
          left: "+=10px"
        }, 'fast');
        // Put our code here
        break;
        // Down Arrow Pressed
      case 40:
        $('img').animate({
          top: "+=10px"
        }, 'fast');
        // Put our code here
        break;
    }
  });
});
