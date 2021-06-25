let car = { color: 'Hot Red', engine: 'Powerhouse' };
let carDetails = "";
for (let p in car) {
    carDetails += (p + " ");
}

console.log(carDetails) //what does this output


let car2 = {wheels: 4, color: "blue", speed: "fast", model: "civic"}
for (let p of car2) {
    console.log(p)
}


let arr = [1, 2, 3, 4, 5]
for (let a in arr) {
    console.log(a)
}

//while loop
let i = 5
while (i < 5) {
    console.log("hello")
    i++
}

//do while
do {
    console.log('hello')
    i++
} while (i < 5)

//for loop
for (let i = 0; i < 5; i++) {
    console.log('hello')
}
for (; i < 5; ) {

}


//for in
let testArr = ["jeremy", "tow", "red", "color"]
for (let i in testArr) {
    console.log(testArr[i])
}

// for of
for (let i of testArr) {
    console.log(i)
}
i = 11
while (i > 10) {
    // going to run forever
    i++
}