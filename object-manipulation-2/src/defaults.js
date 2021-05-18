/* exported defaults */
function defaults(target, source) {
  for (var i in source) {
    // eslint-disable-next-line no-prototype-builtins
    if (source.hasOwnProperty(i) && !target.hasOwnProperty(i)) {
      target[i] = source[i];
    }
  }
}
