// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let reversed = '';
  for (var i = 0; i < str.length; i++) {
    reversed = str[i] + reversed
  }
  return (str === reversed);
}

function palindrome(str) {
  return str.split('').reverse().join('') === str
}

function palindrome(str) {
  const arr = str.split('')

  return arr.every((char, i) => {
    return char === str[str.length - i - 1]
  });
}

module.exports = palindrome;
