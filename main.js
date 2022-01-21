const boardDiv = document.querySelector(".game-board");
const headerDiv = document.querySelector(".header-wrapper");
const turnDiv = headerDiv.querySelector(".turn");

const cells = [];

const displayController = (() => {
    const createCells = () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const gridPos = gameBoard.getGridPos(i, j);
                let cell = newCell(i, j);
                gameBoard.setCell(i, j, cell);
                cell.init();
            }
        }
    };

    return {
        createCells
    }
})();

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

const newPlayer = (n, isAI) => {
    return {};
};

function restart() {
    console.log("Game Reset");
    gameBoard.resetGame();
}

gameBoard.start();