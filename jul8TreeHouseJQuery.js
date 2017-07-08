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
