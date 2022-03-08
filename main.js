const boardDiv = document.querySelector(".game-board");
const headerDiv = document.querySelector(".header-wrapper");

function restart() {
    gameBoard.resetGame();
    openModal(document.querySelector('#modal-new-game'))
}