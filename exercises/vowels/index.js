// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(string) {
  const vowelArray = ['a', 'e', 'i', 'o', 'u']
  let count = 0

  for (let char of string.toLowerCase()) {
    for (let vowel of vowelArray) {
      if (char === vowel) {
        count++
      }
    }
  }

  return count
}

function vowels(string) {
  let count = 0
  const vowelArray = ['a', 'e', 'i', 'o', 'u']

  for (let char of string.toLowerCase()) {
    if (vowelArray.includes(char)) {
      count++
    }
  }

  return count
}
module.exports = vowels;
