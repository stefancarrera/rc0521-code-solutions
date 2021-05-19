function handleFocus(event) {
  console.log('Focus event fired', event.target.name);
}

function handleBlur(event) {
  console.log('Blur event fired', event.target.name);
}

function handInput(event) {
  console.log('value of input', event.target.name, event.target.value);
}

var $userName = document.getElementById('user-name');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handInput);

var $userEmail = document.getElementById('user-email');

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handInput);

var $userMessage = document.getElementById('user-message');
$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handInput);
