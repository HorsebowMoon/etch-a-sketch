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

//variables
const board = document.getElementById("board");

//code

createGrid(16);


