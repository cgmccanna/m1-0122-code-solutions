var $contactForm = document.forms[0];

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var values = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log('messageData:', values);
  $contactForm.reset();
});
