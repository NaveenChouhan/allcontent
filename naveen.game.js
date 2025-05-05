"use strict"
const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
canvas.style.backgroundImage = "url('../images/back.jpg')";
canvas.style.backgroundSize = "cover";



let hillset = 0;
let offset = 0;
/*class player{
    constructor(){
        this.position={x:100,y:100};
        this.velocity={x:0,y:0};
        this.width=30;
        this.height=30;
    }



draw()
{
    context.fillRect(this.position.x,this.position.y,this.width,this.height);
}
playermovement()
{
   
    addEventListener("keydown",function(e){
        if(e.key=="ArrowRight"){
            context.clearRect(0,0,canvas.width,canvas.height);
            this.velocity.x=0;
            this.position.y+=this.velocity.y;
            this.draw();
            
        }
        playermovement()
        {
            if((player.height+this.position.x+=this.velocity.x;)<=canvas.height){
                this.velocity.y=1;
                this.position.y+=this.velocity.y+gravity;
                this.draw();
            }
        }
    
        
    }

addEventListener("keydown",function(e){
        if(e.key=="ArrowRight"){
            this.velocity.x=1;
            player.position.x+=playerFigure.velocity.x;
        }
    })
let players=new player();
players.draw();
players.playermovement();


function gameAnimation(){
    requestAnimationFrame(gameAnimation);
    context.clearRect(0,0,canvas.width,canvas.height);
    players.draw();
}
gameAnimation();*/

let gravity = 0.3;
let key="";


class Hills {
    constructor(x, y) {
        this.positionx = x;
        this.positiony = y;
    }
    draw() {
        let hills = new Image();
        hills.src = "images/hills.png";
        context.drawImage(hills, this.positionx, this.positiony);
    }

}

let playerStandRightimg = new Image();
playerStandRightimg.src = "../images/spriteStandRight.png";

let playerStandLeftimg = new Image();
playerStandLeftimg.src = "../images/spriteStandLeft.png";

let playerRunRightimg = new Image();
playerRunRightimg.src = "../images/spriteRunRight.png";

let playerRunLeftimg = new Image();
playerRunLeftimg.src = "../images/spriteRunLeft.png";

class Platform {
    constructor(x, y, width, height) {
        this.positionx = x;
        this.positiony = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        let platforms = new Image();
        platforms.src = "images/platform.png";
        context.drawImage(platforms, this.positionx, this.positiony, this.width, this.height);
    }

}

class smallPlatform {
    constructor(x, y, width, height) {
        this.positionx = x;
        this.positiony = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        let platforms = new Image();
        platforms.src = "images/platformSmallTall.png";
        context.drawImage(platforms, this.positionx, this.positiony, this.width, this.height);
    }

}


class Player {
    constructor() {
        this.positionx = 100;
        this.positiony = 100;
        this.velocity = {
            x: 0, y: 1
        };
        this.height = 150;
        this.width = 66;
        this.frames = 1;

    }

    draw() {
        if (this.velocity.y == 0 && this.velocity.x==0){
            if(key=="right")
            context.drawImage(playerStandRightimg, 177 * this.frames, 0, 177, 400, this.positionx, this.positiony, this.width, this.height);
            if(key=="left")
            context.drawImage(playerStandLeftimg, 177 * this.frames, 0, 177, 400, this.positionx, this.positiony, this.width, this.height);
}
        if (this.velocity.x > 0)
            context.drawImage(playerRunRightimg, 340 * this.frames, 0, 340, 400, this.positionx, this.positiony, 120, this.height);
        if (this.velocity.x < 0)
            context.drawImage(playerRunLeftimg, 340 * this.frames, 0, 340, 400, this.positionx, this.positiony, 120, this.height);



        //context.fillStyle = "red"
        // context.fillRect(this.positionx, this.positiony, this.width, this.height);
    }
    update() {
        this.frames++;
        if (this.frames > 24)
            this.frames =1;

        this.positionx += this.velocity.x;
        this.positiony += this.velocity.y;
        this.velocity.y += gravity;
        if ((this.positiony + this.height) >= canvas.height) {
            this.positiony = canvas.height - this.height;
            this.velocity.y = 0;

        }

        for (let i = 0; i < platformsArray.length; i++) {
            if (

                ((this.positionx + this.width + this.velocity.x) > platformsArray[i].positionx) &&
                ((this.positionx + this.width) <= platformsArray[i].positionx + platformsArray[i].width) &&

                ((this.positiony + this.height) >= platformsArray[i].positiony) &&
                ((this.positiony < platformsArray[i].positiony + platformsArray[i].height + 10))
            ) {
                this.velocity.y = 0;
            }
        }



        /* if (
             ((this.positionx + this.width + this.velocity.x) > platform1.positionx) &&
             ((this.positionx + this.width) <= platform1.positionx + platform1.width) &&
 
             ((this.positiony + this.height) >= platform1.positiony) &&
             ((this.positiony < platform1.positiony + platform1.height + 10))
         ) {
             this.velocity.y = 0;
 
 
         }*/


        this.positionx += this.velocity.x;
        this.positiony += this.velocity.y;

        this.draw();

    }


}

