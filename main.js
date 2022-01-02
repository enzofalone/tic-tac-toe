const boardDiv = document.querySelector(".game-board");
const cells = [];

const gameBoard = (() => {
    let turn = "X";
    let didStart = false;

    let cells = [
        [],
        [],
        []
    ];

    let grid = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    const getGridPos = (col, row) => {
        return grid[col][row];
    };

    const setGridPos = (col, row, state) => {
        grid[col][row] = state;
    }

    const start = () => {
        didStart = true;
        displayController.createCells();
    };

    const getTurn = () => { //when the cell requests the turn, we must change the next turn 
        let temp = turn;

        if (turn === "X") {
            turn = "O";
        } else {
            turn = "X";
        }
        return temp;
    };

    const checkWin = () => {
        //check lines with a for loop
        for (let i = 0; i < 3; i++) {
            if ((grid[i][0] == "X") &&
                (grid[i][1] == "X") &&
                (grid[i][2] == "X")) {
                alert(`X wins`);
                break;
            }
            if ((grid[0][i] == "X") &&
                (grid[1][i] == "X") &&
                (grid[2][i] == "X")) {
                alert(`X wins`);
                break;
            }

            if ((grid[i][0] == "O") &&
                (grid[i][1] == "O") &&
                (grid[i][2] == "O")) {
                alert(`O wins`);
                break;
            }
            if ((grid[0][i] == "O") &&
                (grid[1][i] == "O") &&
                (grid[2][i] == "O")) {
                alert(`O wins`);
                break;
            }
        }
        //if there is no winner by checking each line
        //check diagonal lines
        if ((grid[0][0] == "X") &&
            (grid[1][1] == "X") &&
            (grid[2][2] == "X")) {
            alert(`X wins`);
        }
        
        if ((grid[0][0] == "O") &&
            (grid[1][1] == "O") &&
            (grid[2][2] == "O")) {
            alert(`O wins`);
        }

        if ((grid[0][2] == "X") &&
            (grid[1][1] == "X") &&
            (grid[2][0] == "X")) {
            alert(`X wins`);
        }

        if ((grid[0][2] == "O") &&
            (grid[1][1] == "O") &&
            (grid[2][0] == "O")) {
            alert(`O wins`);

        }

    }

    const resetGame = () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                cells[i][j].resetState();
            }
        }
        turn = "X";
    }

    const setCell = (col, row, e) => {
        cells[col][row] = e;
        console.log(cells[col][row]);
    }

    const getCell = (col, row) => {
        return cells[col][row];
    }

    return {
        getGridPos,
        setGridPos,

        start,
        getTurn,

        setCell,
        getCell,

        checkWin,
        resetGame
    }
})();

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

            //check if someone won
            gameBoard.checkWin();
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