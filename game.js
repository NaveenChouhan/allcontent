/*let title=document.querySelector("#title");
let lifeline=document.querySelector("#lifeline");
let verify=document.querySelector("#verify");
let letter=document.querySelector("#letter");
let array=["GOLF","POLO","LUDO","JUDO"];
let correct=[];

let data=array[0];

function enclosed(data)
{
    let str="";
    for(i=0;i<data.length;i++);
    
    
{
    if(correct.indexOf(data[i]!=-1))
        str=str+data[i];
    else
    str=str+"*";
}
 
title.innerHTML=str;

}
enclosed(data);*/
const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "#ff8";

//for drawing

const context = canvas.getContext("2d");
/*context.beginPath();

context.fillStyle="red";
context.fillRect(100,100,20,20);



context.fillRect(200,200,40,40);

let grd=context.createLinearGradient(200,400,500,400,200,200);
grd.addColorStop(0,"yellow");
grd.addColorStop(1,"grey");
context.fillStyle=grd;
context.fillRect(300,300,400,400);

context.lineWidth=5;
context.strokeStyle="red";
context.moveTo(10,10);
context.lineTo(700,700);
context.stroke();
context.closepath();*/

/*context.beginPath();
context.arc(100,100,50,0,2*Math.PI);
context.stroke();
context.closePath();*/

/*addEventListener("click",function(event){
    context.beginPath();
    context.arc(event.x,event.y,50,0,2*Math.PI);
    context.stroke();
    context.closePath();
})*/

/*addEventListener("mousemove",function(event){
    context.beginPath();
    context.arc(event.x,event.y,50,0,2*Math.PI);
    context.stroke();
    context.closePath();
})*/


/*addEventListener("mousemove",function(event){
    context.clearRect(0,0,canvas.width,canvas.height);
    context.beginPath();
    context.arc(event.x,event.y,50,0,2*Math.PI);
    context.stroke();
    context.closePath();
})*/

context.fillRect(100, 100, 60, 60);


context.fillStyle = "red";
let x = 100;
let y = 100;
addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight") {
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.fillRect(x, 100, 60, 60);

        x = x + 1;
    }
    if (event.key == "ArrowLeft") {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(x, 100, 60, 60);
        x = x - 1;
    }
    if (event.key == "ArrowUp") {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(100, y, 60, 60);
        y = y - 1;
    }
    if (event.key == "ArrowDown") {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(100, y, 60, 60);
        y = y + 1;
    }
})
