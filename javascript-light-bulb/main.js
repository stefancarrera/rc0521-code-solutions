var numberOfClicks = 0;
var $lightBulb = document.querySelector('div');
var $background = document.querySelector('body');

$background.addEventListener('click', function (event) {
  numberOfClicks++;
  if (numberOfClicks % 1 === 0) {
    $lightBulb.className = 'offCircle';
    $background.className = 'container off';
  } if (numberOfClicks % 2 === 0) {
    $lightBulb.className = 'circle';
    $background.className = 'container on';
  }
});
