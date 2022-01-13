/*
ให้ array ความยาว n ใน array นี้มีตัวเลขไม่ซ้ำกันอยู่ 
จงหาตัวเลข 2 ตัวจาก array นี้ที่บวกกันได้ x
*/

// O(n)
function findSumX1(array, x) {
  let hashTable = {}; // Javascript object is  key/value store
  const len = array.length;
  for (let i = 0; i < len; i++) {
    const value = array[i];
    if (hashTable[value]) {
      // Found the pair
      return [value, x - value];
    } else {
      hashTable[x - value] = true;
    }
  }
  return [];
}

// O(n log(n))
function findSumX2(array, x) {
  array.sort((a, b) => a - b);
  let first = 0;
  let last = array.length - 1;
  while (last > first) {
    let sum = array[first] + array[last];
    if (sum > x) {
      last--;
    } else if (sum < x) {
      first++;
    } else {
      return [array[first], array[last]];
    }
  }
  return [];
}

console.log(findSumX1([1, 4, 2, 0], 6)); // [2, 4]
console.log(findSumX2([1, 4, 2, 0], 6)); // [2, 4]
