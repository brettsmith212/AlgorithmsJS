// T: O(log(n)) | S: O(1)
function binarySearch(arr, target) {
 let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      return middle
    }

    if (target > arr[middle]) {
      start = middle + 1
    } else if (target < arr[middle]) {
      end = middle - 1
    }
  }

  return -1
}

console.log(binarySearch([1,3,4,5,7], 1))
