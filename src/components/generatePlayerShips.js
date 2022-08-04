const userShipsContainer = document.getElementById("user-ships-container");

const ships = [
  {
    name: "Carrier",
    length: 5,
  },
  {
    name: "Battleship",
    length: 4,
  },
  {
    name: "Cruiser",
    length: 3,
  },
  {
    name: "Submarine",
    length: 3,
  },
  {
    name: "Destroyer",
    length: 2,
  },
];

function generateUserShips() {
  ships.forEach((element) => {
    const shipContainer = document.createElement("div");
    shipContainer.classList.add(`${element.name}-container`);
    shipContainer.classList.add("user-ship-container");
    for (let i = 1; i <= element.length; i++) {
      const position = document.createElement("div");
      position.classList.add(`${element.name}`);
      position.classList.add("user-ship");
      shipContainer.appendChild(position);
    }
    userShipsContainer.appendChild(shipContainer);
  });
}

export { generateUserShips };
