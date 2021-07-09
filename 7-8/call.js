let callback = function() {
    print("hi, im a callback")
}

let main = function(func) {
    func()
}

main(() => {
    print("hi, im a callback")
})

main(function() {
    print("hi, im a callback")
})



// let dl
// let dlFunc = function(callback) {
//     let dl = downloadSmth()
//     callback()
// }

// let dlCallback = function() {
//     console.log(dl)
// }

// dlFunc(dlCallback)