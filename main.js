const boardDiv = document.querySelector(".game-board");
const headerDiv = document.querySelector(".header-wrapper");


// const newPlayer = (n, isAI) => {
//     return {};                       uncommented when AI is implemented
// };

function restart() {
    console.log("Game Reset");
    gameBoard.resetGame();
}