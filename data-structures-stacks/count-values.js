/* exported countValues */

function countValues(stack) {
  let count = 0;
  if (stack.peek() !== 'Stack { <empty> }') {
    while (stack.print() !== 'Stack { <empty> }') {
      stack.pop();
      count++;
    }
    return count;
  }
}
