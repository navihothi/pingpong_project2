export default class Board {
	constructor(width, height) {
		this.width = width;
        this.height = height;
    }
    
    render(svg) {
        document.getElementById('game').innerHTML = `<svg id="container" width="${this.width}" height="${this.height}" fill="#353535"></svg>`;
        document.getElementById('container').innerHTML += `<line id="divider" x1="256" y1="0" x2="256" y2="256" stroke="black" stroke-dasharray="4"/>`;
    }

}
