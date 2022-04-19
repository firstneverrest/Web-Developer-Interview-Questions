/*
Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, 
“Buzz” if an integer is divisible by 5, 
and “FizzBuzz” if an integer is divisible by both 3 and 5.
*/

Array.from(Array(100).keys())
  .map((number) => number + 1)
  .forEach((number) => {
    let result = '';
    if (number % 3 === 0) {
      result += 'FIZZ';
    }
    if (number % 5 === 0) {
      result += 'BUZZ';
    }
    if (result === '') {
      result = number;
    }
    console.log(result);
  });

for (let number = 1; number < 101; number++) {
  if (number % 3 === 0 && number % 5 === 0) console.log('FIZZBUZZ');
  else if (number % 3 === 0) console.log('FIZZ');
  else if (number % 5 === 0) console.log('BUZZ');
  else console.log(number);
}

Array.from(Array(100).keys())
  .map((number) => number + 1)
  .forEach((number) => {
    if (number % 3 === 0 && number % 5 === 0) console.log('FIZZBUZZ');
    else if (number % 3 === 0) console.log('FIZZ');
    else if (number % 5 === 0) console.log('BUZZ');
    else console.log(number);
  });
