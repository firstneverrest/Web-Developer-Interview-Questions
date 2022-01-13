/*
ให้ array ความยาว n ใน array นี้มีตัวเลขตั้งแต่ 0 ถึง n อยู่ แต่มีตัวเลขนึงหายไป 
(เนื่องจากความยาว n แต่ 0 ถึง n มี n+1 ตัว) จงหาตัวเลขที่หายไป
*/

// Unsorted array
// O(2n)
function findMissingNumber1(array) {
  let sum = 0;
  const len = array.length;
  // find sum from 0 to n
  for (let i = 0; i <= len; i++) {
    sum += i;
  }
  for (let i = 0; i < len; i++) {
    sum -= array[i];
  }
  return sum;
}

// Sorted array
// O(n log(n)) + O(n)
function findMissingNumber2(array) {
  const len = array.length;
  array.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (i !== array[i]) {
      return i;
    }
  }
  return len;
}

console.log(findMissingNumber1([1, 4, 2, 0])); // 3
console.log(findMissingNumber2([1, 4, 2, 0])); // 3
