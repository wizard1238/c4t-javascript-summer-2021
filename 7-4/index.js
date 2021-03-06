window.onload = () => {
    document.getElementById("fireworks").addEventListener('click', toggle)
    document.getElementById("cycle").addEventListener('click', cycle)
    hide2()
    hide3()
}

let shown = true
let toggle = function() { // should toggle through all fireworks
    if (shown) {
        hideAll()
        shown = false
    } else {
        showAll()
        shown = true
    }
    
}



// Helper Functions
let showAll = function() {
    document.getElementById("images").hidden = false;
}

let hideAll = function() {
    document.getElementById("images").hidden = true;
}

let show1 = function() {
    document.getElementById("1").hidden = false;
}

let show2 = function() {
    document.getElementById("2").hidden = false;
}

let show3 = function() {
    document.getElementById("3").hidden = false;
}

let hide1 = function() {
    document.getElementById("1").hidden = true;
}

let hide2 = function() {
    document.getElementById("2").hidden = true;
}

let hide3 = function() {
    document.getElementById("3").hidden = true;
}

let states = [true, false, false] // states[0] == true, states[1] == false
let showFuncs = [show1, show2, show3]
let hideFuncs = [hide1, hide2, hide3]

let cycle = function() { // should cycle through all the different fireworks
    for (let i = 0; i < states.length; i++) {
        if (states[i]) {
            let nextIndex = (i + 1 > states.length - 1) ? 0 : i + 1

            states[i] = false
            hideFuncs[i]()

            states[nextIndex] = true
            showFuncs[nextIndex]()
            break;
        }
    }
}