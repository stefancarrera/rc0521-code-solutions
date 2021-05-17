function handleClick(event) {
  console.log('button clicked');
  console.log('event object', event);
  console.log('target property', event.target);
}

var clickButton = document.querySelector('button.click-button');
clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event object', event);
  console.log('target property', event.target);
}

var hoverButton = document.querySelector('button.hover-button');
hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event object', event);
  console.log('target property', event.target);
}

var doubleClick = document.querySelector('button.double-click-button');
doubleClick.addEventListener('dblclick', handleDoubleClick);
