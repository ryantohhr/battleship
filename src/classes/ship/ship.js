export default class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.hitCount = 0;
        this.sunk = false;
    }

    hit() {
        this.hitCount++;
    }

    isSunk() {
        return this.hitCount >= this.length ? true : false;
    }
}