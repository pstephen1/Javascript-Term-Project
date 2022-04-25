/* Bouncy Sticks is basically pong.*/

/* Variable declarations to create storage for scores as well as the canvas itself.*/

var gameSpace = document.getElementById("sticksGame");
var ctx = gameSpace.getContext("2d");
var scorePlayer = 0;
var scorePC = 0;

//Generates the game space

gameSpace.width = 780;
gameSpace.height = 450;

//Creates objects to contain user and computer paddles. Defines X / Y starting locations, height and width of paddles, and paddle colors.

const user = {
    x: 0,
    y: gameSpace.height / 2,
    width: 25,
    height: 125,
    color: "blue",
}

const computer = {
    x: gameSpace.width - 25,
    y: gameSpace.height / 2,
    width: 25, 
    height: 125,
    color: "red"
}

//Creates the ball object with initial screen placement, size, speed, and color

const ball = {
    x: gameSpace.width / 2,
    y: gameSpace.height / 2,
    radius: 10,
    speed: 5,
    velocityX: 5,
    velocityY: 5,
    color: "yellow"
}

//Draws paddles

function drawPaddle(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

//Draws the play ball

function drawBall(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
}

//Watches for the player to move the mouse on the screen. The mouse serves as the controller for the player.

gameSpace.addEventListener("mousemove", playerControl());

function playerControl(e){
    
}