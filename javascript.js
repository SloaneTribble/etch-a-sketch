
const gridContainer = document.querySelector(".grid-container");
gridContainer.style.backgroundColor = "white";
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
    for(let i = 0; i < dimension; i++){

        const row = document.createElement('div');
        row.classList.add('cell');
        gridContainer.appendChild(row);
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
                column.style.backgroundColor = randomColor();
            })
        }
        gridContainer.appendChild(row);
    }
}

function opaqueGrid(dimension){
    gridContainer.style.border = "thin solid black";
    for(let i = 0; i < dimension; i++){

        const row = document.createElement('div');
        row.classList.add('cell');
        gridContainer.appendChild(row);
        row.style.display = "flex";
        row.style.flex = "1";
        row.style.flexFlow = "row-wrap";
    
        for(j = 0; j < dimension; j++){
            const column = document.createElement('div');
            column.style.flex = "1";
            column.style.border = "thin solid black";
            column.style.backgroundColor = "black";
            column.style.opacity = "0";
            row.appendChild(column);
            column.addEventListener("mouseover", () => {
                let opacity = Number(column.style.opacity);
                column.style.opacity = opacity >= 1 ? "1" : opacity + .1 + "";
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

generateGrid(16);

let plainMode = true;
let rainbowMode = false;
let opaqueMode = false;

const plain = document.querySelector(".plain");
plain.addEventListener('click', () => {
    rainbowMode = false;
    opaqueMode = false;
    plainMode = true;
    gridContainer.innerHTML = '';
    generateGrid(slider.value);
});

const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener('click', () => {
    rainbowMode = true;
    opaqueMode = false;
    plainMode = false;
    gridContainer.innerHTML = '';
    rainbowGrid(slider.value);
})

const opaque = document.querySelector(".opaque");
opaque.addEventListener('click', () => {
    rainbowMode = false;
    opaqueMode = true;
    plainMode = false;
    gridContainer.innerHTML = '';
    opaqueGrid(slider.value);
})

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value * slider.value;

slider.oninput = function (){
    output.innerHTML = this.value * this.value;
    gridContainer.innerHTML = '';
    switch(true){
        case rainbowMode: rainbowGrid(this.value);
        break;
        case opaqueMode: opaqueGrid(this.value);
        break;
        case plainMode: generateGrid(this.value);
        break;
    }
}
















