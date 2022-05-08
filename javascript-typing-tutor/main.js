var $characters = document.querySelectorAll('span');
var counter = 0;
document.addEventListener('keydown', function (event) {
  if (event.key === $characters[counter].textContent) {
    $characters[counter].className = 'correct';
    $characters[counter + 1].className = 'current';
    counter += 1;
  } else if (event.key !== $characters[counter].textContent) {
    $characters[counter].className = 'incorrect current';

  }
}
);
