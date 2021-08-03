/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let first = queue.dequeue();
  if (queue.peek() === undefined) {
    return first;
  } else {
    // let second = queue.dequeue();
    while (first > queue.peek()) {
      queue.enqueue(first);
      first = queue.dequeue();
    }

    if (first < queue.peek()) {
      return first;
    } else {
      queue.enqueue(first);
      first = queue.dequeue();
    }
    return first;
  }
}
