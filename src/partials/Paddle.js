export default class Paddle {
    constructor (board, width, height, isLeft, up, down) { 
        // this.boardHeight = boardHeight;
        // this.boardWidth = boardWidth;
        this.width = width;
        this.height = height;
        //this.x = x;
        //this.y = y;
        // this.up = up;
        // this.down = down;
        this.speed = 10;
        this.score = 0;
        //this.boardGap = boardGap;
        this.isLeft = isLeft; //boolean
        if(isLeft) {
            this.xPos = 0;
        } else {
             this.xPos = 504; 
        }
        this.board = board;
        this.yPos = board.height / 2 - height / 2;
        
        //below code didn't work when trying to get the paddles to show:
        //document.getElementById('container').clientWidth - this.width;
        // }
        // this.yPosition = document.getElementById('container').clientHeight - this.height;
    
        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case up: //keycode 38
                    this.yPos -= this.speed
                    this.yPos = Math.max(0, this.yPos)
                    //console.log("up");
                    break;
                case down: //keycode 40
                    this.yPos += this.speed
                    this.yPost = Math.min(board.height - this.height, this.yPos)
                    //console.log("down");
                    break;
            }
        });
    }


    coordinates() {
        let leftX = this.xPos;
        let rightX = this.xPos + this.width;
        let topY = this.yPos;
        let bottomY = this.yPos + this.height;
        return [leftX, rightX, topY, bottomY];
      }


    render(svg) {
        document.getElementById('container').innerHTML += `<rect x="${this.xPos}" y="${this.yPos}" width="${this.width}" height="${this.height}" fill="#353535"></svg>`;
        //document.getElementById('container').innerHTML += `<rect width="${this.width}" height="${this.height}" fill="#353535"></svg>`;
    
    }
}

//wall collision
//paddle collision
//2 event listeners for each paddle
// tell the paddle that the up button has been pressed, left paddle etc...



