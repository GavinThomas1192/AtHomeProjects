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
/////New project with images popping up on click treehouse
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);

//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);

  //Show the overlay.
  $overlay.show();

  //Get child's title attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function() {
  //Hide the overlay
  $overlay.hide();
});
