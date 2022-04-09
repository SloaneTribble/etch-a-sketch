
const gridContainer = document.querySelector(".grid-container");
gridContainer.style.display = "flex";
gridContainer.style.flexDirection = "column";
gridContainer.style.width = "700px";
gridContainer.style.height = "700px";

function generateGrid(dimension){
    for(let i = 0; i < dimension; i++){

        const row = document.createElement('div');
        row.style.display = "flex";
        row.style.flex = "1";
        row.style.flexFlow = "row-wrap";
    
        for(j = 0; j < dimension; j++){
            const column = document.createElement('div');
            column.style.flex = "1";
            column.style.border = "thin solid black";
            column.style.backgroundColor = "white";
            row.appendChild(column);
            column.addEventListener("mouseover", () => {
                column.style.backgroundColor = "black";
            })
        }
        gridContainer.appendChild(row);
    }
}

function rainbowGrid(dimension){
    rainbowMode = true;
    for(let i = 0; i < dimension; i++){

        const row = document.createElement('div');
        row.style.display = "flex";
        row.style.flex = "1";
        row.style.flexFlow = "row-wrap";
    
        for(j = 0; j < dimension; j++){
            const column = document.createElement('div');
            // column.style.minWidth = "1px"; // 
            // column.style.minHeight = "1px"; // Removing lines 18-19 causes squares to disappear
            column.style.flex = "1";
            column.style.border = "thin solid black";
            column.style.backgroundColor = "white";
            row.appendChild(column);
            column.addEventListener("mouseover", () => {
                column.style.backgroundColor = randomColor();
            })
        }
        gridContainer.appendChild(row);
    }
}

function randomColor(){
    let number = Math.floor(Math.random()*7) + 1;
    let color = "";
    switch(number){
        case 1: color = "red";
        break;
        case 2: color = "orange";
        break;
        case 3: color = "yellow";
        break;
        case 4: color = "green";
        break;
        case 5: color = "blue";
        break;
        case 6: color = "indigo";
        break;
        case 7: color = "violet";
        break;
    }
    return color;
}

generateGrid(16, "white");

let rainbowMode = false;

const reset = document.querySelector(".reset");
reset.addEventListener('click', () => {
    rainbowMode = false;
    gridContainer.innerHTML = '';
    generateGrid(slider.value);
});

const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    rainbowGrid(slider.value);
})

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value * slider.value;

slider.oninput = function (){
    output.innerHTML = this.value * this.value;
    gridContainer.innerHTML = '';
    (rainbowMode) ? rainbowGrid(this.value) : generateGrid(this.value);
    // generateGrid(this.value);
}














