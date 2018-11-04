export default class Ball {
    constructor(radius, audio) {
        this.radius = radius;
        this.ping = new Audio("public/sounds/pong-01.wav");
        //this.xPos = xPos;
        // this.yPos = yPos;
        // this.boardHeight = boardHeight;
        // this.boardWidth = boardWidth; 
        //this.direction = 1;
        //this.vy = Math.floor(Math.random() * 10 - 5);
        //this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    render(svg) {
        document.getElementById('container').innerHTML += `<circle cx="256" cy="128" r="${this.radius}" style="fill:#000000"/>`;
        
    }

    // reset() {
    //     this.x = this.boardWidth/2;
    //     this.y = this.boardHeight/2;
    // }

    // coordinates(x, y, width, height) {
    //     let leftX = x;
    //     let rightX = x + width;
    //     let topY = y;
    //     let bottomY = y + height;
    //     return [leftX, rightX, topY, bottomY];
    // }

    // paddleCollision (leftPaddle, rightPaddle) {
    //     if (this.vx > 0) {

    //     } else {

    //     }
    // }
}