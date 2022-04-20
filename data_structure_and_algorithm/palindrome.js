/*
A palindrome is a word, phrase, number, or other sequence of characters 
which reads the same backward or forward.
*/

function palindrome(str) {
  const re = /[^A-Za-z0-9]/g;
  const lowRegStr = str.toLowerCase().replace(re, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

console.log(palindrome('A man, a plan, a canal. Panama'));

function palindrome2(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome2('A man, a plan, a canal. Panama'));
