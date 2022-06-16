//functions
function createLine(number){
    let line = document.createElement("div");
    line.setAttribute("class", "line");

    for (let i = 0; i < number; i++){
        let square = document.createElement('div');
        square.setAttribute("class", "square");
        line.appendChild(square);
    };

    board.appendChild(line);
}

function createGrid(number){
    for (let i = 0; i < number; i++){
        createLine(number);
    };
}

function deleteGrid() {
    let board = document.getElementById("board");
    let first = board.firstElementChild;
    while (first) {
        first.remove();
        first = board.firstElementChild;
    }
}

function colorGrid(){
    const squares = document.querySelectorAll("div.square");

    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        }
        );
});
}

//variables

const buttonRow = document.createElement('div');
buttonRow.setAttribute("class", "buttonRow");
document.body.append(buttonRow);

const buttonSquares = document.createElement('button');
buttonSquares.textContent = "click me!"

const buttonClear = document.createElement('button');
buttonClear.textContent = "clear board"

buttonRow.appendChild(buttonSquares);
buttonRow.appendChild(buttonClear);

const board = document.getElementById("board");


//code

createGrid(16);



colorGrid();

buttonSquares.addEventListener("click", () => {
    let sideNumbers = Number(prompt("How many squares per side do you want? "));
    deleteGrid();
    createGrid(sideNumbers);
    colorGrid();
});