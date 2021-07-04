let recurse = function(n) {
    if (n == 0) {
        console.log(n)
        return
    }

    console.log(n)
    recurse(n - 1)
}

// recurse(5)


let printx = function() {
    console.log(x)
}

let x = 5;

// printx()

let arr = [1, 2, 3, 4, 5]

// let travel = function(n) {
//     if (n == arr.length) {
//         return
//     }

//     console.log(arr[n])
//     n += 1;
//     travel(n)
// }

// travel(0)

let backwardsTravel = function(n) {
    if (n == -1) {
        return
    }

    console.log(arr[n])
    n -= 1;
    backwardsTravel(n)
}

backwardsTravel(arr.length - 1);