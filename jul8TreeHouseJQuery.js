// Plain JavaScript
var mylist = document.getElementsByTagName('li');

for (var i = 0; i < mylist.length; i += 1) {
  mylist[i].addEventListener('click', function() {
    this.textContent = 'Clicked!';
  });
}

// jQuery Example
$('li').on('click', function() {
  $(this).text("Clicked!");
});

//DRY!!! forEach
var students = [{
    name: "Maddy"
  },
  {
    name: "Adam"
  },
  {
    name: "Jeseekia"
  }
];
//Long way
//console.log('Maddy');
//console.log('Adam');
//console.log('Jeseekia');

students.forEach(function(student) {
  console.log(student.name);
});

//Hide the warning
//Then show the warning slowly

//$(document).ready(function() {
//  $('.warning').hide();
//});

jQuery('.warning').hide();
jQuery('.warning').show("slow");
//DRY
$('.warning').hide().show("slow");


//Prevent Spoiler from seeing spoilers
//Solution, hide spoilers and reveal them through user interaction.
//1. Hide spoiler
$('span').hide();
//2. Add a button
$('.spoiler').append('<button>Reveal Spoiler</button>');
//3.When button is pressed show spoiler
$('button').click(function() {
  $(this).prev().show();
  $(this).remove();
});


$('body').append('<div id="overlay"></div>');

$('#imageGallery a').click(function(event) {
  event.preventDefault();
  var href = $(this).attr('href');
  console.log(href);
});
