export default class Ball {
    constructor(radius, direction, boardHeight, boardWidth) {
        this.radius = radius;
        this.boardHeight = boardHeight;
        this.boardWidth = boardWidth; 
        this.direction = 1;
        this.xPos = this.boardWidth/2;
        this.yPos = this.boardHeight/2;

        this.vy = 0;
        this.ping1 = new Audio("public/sounds/pong-01.wav");
        this.ping2 = new Audio("public/sounds/pong-02.wav");
        this.ping3 = new Audio("public/sounds/pong-03.wav");
       

        this.reset();

    }
    // when ball hits the paddle
    paddleCollision(player1, player2) {
        if (this.vx < 0) {
          let [leftX, rightX, topY, bottomY] = player1.coordinates(player1.xPos, player1.yPos, player1.width, player1.height);
          if (this.xPos - this.radius <= rightX && this.yPos >= topY && this.yPos <= bottomY) {
                this.vx = -this.vx;
                this.ping1.play();
               
        }
     } else {
          let [leftX, rightX, topY, bottomY] = player2.coordinates(player2.xPos, player2.yPos, player2.width, player2.height);
            if (this.xPos + this.radius >= leftX && this.yPos >= topY && this.yPos <= bottomY) {
                this.vx = -this.vx;
                this.ping2.play();
                //console.log('hello');
            }
        }
      }

      //when the ball hits the wall
    wallCollision() {
        if (this.yPos <= this.radius) {
            this.vy = -this.vy;
        }
        
        if (this.yPos + this.radius >= this.boardHeight) {
            this.vy = -this.vy;
        }
        

    }
    
    reset() {
        this.xPos = this.boardWidth/2;
        this.yPos = this.boardHeight/2;
        this.vy = 0;
   
        
        this.vy = Math.floor(Math.random() * 10 - 5); //number between -5 and 4, normal speed
        this.vx = this.direction * (6 - Math.abs(this.vy));
        
       // this.xPos = 25;
       // this.yPos = 25;   
   }

    render(player1, player2) {
        this.xPos += this.vx;
        this.yPos += this.vy;
        
        //this.xPos = 5;
        //this.yPos = 5;

        this.wallCollision();
        this.paddleCollision(player1, player2);
        document.getElementById('container').innerHTML += `<circle cx="${this.xPos}" cy="${this.yPos}" r="${this.radius}" style="fill:#000000"/>`;        
    }

}



