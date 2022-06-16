//functions
function createLine(number){ //Gride line
    let line = document.createElement("div");
    line.setAttribute("class", "line");

    for (let i = 0; i < number; i++){
        let square = document.createElement('div');
        square.setAttribute("class", "square");
        line.appendChild(square);
    };

    board.appendChild(line);
}

function createGrid(number){ //Whole grid
    for (let i = 0; i < number; i++){
        createLine(number);
    };
}

function deleteGrid() { //deletes every line before setting new ones
    let board = document.getElementById("board");
    let first = board.firstElementChild;
    while (first) {
        first.remove();
        first = board.firstElementChild;
    }
}

function blackColorGrid(){ //changes squares color to black
    const squares = document.querySelectorAll("div.square");

    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        }
        );
});
}

function blackMode(){ //black mode button
    blackColorButton.addEventListener("click", () => {
        blackColorGrid()
    });
}



function clearGrid(){ //turns squares back to white
    const squares = document.querySelectorAll("div.square");
    buttonClear.addEventListener("click", () => {
        squares.forEach((square) => {
            square.style.backgroundColor = "white";
        });
        
    });
}

function resetGrid(){ //turns the grid back to 16x16
    resetButton.addEventListener("click", () => {
        deleteGrid()
        createGrid(16);
        blackColorGrid();
        clearGrid();
    })
    
}

function randomRGBA(){ //generates random color
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function rainbowColor(){ //rainbow color mode
    const squares = document.querySelectorAll('div.square');
    
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = randomRGBA();
        })
    })
}

function rainbowButton(){ //activates rainbow color mode
    rainbowColorButton.addEventListener("click", () =>{
        rainbowColor();
    })
}

//variables

const buttonRow = document.createElement('div');
buttonRow.setAttribute("class", "buttonRow");
document.body.append(buttonRow);

const buttonSquares = document.createElement('button');
buttonSquares.textContent = "number of squares";

const buttonClear = document.createElement('button');
buttonClear.textContent = "clear board";

const resetButton = document.createElement('button');
resetButton.textContent = "reset";

const rainbowColorButton = document.createElement('button');
rainbowColorButton.textContent = "rainbow mode";

const blackColorButton = document.createElement('button');
blackColorButton.textContent = "black mode";

buttonRow.appendChild(buttonSquares);
buttonRow.appendChild(buttonClear);
buttonRow.appendChild(resetButton);
buttonRow.appendChild(blackColorButton);
buttonRow.appendChild(rainbowColorButton)

const board = document.getElementById("board");

function defaultGrid(){
    createGrid(16);
    blackColorGrid();
}

//GRID CODE

defaultGrid()
clearGrid();
resetGrid();
blackMode();
rainbowButton();


buttonSquares.addEventListener("click", () => {
    let sideNumbers = Number(prompt("How many squares per side do you want? "));
    if (sideNumbers > 100) {
        alert("Try another number. 100 squares per side is the limit!")
    } else {
        deleteGrid();
        createGrid(sideNumbers);
        clearGrid();
        blackColorGrid();
    }
});

// tittle CODE

const title = document.createElement('h1');
title.textContent = "ETCH-A-SKETCH";
document.body.appendChild(title);

