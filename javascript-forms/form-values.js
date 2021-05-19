var $contactForm = document.getElementById('contact-form');

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var allValues = {};
  allValues.name = document.forms[0].elements[0].value;
  allValues.email = document.forms[0].elements[1].value;
  allValues.message = document.forms[0].elements[2].value;
  console.log(allValues);
});
