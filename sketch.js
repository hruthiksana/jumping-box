var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1050,500);

    block1 = createSprite(0,490,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(325,490,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(600,490,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(900,490,200,30);
    block4.shapeColor = "yellow";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityY = 9;
    ball.velocityX = 8;
}

function draw() {
    background(rgb(225,146,146));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
       music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
      ball.VelocityY = 0;
      ball.VelocityX = 0;
        //write code to stop music
        music.stop();
    }

    //write code to bounce off ball from the block3

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green";
        music.play();
    }

    //write code to bounce off ball from the block4

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellow";
        music.play();
    }

    drawSprites();
}
