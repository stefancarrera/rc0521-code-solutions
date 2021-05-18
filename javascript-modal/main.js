var $modalBtn = document.querySelector('button.modalBtn');
var $noBtn = document.querySelector('button.noBtn');
var $popUp = document.querySelector('div.pop-up');
var $background = document.querySelector('body');
$popUp.style.visibility = 'hidden';

$modalBtn.addEventListener('click', function (event) {
  $popUp.style.visibility = 'visible';
  $background.className = 'veil';
  $modalBtn.className = 'buttonVeil';
});

$noBtn.addEventListener('click', function (event) {
  $popUp.style.visibility = 'hidden';
  $background.className = '';
  $modalBtn.className = 'modalBtn';
});
