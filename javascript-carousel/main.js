var $next = document.querySelector('.next');
var $prev = document.querySelector('.prev');
var $circle1 = document.querySelector('#pic1');
var $circle2 = document.querySelector('#pic2');
var $circle3 = document.querySelector('#pic3');
var $circle4 = document.querySelector('#pic4');
var $circle5 = document.querySelector('#pic5');
var $img = document.querySelector('img');
var $picBox = document.querySelector('.picBox');

$picBox.addEventListener('click', function (event) {
  if (event.target === $next) {
    if ($img.getAttribute('src') === 'images/001.png') {
      $img.setAttribute('src', 'images/002.png');
      $img.setAttribute('alt', 'Charmander');
      $circle1.className = 'fas fa-circle';
      $circle2.className = 'far fa-circle';
    } else if ($img.getAttribute('src') === 'images/002.png') {
      $img.setAttribute('src', 'images/003.png');
      $img.setAttribute('alt', 'Squirtle');
      $circle2.className = 'fas fa-circle';
      $circle3.className = 'far fa-circle';
    } else if ($img.getAttribute('src') === 'images/003.png') {
      $img.setAttribute('src', 'images/004.png');
      $img.setAttribute('alt', 'Pikachu');
      $circle3.className = 'fas fa-circle';
      $circle4.className = 'far fa-circle';
    } else if ($img.getAttribute('src') === 'images/004.png') {
      $img.setAttribute('src', 'images/005.png');
      $img.setAttribute('alt', 'Jigglypuff');
      $circle4.className = 'fas fa-circle';
      $circle5.className = 'far fa-circle';
    } else if ($img.getAttribute('src') === 'images/005.png') {
      $img.setAttribute('src', 'images/001.png');
      $img.setAttribute('alt', 'Bulbasaur');
      $circle5.className = 'fas fa-circle';
      $circle1.className = 'far fa-circle';
    }
  }
  if (event.target === $prev) {
    if ($img.getAttribute('src') === 'images/001.png') {
      $img.setAttribute('src', 'images/005.png');
      $img.setAttribute('alt', 'Jigglypuff');
      $circle1.className = 'fas fa-circle';
      $circle5.className = 'far fa-circle';
    } else if ($img.getAttribute('src') === 'images/002.png') {
      $img.setAttribute('src', 'images/001.png');
      $img.setAttribute('alt', 'Bulbasaur');
      $circle2.className = 'fas fa-circle';
      $circle1.className = 'far fa-circle';
    } else if ($img.getAttribute('src') === 'images/003.png') {
      $img.setAttribute('src', 'images/002.png');
      $img.setAttribute('alt', 'Charmander');
      $circle3.className = 'fas fa-circle';
      $circle2.className = 'far fa-circle';
    } else if ($img.getAttribute('src') === 'images/004.png') {
      $img.setAttribute('src', 'images/003.png');
      $img.setAttribute('alt', 'Squirtle');
      $circle4.className = 'fas fa-circle';
      $circle3.className = 'far fa-circle';
    } else if ($img.getAttribute('src') === 'images/005.png') {
      $img.setAttribute('src', 'images/004.png');
      $img.setAttribute('alt', 'Pikachu');
      $circle5.className = 'fas fa-circle';
      $circle4.className = 'far fa-circle';
    }
  }
  if (event.target === $circle1) {
    $img.setAttribute('src', 'images/001.png');
    $img.setAttribute('alt', 'Bulbasaur');
    $circle1.className = 'far fa-circle';
    $circle2.className = 'fas fa-circle';
    $circle3.className = 'fas fa-circle';
    $circle4.className = 'fas fa-circle';
    $circle5.className = 'fas fa-circle';
  }
  if (event.target === $circle2) {
    $img.setAttribute('src', 'images/002.png');
    $img.setAttribute('alt', 'Charmander');
    $circle1.className = 'fas fa-circle';
    $circle2.className = 'far fa-circle';
    $circle3.className = 'fas fa-circle';
    $circle4.className = 'fas fa-circle';
    $circle5.className = 'fas fa-circle';
  }
  if (event.target === $circle3) {
    $img.setAttribute('src', 'images/003.png');
    $img.setAttribute('alt', 'Squirtle');
    $circle1.className = 'fas fa-circle';
    $circle2.className = 'fas fa-circle';
    $circle3.className = 'far fa-circle';
    $circle4.className = 'fas fa-circle';
    $circle5.className = 'fas fa-circle';
  }
  if (event.target === $circle4) {
    $img.setAttribute('src', 'images/004.png');
    $img.setAttribute('alt', 'Pikachu');
    $circle1.className = 'fas fa-circle';
    $circle2.className = 'fas fa-circle';
    $circle3.className = 'fas fa-circle';
    $circle4.className = 'far fa-circle';
    $circle5.className = 'fas fa-circle';
  }
  if (event.target === $circle5) {
    $img.setAttribute('src', 'images/005.png');
    $img.setAttribute('alt', 'Jigglypuff');
    $circle1.className = 'fas fa-circle';
    $circle2.className = 'fas fa-circle';
    $circle3.className = 'fas fa-circle';
    $circle4.className = 'fas fa-circle';
    $circle5.className = 'far fa-circle';
  }
  clearInterval(myTimer);
  myTimer = setInterval(timer, 3000);
});

function timer() {
  if ($img.getAttribute('src') === 'images/001.png') {
    $img.setAttribute('src', 'images/002.png');
    $img.setAttribute('alt', 'Charmander');
    $circle1.className = 'fas fa-circle';
    $circle2.className = 'far fa-circle';
  } else if ($img.getAttribute('src') === 'images/002.png') {
    $img.setAttribute('src', 'images/003.png');
    $img.setAttribute('alt', 'Squirtle');
    $circle2.className = 'fas fa-circle';
    $circle3.className = 'far fa-circle';
  } else if ($img.getAttribute('src') === 'images/003.png') {
    $img.setAttribute('src', 'images/004.png');
    $img.setAttribute('alt', 'Pikachu');
    $circle3.className = 'fas fa-circle';
    $circle4.className = 'far fa-circle';
  } else if ($img.getAttribute('src') === 'images/004.png') {
    $img.setAttribute('src', 'images/005.png');
    $img.setAttribute('alt', 'Jigglypuff');
    $circle4.className = 'fas fa-circle';
    $circle5.className = 'far fa-circle';
  } else if ($img.getAttribute('src') === 'images/005.png') {
    $img.setAttribute('src', 'images/001.png');
    $img.setAttribute('alt', 'Bulbasaur');
    $circle5.className = 'fas fa-circle';
    $circle1.className = 'far fa-circle';
  }
}

var myTimer = setInterval(timer, 3000);
