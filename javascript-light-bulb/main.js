var numberClicks = 0;
var $bulb = document.querySelector('.bulb');
var $body = document.querySelector('body');

$bulb.addEventListener('click', function (event) {
  numberClicks++;
  if (numberClicks === 0) {
    $bulb.className = 'bulb bulb-on';
    $body.className = 'body on';
  } else if (numberClicks % 2 === 0) {
    $bulb.className = 'bulb bulb-on';
    $body.className = 'body on';
  } else if (numberClicks % 2 !== 0) {
    $bulb.className = 'bulb bulb-off';
    $body.className = 'body off';
  }
});
