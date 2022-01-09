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
        //Check if tie
        let emptyCells = false;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if ((grid[i][j] != "X") &&
                    (grid[i][j] != "O")) {
                    emptyCells = true;
                    return undefined;
                }
            }
        }
        

        //check lines with a for loop
        for (let i = 0; i < 3; i++) {
            if ((grid[i][0] == "X") &&
                (grid[i][1] == "X") &&
                (grid[i][2] == "X")) {
                return "X";
            }
            if ((grid[0][i] == "X") &&
                (grid[1][i] == "X") &&
                (grid[2][i] == "X")) {
                return "X";
            }

            if ((grid[i][0] == "O") &&
                (grid[i][1] == "O") &&
                (grid[i][2] == "O")) {
                return "O";
            }
            if ((grid[0][i] == "O") &&
                (grid[1][i] == "O") &&
                (grid[2][i] == "O")) {
                return "O";
            }
        }
        //if there is no winner by checking each line
        //check diagonal lines
        if ((grid[0][0] == "X") &&
            (grid[1][1] == "X") &&
            (grid[2][2] == "X")) {
            return "X";;
        }

        if ((grid[0][0] == "O") &&
            (grid[1][1] == "O") &&
            (grid[2][2] == "O")) {
            return "O";
        }

        if ((grid[0][2] == "X") &&
            (grid[1][1] == "X") &&
            (grid[2][0] == "X")) {
            return "X";
        }

        if ((grid[0][2] == "O") &&
            (grid[1][1] == "O") &&
            (grid[2][0] == "O")) {
            return "O";;
        }

        if (emptyCells === false) {
            console.log(grid);
            return "T";
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

    const displayResult = (r) => {
        //everything here has to be replaced with something prettier please future me
        if(r == "T") {
            alert("Tie!");
        } else if(r == "X") {
            alert("X Wins!");
        } else if(r == "O") {
            alert("O Wins!");
        }
    }

    return {
        getGridPos,
        setGridPos,

        start,
        getTurn,

        setCell,
        getCell,

        checkWin,
        displayResult,
        resetGame
    }
})();