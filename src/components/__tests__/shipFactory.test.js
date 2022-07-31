import { Ship } from "../factories/shipFactory";

// checkHit
it("test for hit", () => {
  const testShip = new Ship();
  testShip.gridLocations = [1, 2, 3, 4];
  expect(testShip.isHit(1)).toBe(true);
});

it("test for miss", () => {
  const testShip = new Ship();
  testShip.gridLocations = [1, 2, 3, 4, 5];
  expect(testShip.isHit(6)).toBe(false);
});

// setLocations
it("test for location placement", () => {
  const testShip = new Ship("test", 4);
  expect((testShip.setGridLocations = [1, 2, 3, 4])).toBe(
    testShip.setGridLocations
  );
});

// isSunk
it("test for sunk ship", () => {
  const testShip = new Ship();
  testShip.gridLocations = [1, 2, 3, 4];
  testShip.hitLocations = [1, 2, 3, 4];
  expect(testShip.isSunk()).toBe(true);
});

it("test for not sunk ship", () => {
  const testShip = new Ship();
  testShip.gridLocations = [1, 2, 3, 4];
  testShip.hitLocations = [1, 2, 3];
  expect(testShip.isSunk()).toBe(false);
});
