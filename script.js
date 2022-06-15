function deleteChild(element) {
    let queryElement = document.getElementById(element);
    let child = queryElement.lastElementChild;
    while (child) {
        queryElement.removeChild(child);
        child = queryElement.lastElementChild;
    }
}

function createGrid(number){

    for (let i=0; i < number; i++) {
        createLine(number);
    }
}

function createLine(number){
    let divLine = document.createElement('div');
    divLine.className = "line"
    container.appendChild(divLine);
    for (let i=1; i <= number; i++) {
        let div = document.createElement('div');
        div.className = "square";
        div.textContent = i
        divLine.appendChild(div);
    }
}


//Hover effect that changes square color
function changeColor(element) {

    let divArray = document.querySelectorAll(element);
    divArray.forEach((square) => {
            square.addEventListener("mouseenter", () =>{
                square.style.backgroundColor = "red"
            })
        });
}


const container = document.getElementById('container');
const body = document.getElementById('body');
//Create a 256 square div
createGrid(16);
changeColor(".square");

//create button
const numberButton = document.createElement('button');
numberButton.textContent = "click me";

numberButton.addEventListener("click", () => {
    let userNumber = Number(prompt("How many squares per side do you want to see?: "));
    if (userNumber > 100){
        alert("The limit is 100 squares per side. Try using another number.");
    } else {
        //clean elements from grid
        deleteChild("container");
        //create new grid
       createGrid(userNumber);
       changeColor(".square");
    }
});

body.appendChild(numberButton);






