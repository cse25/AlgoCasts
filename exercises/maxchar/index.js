// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {}
  for (let char of str) {
    if (!obj[char]) {
      obj[char] = 1
    } else {
      obj[char]++
    }
  }

  console.log(obj)
  let largestNum = 0
  let largestChar
  for (let key in obj) {
    if (obj[key] > largestNum) {
      largestNum = obj[key]
      largestChar = key
    }
  }
  return largestChar
}

module.exports = maxChar;
