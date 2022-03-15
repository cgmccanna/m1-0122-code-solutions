var $openButton = document.querySelector('.open');
var $closeButton = document.querySelector('.close');
var $modalMain = document.querySelector('.modal');

$openButton.addEventListener('click', function (event) {
  $modalMain.className = 'modal';
});

$closeButton.addEventListener('click', function (event) {
  $modalMain.className = 'modal display-none';
});
