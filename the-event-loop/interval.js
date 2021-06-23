let curCount = 3;

function countDown() {
  if (curCount !== 0) {
    console.log(curCount);
    curCount--;
  } else {
    console.log('Blast off!');
    clearTimeout(intervalID);
  }
}

const intervalID = setInterval(countDown, 1000);
