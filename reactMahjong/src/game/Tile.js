export default class Tile {
  constructor(suit, value, isRed = false) {
    this.suit = suit;     
    this.value = value;   
    this.isRed = isRed;
  }

  toString() {
    return `${this.suit}-${this.value}${this.isRed ? "-red" : ""}`;
  }
}