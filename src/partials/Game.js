import Board from './Board.js'
import Ball from './Ball.js'
import Paddle from './Paddle.js'
import Scoreboard from './scoreboard.js'
import {KEYS} from '../settings.js'
//import SVG_NS from './../settings.js'

export default class Game {

	constructor(element, width, height, pause) {
		// Other code goes here...
		this.element = document.getElementById(element); 
		this.width = width;
		this.height = height;
		this.board = new Board(width, height); //dimensions are in index.js
		this.ball = new Ball(8, 1, height, width); //
		this.leftPaddle = new Paddle(this.board, 6, 56, true, KEYS.a, KEYS.z);
		this.rightPaddle = new Paddle(this.board, 6, 56, false, KEYS.up, KEYS.down);
		this.boardGap = 5;
		this.scoreboard = new Scoreboard(this.ball, 40, 140);
		
		// to pause the game
		this.pause = false;
		this.pause = document.addEventListener("keydown", event => {
			if (event.keyCode === KEYS.spaceBar && !this.gameOver) {
				  this.pause = !this.pause;
				//   this.gameOver = true;
				  console.log("pause");
			}
		});


		// this.gameOver = true;
	}

	render(){
		if (this.pause || this.gameOver) { //reset/pause the game
			//console.log('yooo');
			return;
		}

		//game resets when one player scores 10 points
		if (this.scoreboard.playerOneScore == 10 || this.scoreboard.playerTwoScore == 10) {
			this.gameOver = true;
			this.scoreboard.ping4.play(); 
		} 



		// More code goes here...
		document.getElementById('game').innerHTML = '';
		document.getElementById('scoreboard').innerHTML = '';
		
		this.board.render();
	    this.ball.render(this.leftPaddle, this.rightPaddle);
		this.leftPaddle.render();
		this.rightPaddle.render();
		this.scoreboard.render();
	

}}



// wokr on this FIRST - this is the blueprint
// setting space for the gam
// doenst have paddlesx2, the ballx1 -- CREATE instances for them
// 2xpaddles, 2xusers, and ball class  
//board width and height

/*			*			*			*			*		*/

//seperate class for those objects
	//paddle class(maxHeight, posiiton (x,y), width, height, speed(how fast the paddle moves))(draw method - draw out the paddles in rectangles, movement - google add event listener, )
	//ball class()(draw method - html for the ball, move method, bounce method, goal method)
	//class player()
	//board class(size=widthxheight)(draw method - draw the board)
	//scoreboard class(x,y - size, )()

//modify the game constructor to recieve not only the width and height but also the objects
