var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabs.length; i++) {
      if (event.target === $tabs[i]) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }

      var targetDataView = event.target.getAttribute('data-view');
      for (var x = 0; x < $views.length; x++) {
        if (targetDataView === $views[x].getAttribute('data-view')) {
          $views[x].className = 'view';
        } else {
          $views[x].className = 'view hidden';
        }
      }

    }
  }
});
