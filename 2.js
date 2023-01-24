const sortedArr = [4, 6, 9, 12, 34, 54, 65, 70, 80, 90];

function searchElement(sortedArr, targettedValue) {
  let leftIndex = 0;
  let rightIndex = sortedArr.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.trunc((leftIndex + rightIndex) / 2);
    if (sortedArr[midIndex] === targettedValue) {
      return midIndex;
    } else if (sortedArr[midIndex] < targettedValue) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  return -1;
}
console.log(searchElement(sortedArr, 90));
