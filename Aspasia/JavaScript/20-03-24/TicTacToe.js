const board = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"]
];

const printBoard = () => {
    alert(board[0][0] + "|" + board[0][1] + "|" + board[0][2] + "\n"
        + board[1][0] + "|" + board[1][1] + "|" + board[1][2] + "\n"
        + board[2][0] + "|" + board[2][1] + "|" + board[2][2] + "\n");
}

const evaluateWin = () => {
    //Horizontal-top
    if (board[0][0] != '_' && board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
        return true;
    }
    //Horizontal-mid
    else if (board[1][0] !== '_' && board[1][0] === board[1][1] && board[1][0] === board[1][2]) {
        return true;
    }
    //Horizontal-bottom
    else if (board[2][0] !== '_' && board[2][0] === board[2][1] && board[2][0] === board[2][2]) {
        return true;
    }
    //Vertical-top
    else if (board[0][0] != '_' && board[0][0] === board[1][0] && board[0][0] === board[2][0]) {
        return true;
    }
    //Vertical-mid
    else if (board[0][1] !== '_' && board[0][1] === board[1][1] && board[0][1] === board[2][1]) {
        return true;
    }
    //Vertical-bottom
    else if (board[0][2] !== '_' && board[0][2] === board[1][2] && board[0][2] === board[2][2]) {
        return true;
    }
    //Diagonal-left-right
    else if (board[0][0] !== '_' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return true;
    }
    //Diagonal-right-left
    else if (board[0][2] !== '_' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return true;
    }
    return false;
}

let p1 = true;
let winner = false;
while (!winner) {
    const p1move = 'X';
    const p2move = 'O';
    const currentPlayer = p1 ? 'Player 1' : 'Player 2'
    const move = prompt(currentPlayer + ' introduce a number between 0 and 8:');

    //NEEDS FIX
    // p.x = index / 3;
    // p.y = index % 3;
    let x = Math.floor(move / 3); //Needs flooring cuz we dont want decimals
    let y = move % 3;

    if (p1) board[x][y] = p1move;
    else board[x][y] = p2move;

    if (evaluateWin()) {
        alert('Congratulatoins ' + currentPlayer + '!!!');
        winner = true;
    }
    else {
        printBoard();
        p1 = !p1;
    }
}
