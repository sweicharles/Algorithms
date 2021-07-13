/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

/*
 Example 1:

 Input: [1,0,2,3,0,4,5,0]
 Output: null
 Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
 Example 2:
 
 Input: [1,2,3]
 Output: null
 Explanation: After calling your function, the input array is modified to: [1,2,3]
  
 
 Note:
 
 1 <= arr.length <= 10000
 0 <= arr[i] <= 9

  */

// ! Solution 1 brute-force
var duplicateZeros = function (arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      for (let j = len - 2; j > i; j--) {
        arr[j + 1] = arr[j];
      }
      if (i !== len - 1) {
        arr[i + 1] = 0;
      }
      i += 1;
    }
  }
};

// ! Fast solution
var duplicateZeros = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      // splice(start, deleteCount, item1, item2, itemN)
      arr.pop();
      i++;
    }
  }
};

// TODO Test data ------------ ------------ ------------ ------------
let arr_1 = [1, 0, 2, 3, 0, 4, 5, 0];
let arr_2 = [1, 2, 3];
let arr_3 = [0, 0, 0, 0, 0, 0, 0];

duplicateZeros(arr_1);
console.log(arr_1);

duplicateZeros(arr_2);
console.log(arr_2);

duplicateZeros(arr_3);
console.log(arr_3);

// Take away
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
