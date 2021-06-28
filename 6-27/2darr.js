let chessArray = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 1, 2, 3, 4, 5, 6, 7],
]

// console.log(chessArray[3][6])

// for (let i = 0; i < chessArray.length; i++) {
//     for (let j = 0; j < chessArray[0].length; j++) {
//         console.log(chessArray[i][j])
//         if (i == 5) {
//             chessArray.splice(5, 1)
//         }
//     }
// }

for (let i in chessArray) {
    for (let j in i) {
        console.log(chessArray[i][j])
        if (i == 5 || i == 6) {
            chessArray.splice(5, 1)
        }
    }
}

// for (let i of chessArray) {
//     for (let j of i) {
//         console.log(j)
//     }
// }

console.table(chessArray)


let delArr = [1, 2, 3, 4, 5]

// for (let i in delArr) {
//     if (delArr[i] == 2 || delArr[i] == 3) {
//         delArr.splice(i, 1)
//     }
// }

for (let i = delArr.length - 1; i >= 0; i--) {
    if (delArr[i] == 2 || delArr[i] == 3) {
        delArr.splice(i, 1)
    }
}
// 1, 2, 4, 5

console.log(delArr)