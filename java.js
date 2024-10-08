const btn = document.querySelector("button");

btn.addEventListener("click",()=> {mew = prompt("enter the number of grids");
grid(mew);} )


function grid(numberGrid){
const exits = document.querySelectorAll(".sketch")
exits.forEach((element) => element.remove());
if (numberGrid>=5&&numberGrid<=100){
const container = document.querySelector(".container")
const body = document.querySelector("body")
// const numberGrid = prompt("enter the number of grids")
for(j = 0;j<numberGrid;j++){
    const containerDiv = document.createElement("div");

for(i = 0;i<numberGrid;i++){
const div = document.createElement("div");
div.style.border = "solid .05px black";
div.style.width = `${700/numberGrid}px`;
div.style.height = `${700/numberGrid}px`;
div.className = "sketch";
div.style.backgroundColor="white";
div.addEventListener("mouseenter",()=>{
 if(div.style.backgroundColor=="white"){   
    div.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)} 
${Math.floor(Math.random()*256)} ${Math.floor(Math.random()*256)})`}
else{
    div.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)} 
${Math.floor(Math.random()*256)} ${Math.floor(Math.random()*256)})`
    

}
});



containerDiv.appendChild(div);
}
container.append(containerDiv);
}}
else{
    alert("entered number out of range")
}}
