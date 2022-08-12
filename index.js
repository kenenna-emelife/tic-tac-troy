let lastvalue = 'o';
let display = document.getElementById("display");
display.textContent = "player 1 play"

let boxes = document.querySelectorAll(".box")

for (let box of boxes) {
    box.addEventListener("click", () => { 
        if (box.textContent !== "") {
              return;
        }
       
        if (lastvalue === "o") {
            box.textContent = "x"
            
            lastvalue = "x"
            display.textContent = 'player 1 play';
            checkstatus()
            checkdraw()
        } else {
            box.textContent = "o"
            lastvalue = "o"
            display.textContent = 'player 2 play'
            checkstatus()
            checkdraw()
        }
    })
}
let control = document.getElementById("controlbtn")
controlbtn.addEventListener('click', () => {
    window.location.href = "tic.html"
})

function checker(first, second, third) {
    if (
        boxes[first].textContent === "x" &&
        boxes[second].textContent === "x" &&
        boxes[third].textContent === "x"
    ) {
        disablebuttonswhengamesiswon("player 1")
        
    } else if (
        boxes[first].textContent === "o" &&
        boxes[second].textContent === "o" &&
        boxes[third].textContent === "o") {
        disablebuttonswhengamesiswon("player 2")
        
    }
}

function checkstatus() {
    checker(0, 1, 2)
    checker(3, 4, 5)
    checker(6, 7, 8)
    checker(0, 3, 6)
    checker(1, 4, 7)
    checker(2, 5, 8)
    checker(0, 4, 8)
    checker(2, 4, 6)
}
function disablebuttonswhengamesiswon(player) {
    for (let box of boxes) {
        if (box.textContent === "") {
            box.toggleAttribute("disabled")
        }
    }
    display.textContent = player + "won the game"
    
}
function checkdraw() {
    for (let box of boxes) {
        if (box.textContent === "") {
           return
        }
    }
    display.textContent = "Draw"
}
