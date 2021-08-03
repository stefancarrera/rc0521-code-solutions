/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.print() === 'Stack { <empty> }') {
    return stack;
  } else {
    const top = stack.pop();
    stack.push(value);
    stack.push(top);
    return stack;
  }
}