let hillsArray = [];

const hillsFigure = new Hills(0, 100);

hillsArray.push(hillsFigure);

let platformsArray = [];

const platform = new Platform(0, 650, 800, 200);
const platform1 = new Platform(platform.width - 1, 650, 800, 200);
const platform2 = new Platform(platform.width * 2 - 2, 650, 800, 200);
const platform3 = new Platform(platform.width * 3 - 3, 650, 800, 200);
const platform4 = new smallPlatform(3500, 600,  800, 400);
//const platform4 = new smallPlatform(platform.width * 4 - 4, 650, 800, 200);
/*const platform5 = new Platform(platform.width * 5 - 5, 650, 800, 200);
const platform6 = new Platform(platform.width * 6 - 6, 650, 800, 200);
const platform7 = new Platform(platform.width * 7 - 7, 650, 800, 200);
const platform2 = new Platform(600, 600, 800, 200);
const platform3 = new Platform(800, 300, 800, 200);
const platform4 = new Platform(1000, 200, 800, 200);
const platform5 = new Platform(1400, 600, 800, 200);
const platform6 = new Platform(1600, 400, 800, 200);
const platform7 = new Platform(1800, 600, 800, 200);*/





platformsArray.push(platform);
platformsArray.push(platform1);
platformsArray.push(platform2);
platformsArray.push(platform3);
platformsArray.push(platform4);
/*platformsArray.push(platform5);
platformsArray.push(platform6);
platformsArray.push(platform7);*/



let player = new Player();
player.draw();


function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);

    for (let i = 0; i < hillsArray.length; i++) {
        hillsArray[i].draw();
    }

    for (let i = 0; i < platformsArray.length; i++) {
        platformsArray[i].draw();
    }
    player.update();
    //player.draw();
    //  platform.draw();
    //platform1.draw();
}


animate();
addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight") {
        key="right";
        player.velocity.x =6;
        if (player.positionx + player.width > 500) {
            moveOffset(-5);
            hillsMovement(-5);
        }

        if(player.positionx + player.width > 500){
            player.positionx=500;
        }
    }
    if (event.key == "ArrowLeft") {
        key="left";
        player.velocity.x = -4;
        if (player.positionx + player.width > 400) {
            moveOffset(5);
            hillsMovement(5);
        }
        if(player.positionx + player.width > -500){
            player.positionx=500;
        }
    }
    if (event.key == "ArrowUp") {
        //if (player.positiony + player.height > canvas.height - 10)
        player.velocity.y += -24 + gravity;
    }
});
addEventListener("keyup", function (event) {
    if (event.key == "ArrowRight") {
        player.velocity.x = 0;
    }
    if (event.key == "ArrowLeft") {
        player.velocity.x = 0;
    }
    if (event.key == "ArrowUp") {
        player.velocity.y = 1;
    }

});

function moveOffset(x) {
    offset += x;
    for (let i = 0; i < platformsArray.length; i++) {
        platformsArray[i].positionx += x;
    }
}

function hillsMovement(a) {
    hillset += a;
    for (let i = 0; i < hillsArray.length; i++) {
        hillsArray[i].positionx += a;
    }
}
moveOffset(-5);
hillsMovement(-5);