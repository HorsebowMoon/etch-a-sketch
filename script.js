const container = document.getElementById('container');
const body = document.getElementById('body');

//create button
const numberButton = document.createElement('button');
numberButton.textContent = "click me";

numberButton.addEventListener("click", () => {
    let userNumber = Number(prompt("How many squares per side do you want to see?: "));
    if (userNumber > 100){
        alert("The limit is 100 squares per side. Try using another number.");
    } 
});

body.appendChild(numberButton);


//Create a 256 square div
for (let i=1; i <= 256; i++) {
    let div = document.createElement('div');
    div.className = "square";
    div.textContent = i
    container.appendChild(div);
}

//Hover effect that changes square color
const divArray = document.querySelectorAll(".square");
divArray.forEach((square) => {
        square.addEventListener("mouseenter", () =>{
            square.style.backgroundColor = "red"
        })
    });

