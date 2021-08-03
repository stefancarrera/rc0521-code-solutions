/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const postpone = queue.dequeue();
    queue.enqueue(postpone);
  }
}
