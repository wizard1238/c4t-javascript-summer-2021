
var p1 = "password"
var p2 = "password2"

if (p1 == p2) {
    console.log("signed up")
} else {
    console.log("passwords are not identical")
}



var guess = 4

if (guess == 7) {
    console.log("you guessed correctly")
} else if (guess < 7) {
    console.log("too low")
} else if (guess > 7) {
    console.log("too high")
} else {
    console.log("enter a number")
}

if (guess > 100) {
    console.log("far too high")
} else if (guess > 10) {
    console.log(" a little too high")
}