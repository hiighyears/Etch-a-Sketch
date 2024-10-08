const container = document.querySelector(".container")
const body = document.querySelector("body")


// const numberGrid = prompt("enter the number of grids");
const numberGrid = 16;
for(j = 0;j<numberGrid;j++){
    const containerDiv = document.createElement("div")

for(i = 0;i<numberGrid;i++){
const div = document.createElement("div")
div.style.border = "solid 2px black"
div.style.width = "25px"
div.style.height = "25px"
div.className = "sketch"
containerDiv.appendChild(div)
}
container.append(containerDiv)
}







// containerDiv.append(div)}
// container.append(containerDiv)}