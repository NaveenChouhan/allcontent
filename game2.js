"use strict"
const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
canvas.style.backgroundImage = "url('../images/back.jpg')";
canvas.style.backgroundSize = "cover";



let hillset = 0;
let offset = 0;


let gravity = 0.3;


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



class Platform {
    constructor(x, y, width, height) {
        this.positionx = x;
        this.positiony = y;
        this.width = width;
        this.height = height;
    }
    draw()  {
       

        context.fillStyle = "black"
        context.fillRect(this.positionx, this.positiony, this.width, this.height);
    }

}




class Player {
    constructor() {
        this.positionx = 100;
        this.positiony = 100;
        this.velocity = {
            x: 0, y: 1
        };
        this.height = 40;
        this.width = 40;
       

    }

    draw() {
       

        context.fillStyle = "red"
        context.fillRect(this.positionx, this.positiony, this.width, this.height);
    }
    update() {
        

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

                ((this.positiony + this.height+this.velocity.y) >= platformsArray[i].positiony) &&
                ((this.positiony < platformsArray[i].positiony + platformsArray[i].height + 10))
            ) {
                this.velocity.y = 0;
            }
        }



        


        this.positionx += this.velocity.x;
        this.positiony += this.velocity.y;

        this.draw();

    }


}

let hillsArray = [];

const hillsFigure = new Hills(0, 100);

hillsArray.push(hillsFigure);

let platformsArray = [];

const platform = new Platform(250, 650, 100, 20);
const platform1 = new Platform(500, 550, 100, 20);
const platform2 = new Platform(800, 450,100, 20);
const platform3 = new Platform(1000, 500, 100, 20);





platformsArray.push(platform);
platformsArray.push(platform1);
platformsArray.push(platform2);
platformsArray.push(platform3);




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
    
}


animate();
addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight") {
        
        player.velocity.x =4;
        if (player.positionx + player.width > 500) {
            moveOffset(-5);
            hillsMovement(-5);
        }

        
    }
    if (event.key == "ArrowLeft") {
        
        player.velocity.x = -4;
        if (player.positionx + player.width > 400) {
            moveOffset(5);
            hillsMovement(5);
        }
        
    }
    if (event.key == "ArrowUp") {
        //if (player.positiony + player.height > canvas.height - 10)
        player.velocity.y += -13 + gravity;
    }
});
addEventListener("keyup", function (event) {
    if (event.key == "ArrowRight") {
        player.velocity.x = 0;
    }
    if (event.key == "ArrowLeft") {
        player.velocity.x = 0;
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