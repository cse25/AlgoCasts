//Write a JavaScript program to get the integers in range (x, y).

//Example : range(2, 9)
//Expected Output : [3, 4, 5, 6, 7, 8]

function range(x, y, max = y - x - 1, arr = []) {
  if (arr.length === max) {
    console.log(arr)
    return
  }

  x++
  arr.push(x)
  range(x, y, max, arr)
}

range(-2, 4)
