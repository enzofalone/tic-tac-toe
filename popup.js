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
    if(modal== null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}

//NEW GAME POPUP FORM
const modal = document.querySelector('#modal');
const form  = modal.querySelectorAll('#form-new-game');
const submitInput = form[0].querySelector('input[type="submit"]');

function getNewGameForm(e) {
    e.preventDefault();

    let formData = new FormData(form[0]);

    //clear all data inputted as we already used it 
    form[0].reset();

    //send players' names to the scoreBoard object
    scoreBoard.setPlayerName("X", formData.get("player1"));
    scoreBoard.setPlayerName("O", formData.get("player2"));
    //start the game
    gameBoard.start();
    
    closeModal(modal);
}

//after loading all the webpage, add an event listener to the new game form
document.addEventListener('DOMContentLoaded', () => {
    submitInput.addEventListener('click', getNewGameForm, false);
}, false);