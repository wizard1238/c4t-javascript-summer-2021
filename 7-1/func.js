let add = function(x, y) {
    let total = x + y;
    if (total <= 5) {
        return;
    }

    return total;
}

// console.log(add(1, 2));

// function myFunc() {

// }

// let myFunc = function() {

// }

// This is a sentence : thisIsASentence

let x = 5;
let myFunc = function(x, func) {
    console.log(x)
    console.log(this.x)
    func()
}

// let callbackFunc = function() {
//     console.log("im a callback")
// }

myFunc(6, () => {
    console.log("im a callback")
})



let arrowFunc = (x) => {
    console.log(x)
}
arrowFunc()

let testFunc = () => {

}


