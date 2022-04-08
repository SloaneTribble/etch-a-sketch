let dimension = 16;


const gridContainer = document.querySelector(".grid-container");
gridContainer.classList.add('row');
gridContainer.classList.add('column');

for(let i = 0; i < dimension; i++){

    const row = document.createElement('div');
    row.style.borderColor = "black";
    row.style.borderWidth = "5px";

    for(j = 0; j < dimension; j++){
        const column = document.createElement('div');
        column.style.width = "100%";
        column.style.padding = "100%";
        column.style.margin = "5px";
        column.style.textAlign = "center";
        column.style.height = "5px";
        column.style.width = "5px";
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

gridContainer.style.display = "flex";
gridContainer.style.flex = "1";
gridContainer.style.justifyContent = "space-between";




