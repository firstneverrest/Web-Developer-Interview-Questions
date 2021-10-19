// remove the same value in array
const removeDuplicate = (arr) => [...new Set(arr)];
// console.log(removeDuplicate([90, 2, 4, 2, 5, 4, 90]));
// output => [9, 2, 4, 5]

// check isEven, isOdd
const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;
// console.log(isEven(2));
// console.log(isOdd(2));
// output => true

// find average from value in array
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
// console.log(average(88, 14, 32, 85));
// output => 54.75

// reverse a string
const reverse = (str) => str.split('').reverse().join('');
// console.log(reverse('bottle of water'));
// output => retaw fo elttob

// convert string to capital letter
const upperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);
// console.log(upperCase('carlos'));
// output => Carlos

// check is array empty
const isNotEmpty = (arr) => Array.isArray(arr) && arr.length > 0;
// console.log(isNotEmpty([1, 2, 3]));
// output => true

// shuffle array
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
// console.log(shuffleArray([1, 2, 3, 4]));

// find how many date between two day
const day = (date1, date2) =>
  Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
// console.log(day(new Date("2021-05-7"), new Date("2021-09-27")));
// output => 144

// check valid data
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
// console.log(isDateValid('September 27, 2021 03:10:11'));
// output => true

// get cookie value from browser
cookie = (name) =>
  `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
// console.log(cookie('token'));

// delete all cookies
const clearCookies = document.cookie
  .split(';')
  .forEach(
    (cookie) =>
      (document.cookie = cookie
        .replace(/^ +/, '')
        .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
  );

// convert RGB to Hex code
const rgbToHex = (r, g, b) =>
  '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// console.log(rgbToHex(230, 128, 123));
// output => #e6807b
