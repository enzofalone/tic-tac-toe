const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
})

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal);
    });
});

function openModal(modal) {
    if(modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal) {
    if(modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}

//NEW GAME POPUP FORM
const modal = document.querySelector('#modal-new-game');
const form  = modal.querySelectorAll('#form-new-game');
const submitInput = form[0].querySelector('input[type="submit"]');

//this function retrieves all the data in the new game form
function getNewGameForm(e) {
    e.preventDefault();

    let formData = new FormData(form[0]);

    //clear all data inputted as we already used it for the next reset
    form[0].reset();

    //send players' names to the scoreBoard object
    scoreBoard.setPlayerName("X", formData.get("player1"));
    scoreBoard.setPlayerName("O", formData.get("player2"));
    //start the game
    gameBoard.start();
    
    closeModal(modal);
}

//END GAME POPUP RESULT
const modalResult = document.querySelector('#modal-result');

//after the winner is decided, this function is called in the gameBoard module
function popupResult(playerN) {
    const body = modalResult.querySelector('#modal-result-body');
    const h1 = body.querySelector('h1');
    console.log(h1);
    if((playerN == "X") || (playerN == "O")){
        h1.innerText = `${scoreBoard.getPlayerName(playerN)} won!`;
    } else {
        h1.innerText = 'Tie!';
    }
    openModal(modalResult);
}

//after loading all the webpage, add an event listener to the new game form
document.addEventListener('DOMContentLoaded', () => {
    submitInput.addEventListener('click', getNewGameForm, false);
}, false);