const container = document.getElementById('container');
const body = document.getElementById('body');

//create button
const numberButton = document.createElement('button');
numberButton.textContent = "click me";
body.appendChild(numberButton);


//Create a 256 square div
for (let i=1; i <= 256; i++) {
    let div = document.createElement('div');
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.border = "1px solid black";
    div.style.backgroundColor = "lightblue";
    div.className = "square";
    //div.textContent = div.className;
    container.appendChild(div);
}

//Hover effect that changes square color
const divArray = document.querySelectorAll(".square");
divArray.forEach((square) => {
        square.addEventListener("mouseenter", () =>{
            square.style.backgroundColor = "red"
        })
    });

