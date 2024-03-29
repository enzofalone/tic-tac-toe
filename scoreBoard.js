const turnDiv = document.querySelector(".turn");

const scoreBoard = (() => {

    let players = {
        "X": "",
        "O": ""
    };

    const update = (turn) => {
        turnDiv.innerText =  turn;
    }

    const setPlayerName = (playerN, name) => {
        players[playerN] = name;
    }

    const getPlayerName = (playerN) => {
        return players[playerN];
    }

    return {
        update,
        setPlayerName,
        getPlayerName,
    }
})()