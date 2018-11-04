export default class Scoreboard {
    constructor(height, width, pOneScore, pTwoScore) {
        this.width = width;
        this.height = height;
        this.pOneScore = pOneScore;
        this.pTwoDScore = pTwoScore;
    }

    render(svg) {
        document.getElementById('container').innerHTML += `<rect id="score" x="37%" y="0%" height="${this.height}" width="${this.width}"/>`
        document.getElementById('score').innerHTML += `<p>${this.pOneScore}</p>`;
        document.getElementById('score').innerHTML += `<p>${this.pTwoDScore}</p>`;

    }

}
