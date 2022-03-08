const boardDiv = document.querySelector(".game-board");
const headerDiv = document.querySelector(".header-wrapper");


// const newPlayer = (n, isAI) => {
//     return {};                       uncomment when AI is implemented
// };

function newGame() {

}

function restart() {
    gameBoard.resetGame();
    openModal(document.querySelector('#modal-new-game'))
    console.log("game restart")
}