var $tabContainer = document.querySelector('.tab-container');
var $tabNodes = document.querySelectorAll('.tab');
var $viewNodes = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabNodes.length; i++) {
      if ($tabNodes[i] === event.target) {
        $tabNodes[i].className = 'tab active';
      } else {
        $tabNodes[i].className = 'tab';
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (var a = 0; a < $viewNodes.length; a++) {
      if ($viewNodes[a].getAttribute('data-view') !== dataView) {
        $viewNodes[a].className = 'view hidden';
      } else {
        $viewNodes[a].className = 'view';
      }
    }
  }
});
