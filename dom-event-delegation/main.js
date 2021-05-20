
function handleClick(event) {
  console.log('Event Target', event.target);
  console.log('Event Target Tagname', event.target.tagName);
  if (event.target.matches('button')) {
    console.log('closest', event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  }
}

var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', handleClick);
