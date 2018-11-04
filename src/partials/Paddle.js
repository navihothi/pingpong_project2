export default class Paddle {
    constructor (width, height, isLeft) { //up, down
        this.width = width;
        this.height = height;
        // this.speed = speed;
        //this.boardGap = boardGap;
        this.isLeft = isLeft; //boolean
        if(isLeft) {
            this.xPosition = 0;
        } else {
             this.xPosition = 504; 
        }
             //below code didn't work when trying to get the paddles to show
        //document.getElementById('container').clientWidth - this.width;
        // }
        // this.yPosition = document.getElementById('container').clientHeight - this.height;
    
        // document.addEventListener('keydown', event => {
        //     switch (event.key) {
        //         case up:
        //             console.log("up");
        //             break;
        //         case down:
        //             console.log("down");
        //             break;
        //         case space:
        //             console.log("space");
        //             break;
        //     }
        // });
    }

    render(svg) {
        document.getElementById('container').innerHTML += `<rect x="${this.xPosition}" y="100" width="${this.width}" height="${this.height}" fill="#353535"></svg>`;
        //document.getElementById('container').innerHTML += `<rect width="${this.width}" height="${this.height}" fill="#353535"></svg>`;
    
    }
}


//2 event listeners for each paddle
// tell the paddle that the up button has been pressed, left paddle etc...



