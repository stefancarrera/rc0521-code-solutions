/* exported maxValue */

function maxValue(stack) {
  const newArr = [];
  if (stack.print() === 'Stack { <empty> }') {
    return -Infinity;
  } else {
    while (stack.print() !== 'Stack { <empty> }') {
      newArr.push(stack.pop());
    }
    return Math.max(...newArr);
  }
}
