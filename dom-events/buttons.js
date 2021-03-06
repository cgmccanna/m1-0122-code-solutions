function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var $clickButton = document.querySelector('button.click-button');
$clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var $buttonHover = document.querySelector('button.hover-button');
$buttonHover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var $doubleClick = document.querySelector('button.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleClick);
