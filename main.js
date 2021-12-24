const boardDiv = document.querySelector(".game-board");
const cells = [];

const gameBoard = (() => {
    let turn = "X";
    let didStart = false;

    let grid = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    const getGridPos = (col, row) => {
        return grid[col, row];
    };
    
    const setGridPos = (col, row, state) => {
        grid[col,row] = state;
    }

    const start = () => {
        didStart = true;
        displayController.createCells();
    };

    const getTurn = () => { //when the cell requests the turn, we must change the next turn 
        let temp = turn;

        if(turn === "X"){
            turn = "O";
        } else {
            turn = "X";
        }
        return temp;
    };

    const checkWin = () => {

    }
    
    const resetGame = () => {
        for (let i = 0; i < 3; i++) {
           for (let j = 0; j < 3; j++) {
               gameBoard.setGrid
           } 
        }
    }
    return {
        getGridPos,
        start,
        getTurn,
        setGridPos,
        resetGame
    }
})();

const displayController = (() => {
    const createCells = () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const gridPos = gameBoard.getGridPos(i, j);
                let cell = newCell(i, j);
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
        if(state === ""){
            let turn = gameBoard.getTurn();
            updateState(turn);
        }
    }
    
    const updateState = (turn) => {
        state = turn;
        cellDiv.innerText = `${state}`;
    }

    const getState = () => {
        return state;
    }

    return {
        getState,
        init,
    }
};

const newPlayer = (n, isAI) => {
    return {};
};

gameBoard.start();
