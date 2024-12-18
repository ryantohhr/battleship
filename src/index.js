import "./style.css";
import Gameboard from './classes/gameboard/gameboard.js';
import Player from './classes/player/player.js';
import DOMManipulator from './dom.js';

const gameboard1 = new Gameboard();
const player1 = new Player("Ryan", "1", gameboard1);
const gameboard2 = new Gameboard();
const player2 = new Player("Kar Win", "2", gameboard2);

DOMManipulator.renderGameboard(player1, gameboard1);
console.log(gameboard1.destroyer);
DOMManipulator.renderGameboard(player2, gameboard2);