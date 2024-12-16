import Ship from './ship.js';

let testShip;

beforeEach(() => {
    testShip = new Ship(3);
})

test("accepts a hit", () => {
    testShip.hit();
    expect(testShip.hitCount).toBe(1);
})

test("checks if ship is sunk", () => {
    expect(testShip.isSunk()).toBe(false);
})