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