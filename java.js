const btn = document.querySelector("button");

btn.addEventListener("click",()=> {mew = prompt("enter the number of grids");
grid(mew);} )


function grid(numberGrid){
const exits = document.querySelectorAll(".sketch")
exits.forEach((element) => element.remove());
if (numberGrid>=5&&numberGrid<=45){
const container = document.querySelector(".container")
const body = document.querySelector("body")
// const numberGrid = prompt("enter the number of grids")
for(j = 0;j<numberGrid;j++){
    const containerDiv = document.createElement("div");

for(i = 0;i<numberGrid;i++){
const div = document.createElement("div");
div.style.border = "solid 2px black";
div.style.width = "25px";
div.style.height = "25px";
div.className = "sketch";
div.addEventListener("mouseenter",()=>div.style.backgroundColor="black");
containerDiv.appendChild(div);
}
container.append(containerDiv);
}}
else{
    alert("entered number out of range")
}}
