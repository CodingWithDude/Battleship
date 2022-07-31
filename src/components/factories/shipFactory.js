class Ship {
  constructor(
    name = "undefined",
    length = 0,
    gridLocations = [],
    hitLocations = []
  ) {
    this.name = name;
    this.length = length;
    this.gridLocations = gridLocations;
    this.hitLocations = hitLocations;
  }

  setGridLocations(array) {
    this.gridLocations = array;
  }

  isHit(location) {
    if (this.gridLocations.includes(location)) {
      this.hitLocations.push(location);
      return true;
    } else {
      return false;
    }
  }

  isSunk() {
    return (
      this.gridLocations.length === this.hitLocations.length &&
      this.gridLocations.every((val, index) => val === this.hitLocations[index])
    );
  }
}

export { Ship };
