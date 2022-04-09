let dimension = 10;


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
            // column.style.minWidth = "1px"; // 
            // column.style.minHeight = "1px"; // Removing lines 18-19 causes squares to disappear
            column.style.flex = "1";
            column.style.border = "thin solid black";
            column.style.backgroundColor = "pink";
            row.appendChild(column);
            column.addEventListener("mouseover", () => {
                column.style.backgroundColor = "white";
            })
        }
        gridContainer.appendChild(row);
    }
}

generateGrid(dimension);

const button = document.querySelector(".reset");
button.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    generateGrid(5);
});

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function (){
    output.innerHTML = this.value;
    gridContainer.innerHTML = '';
    generateGrid(this.value);
}














