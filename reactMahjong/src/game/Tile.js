export default class Tile {
  constructor(suit, value, isRed = false) {
    this.suit = suit;     
    this.value = value;   
    this.isRed = isRed;
  }

  toString() {
    return `${this.suit}-${this.value}${this.isRed ? "-red" : ""}`;
  }
   isHonor() {
    return this.suit === "honor";
  }

  equals(otherTile) {
    return (
      otherTile &&
      this.suit === otherTile.suit &&
      this.value === otherTile.value &&
      this.isRed === otherTile.isRed
    );
  }
}