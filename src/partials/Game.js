import Board from './Board.js'
import Ball from './Ball.js'
import Paddle from './Paddle.js'
import Scoreboard from './scoreboard.js'
//import SVG_NS from '../settings.js'

export default class Game {

	constructor(element, width, height) {
		// Other code goes here...
		this.element = document.getElementById(element); 
		this.width = width;
		this.height = height;
		this.board = new Board(width, height); //dimensions are in index.js
		this.ball = new Ball(8); //
		this.leftPaddle = new Paddle(6, 56, true);//up, down
		this.rightPaddle = new Paddle(6, 56, false);//up, down
		//this.boardGap = new boardGap (10);
		this.scoreboard = new Scoreboard(40, 140, 0, 0);

		// to pause the game
		// document.addEventListener('keydown', event => {
        //     switch (event.key) {
        //         case space:
        //             console.log('space');
		// 			break;
		// 	}
		// });*/
	}

	render() {
		// More code goes here...
		document.getElementById('game').innerHTML = '';
		// let svg = document.createElementNS(SVG_NS, 'svg');
		// svg.setAttributeNS(null, 'width', this.width);
		// svg.setAttributeNS(null, 'height', this.height);
		// svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		// this.element.appendChild(svg);
		// document.getElementById('game').innerHTML = `<svg id="container" width="${this.width}" height="${this.height}" style="fill:#353535"></svg>`;
		this.board.render();
	    this.ball.render();
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
