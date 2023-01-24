const arr1 = [2, 1, 4, 3, 5, 8];

const arr2 = [0, 6, 4, 3, 9, 7];

const arr3 = [2, 0, 1, 6, 5, 9, 8, 7];

function sortedArray(arr3) {
  let arr3length = arr3.length;

  for (let i = 0; i < arr3length; i++) {
    for (let j = 0; j < arr3length; j++) {
      if (arr3[j] > arr3[j + 1]) {
        let temp = arr3[j];
        arr3[j] = arr3[j + 1];
        arr3[j + 1] = temp;
      }
    }
  }
  return arr3;
}

console.log(sortedArray(arr3));

//its time complexity is O(n^2)
