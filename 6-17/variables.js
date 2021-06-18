let myVar = "my variable text"

const constantVar = 1

// console.log(myVar)

// console.log(constantVar)

// var 
// const
// ths wont be interpreted

//number, boolean, string, char, array, object
//undefined, null

var myNum = 5.2354556
var myBool = false
var myString = "hi"
var myChar = "\n"
// not \n \n

var myArray = [1, "hi", 3, 4, 5]
// console.log(myArray)
myArray.push(6)
// console.log(myArray)
myArray[0] = "goodbye"
// console.log(myArray)

var testArray = [1,2,3,4,5] // change to [1,2,6,4,5]

var myObj = {
    first: "second"
}

console.log(myObj)

console.log(myObj.first)
console.log(myObj["first"])

myObj.first = "not second"

console.log(myObj)

myObj.k = "bye"
console.log(myObj)

delete myObj.k
console.log(myObj)

console.log(typeof myArray)