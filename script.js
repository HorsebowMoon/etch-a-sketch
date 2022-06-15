function deleteChild(element) {
    let queryElement = document.getElementById(element);
    let child = queryElement.lastElementChild;
    while (child) {
        queryElement.removeChild(child);
        child = queryElement.lastElementChild;
    }
}

function createGrid(number){
    for (let i=1; i <= number* number; i++) {
        let div = document.createElement('div');
        div.className = "square";
        div.textContent = i
        container.appendChild(div);
    }
}

function squareWidth(number){
     return eWidth = (1/number) * 100;
}

const container = document.getElementById('container');
const body = document.getElementById('body');

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
       let square = document.querySelectorAll(".square");

       square.style.width 
    }
});

body.appendChild(numberButton);


//Create a 256 square div
createGrid(16);


//Hover effect that changes square color
const divArray = document.querySelectorAll(".square");
divArray.forEach((square) => {
        square.addEventListener("mouseenter", () =>{
            square.style.backgroundColor = "red"
        })
    });

