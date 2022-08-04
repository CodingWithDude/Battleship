import reset_SASS from "./styles/reset.sass";
import main_SASS from "./styles/main.sass";
import {
  generateUserBoard,
  generateComputerBoard,
} from "./components/generateBoard";
import { generateUserShips } from "./components/generatePlayerShips";

generateUserBoard();
generateComputerBoard();
generateUserShips();

const userBoard = document.querySelectorAll("[data-player='user']");
const computerBoard = document.querySelectorAll("[data-player='computer']");

userBoard.forEach((element) => {
  element.addEventListener("click", () => {
    let data = element.dataset.position;
    console.log(`User Board: ${data}`);
  });
});

computerBoard.forEach((element) => {
  element.addEventListener("click", () => {
    let data = element.dataset.position;
    console.log(`Computer Board: ${data}`);
  });
});
