import Ship from './../ship/ship.js';

export default class Gameboard {
    constructor(mode) {
        this.mode = mode;
        // Generate ships
        this.carrier = new Ship("carrier", 5);
        this.battleship = new Ship("battleship", 4);
        this.cruiser = new Ship("cruiser", 3);
        this.submarine = new Ship("submarine", 3);
        this.destroyer = new Ship("destroyer", 2);

        this.board = [];
        this.generateBoard();
    }

    receiveAttack(...coords) {
        const cell = this.board[coords[0]][coords[1]];
        cell.hit = true;
        if (this.checkCoords(coords)) {
            cell.ship.hit();
        }
        
        if (this.mode === "test") {
            return this.carrier.isSunk();
        } else {
            if (this.carrier.isSunk() &&
            this.battleship.isSunk() &&
            this.cruiser.isSunk() &&
            this.submarine.isSunk() &&
            this.destroyer.isSunk()) {
                return true;
            } else {
                return false;
            }
        }
    }

    generateBoard() {
        for (let i = 0; i < 10; i ++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                const cell = new Cell(i, j);
                row.push(cell);
            }
            this.board.push(row);
        }
        if (this.mode === "test") {
            this.placeShipTest(this.carrier);
        } else {
            this.placeShipRandom(this.carrier);
            this.placeShipRandom(this.battleship);
            this.placeShipRandom(this.cruiser);
            this.placeShipRandom(this.submarine);
            this.placeShipRandom(this.destroyer);
        }
    }

    placeShipRandom(ship) {
        let start;
        let axis;
        let cell;
        axis = Math.floor(Math.random() * 2);
        if (axis === 0) {
            while (!start || start[1] + ship.length > 9 || !this.checkVacancy(start, ship.length, axis)) {
                start = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
            }
            for (let i = 0; i < ship.length - 1; i++) {
                cell = this.board[start[0]][start[1] + i];
                if (cell && !cell.hasShip) {
                    cell.ship = ship;
                    cell.hasShip = true;
                    cell.shipName = ship.name;
                }
            }
        } else {
            while (!start || start[0] + ship.length > 9 || !this.checkVacancy(start, ship.length, axis)) {
                start = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
            }
            for (let i = 0; i < ship.length - 1; i++) {
                cell = this.board[start[0] + i][start[1]];
                if (cell && !cell.hasShip) {
                    cell.ship = ship;
                    cell.hasShip = true;
                    cell.shipName = ship.name;
                }
            }
        }
    }

    placeShipTest(ship) {
        const start = [0, 0];
        const axis = 0;
        let cell;
        for (let i = 0; i < ship.length; i++) {
            cell = this.board[start[0]][start[1] + i];
            if (cell && !cell.hasShip) {
                cell.ship = ship;
                cell.hasShip = true;
                cell.shipName = ship.name;
            }
        }
    }

    checkVacancy(coords, length, axis) {
        if (axis === 0) {
            for (let i = 0; i < length; i++) {
                if (this.board[coords[0]][coords[1] + i].hasShip) {
                    return false;
                }
            }
            return true;
        } else {
            for (let i = 0; i < length; i++) {
                if (this.board[coords[0] + i][coords[1]].hasShip) {
                    return false;
                }
            }
            return true;
        }
    }

    checkCoords(coords) {
        // returns true if cell has ship
        return this.board[coords[0]][coords[1]].hasShip;
    }
}

class Cell {
    constructor(...coords) {
        this.coords = coords;
        this.hasShip = false;
        this.ship = null;
        this.shipName = null;
        this.hit = false;
    }
}