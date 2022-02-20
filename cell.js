const cells = [];

const newCell = (col, row) => {
    const pos = {
        col: col,
        row: row
    };

    let state = ""; //empty = none, x = player 1, o = player 2

    const cellDiv = document.createElement("div");

    const init = () => {
        cellDiv.classList.add("cell");
        cellDiv.addEventListener("click", trigger);
        boardDiv.appendChild(cellDiv);

    }

    const trigger = (e) => {
        //check state
        //put a "X" or "O" icon
        if (state === "") {
            let turn = gameBoard.getTurn();
            gameBoard.setGridPos(col, row, turn);
            updateState(turn);
        }
    }

    const updateState = (turn) => {
        state = turn;
        cellDiv.innerText = `${state}`;
    }

    const resetState = () => {
        if (state !== "") {
            updateState("");
            gameBoard.setGridPos(col, row, "");
        }
    }

    const getState = () => {
        return state;
    }

    return {
        resetState,
        getState,
        init,
    }
};