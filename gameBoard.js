// The gameboard's factory function works as the grid manager,
// being called throughout the user's input to check if someone has won
// by modifying the grid variable and then calling inside the checkWin function
// which tests out all the possibilities in the grid for a player to win

const gameBoard = (() => {
    let turn = "X";
    let didStart = false;
    let gameOver = false;
    let result;

    //2D variable to store the cell's elements so we can manipulate them in case the user wants to reset
    let cells = [
        [],
        [],
        []
    ];

    //2D Variable to store the state of every cell
    let grid = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    const start = () => {
        if (!didStart) { //prevent from creating more cells
            didStart = true;
            displayController.createCells();
            scoreBoard.update(`${scoreBoard.getPlayerName(turn)} : ${turn}`);
        } else {
            resetGame();
        }

    };

    const getTurn = () => {
        let temp = turn;

        //when the cell requests the turn, we must change the next turn
        if (turn === "X") {
            turn = "O";

        } else { // else show the user the turn is for the first player
            turn = "X";
            // turnDiv.innerHTML = "X";

        }
        scoreBoard.update(`${scoreBoard.getPlayerName(turn)} : ${turn}`);
        return temp;
    };

    const checkWin = () => {
        //Check if tie
        let emptyCells = false;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if ((grid[i][j] != "X") &&
                    (grid[i][j] != "O")) {
                    emptyCells = true;
                    console.log(emptyCells);
                }
            }
        }

        //check lines with a for loop
        for (let i = 0; i < 3; i++) {
            if ((grid[i][0] == "X") &&
                (grid[i][1] == "X") &&
                (grid[i][2] == "X")) {
                console.log("X wins")
                return "X";
            }
            if ((grid[0][i] == "X") &&
                (grid[1][i] == "X") &&
                (grid[2][i] == "X")) {
                console.log("X wins")
                return "X";

            }

            if ((grid[i][0] == "O") &&
                (grid[i][1] == "O") &&
                (grid[i][2] == "O")) {
                console.log("O wins")
                return "O";
            }
            if ((grid[0][i] == "O") &&
                (grid[1][i] == "O") &&
                (grid[2][i] == "O")) {
                console.log("O wins")
                return "O";
            }
        }
        //if there is no winner by checking each line
        //check diagonal lines
        if ((grid[0][0] == "X") &&
            (grid[1][1] == "X") &&
            (grid[2][2] == "X")) {
            console.log("X wins diagonal -_")
            return "X";
        }

        if ((grid[0][0] == "O") &&
            (grid[1][1] == "O") &&
            (grid[2][2] == "O")) {
            console.log("O wins")
            return "O";
        }

        if ((grid[0][2] == "X") &&
            (grid[1][1] == "X") &&
            (grid[2][0] == "X")) {
            console.log("X wins diagonal _-")
            return "X";
        }

        if ((grid[0][2] == "O") &&
            (grid[1][1] == "O") &&
            (grid[2][0] == "O")) {
            console.log("O wins")
            return "O";
        }

        if (emptyCells === false) {
            console.log(grid);
            return "T";
        }
        //if no possibility has been met, return undefined
        return undefined
    }

    const resetGame = () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                cells[i][j].resetState();
            }
        }
        //Default settings for the first turn every game
        result = '';
        turn = "X";
        gameOver = false;
        scoreBoard.update(`${scoreBoard.getPlayerName(turn)} : ${turn}`);
    }

    //getters and setters

    const setCell = (col, row, e) => {
        cells[col][row] = e;
        console.log(cells[col][row]);
    }

    const getCell = (col, row) => {
        return cells[col][row];
    }

    const getGridPos = (col, row) => {
        return grid[col][row];
    };

    const setGridPos = (col, row, state) => {
        grid[col][row] = state;

        //check if someone won every time the user clicks a cell
        result = checkWin();
        if (result !== undefined) {
            popupResult(result);
            gameOver = true; // this prevents the user to keep playing after results
            console.log("Results given");
        }
    }

    const getGameOver = () => {
        return gameOver;
    }

    const getResult = () => {
        return result;
    }

    return {
        getGridPos,
        setGridPos,

        start,
        getTurn,

        setCell,
        getCell,

        getGameOver,
        getResult,

        resetGame
    }
})();