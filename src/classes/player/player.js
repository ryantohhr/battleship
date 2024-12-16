export default class Player {
    constructor(name, gameboard) {
        this.name = name;
        this.gameboard = gameboard;
        this.hitCells = [];
    }

    attack(...coords) {
        if (!this.checkCoords(coords)) {
            // Return with error
            return 0;
        }
        this.hitCells.push(JSON.stringify(coords));
        return this.gameboard.receiveAttack(coords[0], coords[1]);
    }

    randomAttack() {
        let coords;
        while (!coords || !this.checkCoords(coords)) {
            coords = [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
            ];
        }
    }

    checkCoords(coords) {
        if (
            this.hitCells.includes(JSON.stringify(coords)) ||
            coords[0] > 9 ||
            coords[0] < 0 ||
            coords[1] > 9 ||
            coords[1] < 0
        ) {
            return false;
        }
        return true;
    }
}
