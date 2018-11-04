import './styles/game.css';
import Game from './partials/Game.js'

// create a game instance
const game = new Game('game', 512, 256);

(function gameLoop() { 
    game.render();
    requestAnimationFrame(gameLoop);
})();
