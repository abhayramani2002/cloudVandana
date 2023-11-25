function sortDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
let arrayToSort = [5, 2, 8, 1, 7];
sortDescending(arrayToSort);
console.log(arrayToSort);
