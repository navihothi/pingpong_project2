export default class Scoreboard {
    constructor(ball, height, width) {
        this.width = width;
        this.height = height;
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
        this.ball = ball;
        this.ping4 = new Audio("public/sounds/pong-04.wav");
    }

    ballCollision () {
    if (this.ball.xPos <= this.ball.radius) {
        this.playerTwoScore ++;
        this.ball.reset();
        // this.vx = -this.vx;
        console.log("p 2 scores");
        }

    if (this.ball.xPos + this.ball.radius >= this.ball.boardWidth) {
        this.playerOneScore ++;
        this.ball.reset();
        // this.vx = -this.vx;
        console.log("p 1 scores");
        }

    if (this.playerOneScore == 10) {
        this.ping4.play();
        this.ball.reset();
        //alert('Player one wins');
    }

    if (this.playerTwoScore == 10) {
        this.ping4.play();
        this.ball.reset();
        //alert('Player two wins');
    }
    }


    render(svg) {
        this.ballCollision();
        document.getElementById('scoreboard').innerHTML += `<p>Player 1 score: ${this.playerOneScore}</p> <p>Player 2 score: ${this.playerTwoScore}</p>`;
    }

}




// if player one score
// add one to score
// if player two cored
// addone to score
// first oen to 10 
// ends game and is winner