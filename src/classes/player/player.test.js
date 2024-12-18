import Gameboard from './../gameboard/gameboard.js';
import Player from './player.js';

let player;

beforeAll(() => {
    const gameboard = new Gameboard("test");
    player = new Player("Ryan", 1, gameboard);
    player.attack(0, 0);
    player.attack(0, 1);
    player.attack(0, 2);
    player.attack(0, 3);
})

test("player receives attack", () => {
    expect(player.attack(0, 4)).toBe(true);
})

test("doesn't hit a cell that has already been hit", () => {
    expect(player.attack(0, 0)).toBe(0);
})

test("doesn't hit an invalid cell", () => {
    expect(player.attack(0, 20)).toBe(0);
})