var $next = document.querySelector('.next');
var $prev = document.querySelector('.prev');
var $circle0 = document.querySelector('#pic0');
var $circle1 = document.querySelector('#pic1');
var $circle2 = document.querySelector('#pic2');
var $circle3 = document.querySelector('#pic3');
var $circle4 = document.querySelector('#pic4');
var $img = document.querySelector('img');
var $circleRow = document.querySelector('.circleRow');

var imgArr = ['images/001.png', 'images/002.png', 'images/003.png', 'images/004.png', 'images/005.png'];

var nextInterval = setInterval(nextImg, 3000);

$next.addEventListener('click', function (event) {
  nextImg();
  clearTime();
});

$prev.addEventListener('click', function (event) {
  prevImg();
  clearTime();
});

$circleRow.addEventListener('click', function (event) {
  if (event.target === $circle0) {
    $circle0.className = 'far fa-circle';
    $circle1.className = 'fas fa-circle';
    $circle2.className = 'fas fa-circle';
    $circle3.className = 'fas fa-circle';
    $circle4.className = 'fas fa-circle';
    $img.setAttribute('src', imgArr[0]);
  } else if (event.target === $circle1) {
    $circle0.className = 'fas fa-circle';
    $circle1.className = 'far fa-circle';
    $circle2.className = 'fas fa-circle';
    $circle3.className = 'fas fa-circle';
    $circle4.className = 'fas fa-circle';
    $img.setAttribute('src', imgArr[1]);
  } else if (event.target === $circle2) {
    $circle0.className = 'fas fa-circle';
    $circle1.className = 'fas fa-circle';
    $circle2.className = 'far fa-circle';
    $circle3.className = 'fas fa-circle';
    $circle4.className = 'fas fa-circle';
    $img.setAttribute('src', imgArr[2]);
  } else if (event.target === $circle3) {
    $circle0.className = 'fas fa-circle';
    $circle1.className = 'fas fa-circle';
    $circle2.className = 'fas fa-circle';
    $circle3.className = 'far fa-circle';
    $circle4.className = 'fas fa-circle';
    $img.setAttribute('src', imgArr[3]);
  } else if (event.target === $circle4) {
    $circle0.className = 'fas fa-circle';
    $circle1.className = 'fas fa-circle';
    $circle2.className = 'fas fa-circle';
    $circle3.className = 'fas fa-circle';
    $circle4.className = 'far fa-circle';
    $img.setAttribute('src', imgArr[4]);
  }
  clearTime();
});

function clearTime() {
  clearInterval(nextInterval);
  nextInterval = setInterval(nextImg, 3000);
}

function nextImg() {
  if ($img.getAttribute('src') === imgArr[0]) {
    $img.setAttribute('src', imgArr[1]);
    $circle0.className = 'fas fa-circle';
    $circle1.className = 'far fa-circle';
  } else if ($img.getAttribute('src') === imgArr[1]) {
    $img.setAttribute('src', imgArr[2]);
    $circle1.className = 'fas fa-circle';
    $circle2.className = 'far fa-circle';
  } else if ($img.getAttribute('src') === imgArr[2]) {
    $img.setAttribute('src', imgArr[3]);
    $circle2.className = 'fas fa-circle';
    $circle3.className = 'far fa-circle';
  } else if ($img.getAttribute('src') === imgArr[3]) {
    $img.setAttribute('src', imgArr[4]);
    $circle3.className = 'fas fa-circle';
    $circle4.className = 'far fa-circle';
  } else if ($img.getAttribute('src') === imgArr[4]) {
    $img.setAttribute('src', imgArr[0]);
    $circle4.className = 'fas fa-circle';
    $circle0.className = 'far fa-circle';
  }
}

function prevImg() {
  if ($img.getAttribute('src') === imgArr[0]) {
    $img.setAttribute('src', imgArr[4]);
    $circle0.className = 'fas fa-circle';
    $circle4.className = 'far fa-circle';
  } else if ($img.getAttribute('src') === imgArr[1]) {
    $img.setAttribute('src', imgArr[0]);
    $circle1.className = 'fas fa-circle';
    $circle0.className = 'far fa-circle';
  } else if ($img.getAttribute('src') === imgArr[2]) {
    $img.setAttribute('src', imgArr[1]);
    $circle2.className = 'fas fa-circle';
    $circle1.className = 'far fa-circle';
  } else if ($img.getAttribute('src') === imgArr[3]) {
    $img.setAttribute('src', imgArr[2]);
    $circle3.className = 'fas fa-circle';
    $circle2.className = 'far fa-circle';
  } else if ($img.getAttribute('src') === imgArr[4]) {
    $img.setAttribute('src', imgArr[3]);
    $circle4.className = 'fas fa-circle';
    $circle3.className = 'far fa-circle';
  }
}
