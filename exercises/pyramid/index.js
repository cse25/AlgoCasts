// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let line = ''
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        line += '#'
      } else {
        line += ' '
      }
    }
    let prepend = line.slice(1).split('').reverse().join('')
    console.log(prepend + line)
  }
}

pyramid(3)

function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let line = ''
    for (let col = 0; col < (n * 2) - 1; col++) {
      let centerCol = Math.floor(((n * 2) - 1) / 2)
      if (col <= centerCol + row && col >= centerCol - row) {
        line += '#'
      } else {
        line += ' '
      }
    }
    console.log(line)
  }
}

pyramid(10)

module.exports = pyramid;
