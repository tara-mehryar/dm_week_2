// For Each Syntax:
Array.forEach((element, index, array) => {
    console.log(element)
})

//Example 1:
let numArr = [10, 20,30, 40,50]
numArr.forEach((number, index, array) => {
    console.log(number, index)
})
// Solution:
// 10 0
// 20 1
// 30 2

// Reduce syntax:
arr.reduce(callback, startValue)