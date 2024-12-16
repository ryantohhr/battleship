import Gameboard from './gameboard.js';

let gameboard;

beforeAll(() => {
    gameboard = new Gameboard("test");
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(0, 2);
    gameboard.receiveAttack(0, 3);
    gameboard.receiveAttack(1, 0);
})

test("receiveAttack hits ship", () => {
    expect(gameboard.board[0][0].ship.hitCount).toBe(4);
})

test("receiveAttack records missed hit", () => {
    expect(gameboard.board[1][0].hit).toBe(true);
})

test("checks if all ships have sunk", () => {
    expect(gameboard.receiveAttack(0, 4)).toBe(true);
})