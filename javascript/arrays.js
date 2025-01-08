let arr = [1,2,3,4]
console.log("array: " + arr)
console.log("length of array is: " + arr.length)

// using constructor
let arr1 = new Array(1,2,3,'anurag')
console.log("arr1: " + arr1)

// add one element to array
arr.push(5)
console.log("array after amnipulation: " + arr)

// pop one element
arr.pop()
console.log("array after manipulation: " + arr)

// add element to start
arr.unshift(0)
console.log("array after manipulation: " + arr)

// remove first element
arr.shift()
console.log("array after manipulation: " + arr)

// splice: to add element at certain location
arr.splice(1,0, 'anuj')
console.log("array after manipulation: " + arr)

arr.splice(1,2, 'anuj')
console.log("array after manipulation: " + arr)

// slice
console.log("array after manipulation using slice: " + arr.slice(0,2))

// push another array into one array
arr.push(arr1)
console.log(arr)

// string to array
let s = "hey, anurag this side"
console.log("new array: " + s.split(','))

// array to string
let str = arr.join('! ')
console.log("string from array: " + str)