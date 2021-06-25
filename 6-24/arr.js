// array literal
let literal = [1, 2, "five"]

// array constructor
let constructed = new Array(1, 2, "five")


//Adding variables to large index
let test = []

test[34] = "hi"
console.log(test)

// console.log(test[2])


//for each
let forTest = [1, 2, 3, 4, 5, 6]
forTest.forEach((num) => { // same as function (num) {}
    console.log(num)
})



//adding stuff to arrays
forTest.push(7) // 1234567
forTest.unshift(0) // 01234567
forTest = forTest.concat([8, 9]) //0123456789


//delete stuff from arrays
forTest.splice(8, 1) //012345679

let s = "h, e l l, o"
console.log(s.split(','))