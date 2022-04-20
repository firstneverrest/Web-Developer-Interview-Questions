/*
    input: a string "applepie" and dictionary
    output: ["apple", "pie"]
    string matching
    handle cases
    1. dictionary's word length > input string 
    2. input string's word length < dictionary's word
    3. word not found, output: []

    if the string is match
      1. push the found word into the result array
      2. + index of searching in word to find the next word
    
    test
    - result = []
    - wordStartIndex = 0
    - dictIndex = 0
    - dictWord = apple
    - wordIndex = 0
    - currentWord = ''

    // time complexity: O(dictionary.length * word.length)
    // space complexity: O(n)
*/

const dictionary = ['apple', 'fruit', 'orange', 'piece', 'pie'];
const word = 'fruitpt';

const cutWords = (word, dict) => {
  let result = []; // result of string matching
  let wordStartIndex = 0; // index of word

  // loop each word in dictionary
  for (let dictIndex = 0; dictIndex < dict.length; dictIndex++) {
    const dictWord = dict[dictIndex];
    let currentWord = '';

    // loop through input string
    for (let wordIndex = wordStartIndex; wordIndex < word.length; wordIndex++) {
      currentWord = currentWord + word[wordIndex];
      if (dictWord === currentWord) {
        result.push(currentWord);
        wordStartIndex += wordIndex + 1;
        break;
      } else if (dictWord[wordIndex] !== word[wordIndex]) {
        continue;
      } else if (dictWord.length > word.length - wordStartIndex) {
        continue;
      } else if (word.length - wordStartIndex > dictWord.length) {
        continue;
      }
    }
  }

  // return array of string
  return result;
};

const wordFound = cutWords(word, dictionary);
console.log(wordFound);
