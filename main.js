const boardDiv = document.querySelector(".game-board");
const headerDiv = document.querySelector(".header-wrapper");

function newGame() {

}

function restart() {
    gameBoard.resetGame();
    openModal(document.querySelector('#modal-new-game'))
}