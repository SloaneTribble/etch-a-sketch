let dimension = 10;


const gridContainer = document.querySelector(".grid-container");
gridContainer.style.display = "flex";
gridContainer.style.flexDirection = "column";
gridContainer.style.alignSelf = "center";
gridContainer.style.justifySelf = "center";
gridContainer.style.width = "500px";
gridContainer.style.height = "500px";

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

const outerContainer = document.querySelector(".outer-container");

outerContainer.style.width = "500px";
outerContainer.style.height = "500px";
outerContainer.style.display = "flex";
outerContainer.style.flex = "1";

document.body.appendChild(outerContainer);











