var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');
var clickButton = document.querySelector('button');
var clicks = 0;

function handleClickButton(event) {
  clicks++;
  clickCount.textContent = 'Clicks: ' + clicks;
  if (clicks < 4) {
    hotButton.className = 'hot-button cold';
  } else if (clicks < 7) {
    hotButton.className = 'hot-button cool';
  } else if (clicks < 10) {
    hotButton.classNmae = 'hot-button tepid';
  } else if (clicks < 13) {
    hotButton.className = 'hot-button warm';
  } else if (clicks < 16) {
    hotButton.className = 'hot-button hot';
  } else if (clicks > 16) {
    hotButton.className = 'hot-button nuclear';
  }
}

clickButton.addEventListener('click', handleClickButton);
