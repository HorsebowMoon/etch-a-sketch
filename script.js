const container = document.getElementById('container');

//Create a 256 square div
for (let i=1; i <= 256; i++) {
    let div = document.createElement('div');
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.border = "1px solid black";
    div.style.backgroundColor = "lightblue";
    container.appendChild(div);
}


