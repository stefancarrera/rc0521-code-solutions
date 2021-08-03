/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.print() === 'Stack { <empty> }') {
    return undefined;
  } else {
    const top = stack.pop();
    if (stack.print() === 'Stack { <empty> }') {
      stack.push(top);
      return undefined;
    } else {
      const secondTop = stack.pop();
      stack.push(secondTop);
      stack.push(top);
      return secondTop;
    }
  }
}
