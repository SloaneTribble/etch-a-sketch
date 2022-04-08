let dimension = 100;


const gridContainer = document.querySelector(".grid-container");
gridContainer.classList.add('row');
gridContainer.classList.add('column');

for(let i = 0; i < dimension; i++){

    const row = document.createElement('div');
    row.style.display = "flex";
    row.style.flexDirection = "column";
    row.style.borderColor = "black";
    row.style.borderWidth = "5px";

    for(j = 0; j < dimension; j++){
        const column = document.createElement('div');
        column.style.width = "5px"; // 
        column.style.padding = "5px"; // Removing lines 18-20 causes squares to disappear
        column.style.margin = "5px"; //
        column.style.flexGrow = "1";
        column.style.flexShrink = "1";
        column.style.borderWidth = "5px";
        column.style.borderColor = "black";
        column.style.backgroundColor = "pink";
        row.appendChild(column);
        column.addEventListener("mouseover", () => {
            column.style.backgroundColor = "white";
        })
    }
    gridContainer.appendChild(row);
}

const outerContainer = document.querySelector("outer-container");


gridContainer.style.display = "flex";
gridContainer.style.flexGrow = "1";
gridContainer.style.justifyContent = "space-between";



