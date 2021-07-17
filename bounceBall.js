const canvas = document.getElementById('canvasID');
const context = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let xAxis = 100;
let yAxis = 100;
let radius = 40;
let moveX = moveY = 14;

function drawBall(xAxis, yAxis){
    context.fillStyle = 'red';
    context.beginPath();
    context.arc(xAxis,yAxis, radius, 0, Math.PI*2);
    context.fill();
    context.closePath();
    context.stroke();
}

function update(){
    if(yAxis+radius > canvas.height || yAxis <= 0+radius){
        moveY = -moveY;
    }
    else if(xAxis+radius > canvas.width || xAxis <= 0+radius){
        moveX = -moveX;
    }
    xAxis += moveX;
    yAxis += moveY;

    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall(xAxis, yAxis);
}

let interval = setInterval(update, 30);


