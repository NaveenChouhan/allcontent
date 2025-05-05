/*const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "lightPink";


const context = canvas.getContext("2d");

class Circle
{
    constructor(x,y,radius,color)
    {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;
    }

    draw()
    {
        context.beginPath();
        context.fillStyle=this.color;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.stroke();
        context.fill();
        context.closePath();

    }
}

let circles=[]
for(i=1;i<=10;i++)
{
    let c=new Circle(100+i*50,100+i*50,5+i*5,"red");
    circles.push(c);
    

}


for(i=0;i<10;i++)
circles[i].draw();*/



/*const canvas = document.querySelector("#canvas");
canvas.width = 800;
canvas.height = 500;
canvas.style.background = "lightPink";



const context = canvas.getContext("2d");
let redBtn=document.querySelector("#redBtn");
let greenBtn=document.querySelector("#greenBtn");
let blueBtn=document.querySelector("#blueBtn");
let drawBtn=document.querySelector("#drawBtn");

redBtn.addEventListener("click",redColor);
blueBtn.addEventListener("click",blueColor);
greenBtn.addEventListener("click",greenColor);
drawBtn.addEventListener("click",drawColor);

function redColor()
{
    brushColor="red"
}
function blueColor()
{
    brushColor="blue"
}
function greenColor()
{
    brushColor="green"
}
function drawClick()
{
   
}*/

/*const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "lightPink";


const context = canvas.getContext("2d");

class Circles
{
    factorx=1;
    factory=1;
    constructor(x,y,radius,color)
    {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;
    }

    draw()
    {
        context.beginPath();
        context.fillStyle=this.color;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.fill();
        context.closePath();

    }



update(){

this.x=this.x+this.factorx;
this.y=this.y+this.factory;
context.clearRect(0,0,canvas.width,canvas.height);
 this.draw();
if((this.y+this.radius)>=canvas.height)
{
    
    this.factory=-1;
}
if((this.y-this.radius)<=0)
{
    this.factory=1;
}
if((this.x+this.radius)>=canvas.width)
{
    this.factorx=-1;
}
if((this.x-this.radius)<=0)
    {
        this.factorx=1;
    }
    
}
}
let c= new Circles(100,100,50,"red");
c.draw();
function updateAnimation()
{
    requestAnimationFrame(updateAnimation);
    c.update();
}
updateAnimation();*/


/*const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "lightPink";


const context = canvas.getContext("2d");


let isClicked=false;
addEventListener("click",function(event){
    isClicked=true;
});

class Circles
{
    factorx=1;
    factory=1;
    counter=0;

    setData()
    {
        this.x=x;
        this.y=y;
    }
    constructor(x,y,radius,color)
    {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;
    }

    draw()
    {
        if(isClicked==true){
        context.beginPath();
        context.fillStyle=this.color;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.fillText(this.counter,this.x,this.y);
         context.textAlign="center";
          context.font="25px Arial"
          context.stroke();
       // context.fill();
        context.closePath();

    }}



update(){

this.x=this.x+this.factorx;
this.y=this.y+this.factory;

 this.draw();
if((this.y+this.radius)>=canvas.height)
{
    
    this.factory=-1;
    this.counter++;
}
if((this.y-this.radius)<=0)
{
    this.factory=1;
    this.counter++;
}
if((this.x+this.radius)>=canvas.width)
{
    this.factorx=-1;
    this.counter++;
}
if((this.x-this.radius)<=0)
    {
        this.factorx=1;
        this.counter++;
    }
    
}
}
let circles=[];
for(i=1;i<=10;i++){
    //let c=new Circles(100+i*50,100+i*50,5+i*5,"red");
  // let c=new Circles(60+i*60,60+i*60,50,"red");
   let c= new Circles(Math.random()*1000,Math.random()*1000,50,"red");
    c.draw();
    circles.push(c);
}

//let c= new Circles(100,100,50,"green");
//c.draw();
function updateAnimation(event)
{
    requestAnimationFrame(updateAnimation);
    this.x=event.x;
    this.y=event.y;
    context.clearRect(0,0,canvas.width,canvas.height);
    //c.update();
    for(i=0;i<circles.length;i++)
        circles[i].update();
}
addEventListener("click",updateAnimation);*/

/*const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "aqua";


const context = canvas.getContext("2d");

const img = new Image();
img.src = "images/mario.png";
img.onload = function () {
    context.drawImage(img, 0,0);
}*/

const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "lightPink";


const context = canvas.getContext("2d");


class Circles
{
    factorx=1;
    factory=1;
    constructor(x,y,radius,color)
    {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;
    }

    draw()
    {
        context.beginPath();
        context.strokeStyle=this.color;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.stroke();
        context.closePath();
    }
    update(){

        this.x=this.x+this.factorx;
        this.y=this.y+this.factory;
        
         this.draw();
        if((this.y+this.radius)>=canvas.height)
        {
            
            this.factory=-1;
            
        }
        if((this.y-this.radius)<=0)
        {
            this.factory=1;
            
        }
        if((this.x+this.radius)>=canvas.width)
        {
            this.factorx=-1;
            
        }
        if((this.x-this.radius)<=0)
            {
                this.factorx=1;
               
            }
            
        }
        }
    
    let c2=new Circles(200,200,50,"red");
c2.draw();
addEventListener("click",function(e){
    if(getDistance(e.x,e.y,c2.x,c2.y)<=40)
    {
        c2.color="green";
        c2.draw();
    }

})

function getDistance(x1,y1,x2,y2)
{
    let distance=Math.sqrt(Math.pow(x2-x1),2)+Math.pow((y2-y1));
    return distance;
}
let c=new Circles(100,100,50,"green");
c.draw();

function updateAnimation()
{
    requestAnimationFrame(updateAnimation);
    context.clearRect(0,0,canvas.width,canvas.height);
     c.draw();
     c.update();
     c2.draw();
}
updateAnimation();
