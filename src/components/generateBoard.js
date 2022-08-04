const userBoardContainer = document.getElementById("user-board-container");
const computerBoardContainer = document.getElementById(
  "computer-board-container"
);

function generateUserBoard() {
  for (let i = 1; i <= 100; i++) {
    const position = document.createElement("div");
    position.classList.add("position");
    position.dataset.player = "user";
    position.dataset.position = `${i}`;
    userBoardContainer.appendChild(position);
  }
}

function generateComputerBoard() {
  for (let i = 1; i <= 100; i++) {
    const position = document.createElement("div");
    position.classList.add("position");
    position.dataset.player = "computer";
    position.dataset.position = `${i}`;
    computerBoardContainer.appendChild(position);
  }
}

export { generateUserBoard, generateComputerBoard };
