/* ---------------------------------------------------------------------- Global Variables and State ----------------------------------------------------------------------- */

const Player_X = 'X';
const Player_O = 'O';

const state = {
    ticTacToeBox : [
    ["","",""],
    ["","",""],
    ["","",""],
    ],
    turn: Player_X,
    gameOver: false,
    winner: null,
}



/* ------------------------------------------------------------------------ Win and Tie conditions ------------------------------------------------------------------------- */

//Checks if player "X" won
const xWinCond = function () {
    
    for (let i = 0; i < state.ticTacToeBox.length; ++i) {
        
        if ((state.ticTacToeBox[i][0] == Player_X && state.ticTacToeBox[i][1] == Player_X && state.ticTacToeBox[i][2] == Player_X)
        || (state.ticTacToeBox[0][i] == Player_X && state.ticTacToeBox[1][i] == Player_X && state.ticTacToeBox[2][i] == Player_X)
        || (state.ticTacToeBox[0][0] == Player_X && state.ticTacToeBox[1][1] == Player_X && state.ticTacToeBox[2][2] == Player_X)
        || (state.ticTacToeBox[0][2] == Player_X && state.ticTacToeBox[1][1] == Player_X && state.ticTacToeBox[2][0] == Player_X))
            {
                state.gameOver = true;
                state.winner = 'X';
            }
    }
};


//Checks if player "O" won
const oWinCond = function () {
    
    for (let i = 0; i < state.ticTacToeBox.length; ++i) {
        if (
            (state.ticTacToeBox[i][0] == Player_O && state.ticTacToeBox[i][1] == Player_O && state.ticTacToeBox[i][2] == Player_O)
            || (state.ticTacToeBox[0][i] == Player_O && state.ticTacToeBox[1][i] == Player_O && state.ticTacToeBox[2][i] == Player_O)
            || (state.ticTacToeBox[0][0] == Player_O && state.ticTacToeBox[1][1] == Player_O && state.ticTacToeBox[2][2] == Player_O)
            || (state.ticTacToeBox[0][2] == Player_O && state.ticTacToeBox[1][1] == Player_O && state.ticTacToeBox[2][0] == Player_O)
            ) {
                state.gameOver = true;
                state.winner = 'O';
        }
    }
};


//Checks board to see if there is a tie. If so, tie pop-up is displayed.
const tieCond = function () {
    console.log(state.gameOver);
    for (let i = 0; i < state.ticTacToeBox.length; ++i) {
        for (let j=0; j < state.ticTacToeBox[i].length; ++j) {

            if (state.ticTacToeBox[i][j] === '' && state.gameOver === false){
                return false;
            }
            else if (state.ticTacToeBox[i][j] != '' && state.gameOver === false){
                continue;
            }
            else {return}
        }
    }
    const tie = $(`<div class='game-over-tie'> <h1 class='tie'>It's a tie 😱</h1><button class='again'>Play Again?</button><div>`);
    $('.tictactoe').append(tie);
    state.turn = Player_X;
    return true;
}



/* ------------------------------------------------------------------------------- Functions ------------------------------------------------------------------------------ */


//Renders a blank board with the option to choose either 1 player or 2 players.
function initialRender (){
    
    $('.tictactoe').empty();
    createGrid1();
    $('.tictactoe').append($(`<div class=startup>
        <button class=start-button id=single>1 Player</button>
        <button class=start-button id=double>2 players</button>
    </div>`))
}


//Updates "current turn" display
function updateTurn () {
    $('.turn').remove();
    $('.ticsec').append(`<h1 class='turn'>Current turn: ${state.turn}</h1>`)
}


// Runs win conditions to determine if there is a winner. If so, winner pop-up is displayed.
function checkWin () {

    xWinCond();
    oWinCond();

    if (state.gameOver === true) {

        state.turn = Player_X;

        const win = $(`<div class='game-over-win'> <h1 class='win'>Player ${state.winner} wins!!!</h1><button class='again'>Play Again?</button><div>`);
        $('.tictactoe').append(win);

        state.winner = null;
        return true
    }
    else {return false}
}


//Generates and returns a random integer between 0 and 2
let ranNum = () => Math.floor(Math.random()*3);


/* -------------------------------------------------------------- Functions and Click Handlers for 1 Player Mode------------------------------------------------------------ */


//Creates new or updated grid for 1 Player mode.
function createGrid1 () {

    for (let i = 0; i < state.ticTacToeBox.length; ++i) {
        for (let j=0; j < state.ticTacToeBox[i].length; ++j) {

        const newCell = ($(`<div class='t-cell' id=a${i}${j}>${state.ticTacToeBox[i][j]}</div>`));

        newCell.data('t-cell location', `${i},${j}`);

        $('.tictactoe').append(newCell);
        }

    }
}


// Renders initial empty tic tac toe board for 1 Player mode.
function createInitialGrid1 (){

    $('.tictactoe').empty();
    
    createGrid1();
    updateTurn();

}


// Renders updated grid. Checks to see if there is a winner or tie, and updates "current turn" display.
function createAndRenderGrid1 (){

    $('.tictactoe').empty();
    
    createGrid1();
    updateTurn();
    checkWin();
    tieCond();

}


//Marks an 'O' in a random open cell for CPU player's turn.
function compTurn () {
    let randomNum1 = ranNum();
    let randomNum2 = ranNum();

    if (state.ticTacToeBox[0][0] != '' && state.ticTacToeBox[0][1] != '' && state.ticTacToeBox[0][2] != '' && state.ticTacToeBox[1][0] != '' && state.ticTacToeBox[1][1] != '' && state.ticTacToeBox[1][2] != '' && state.ticTacToeBox[2][0] != '' && state.ticTacToeBox[2][1] != '' && state.ticTacToeBox[2][2] != '') {

    }
    else {
        if (state.ticTacToeBox[randomNum1][randomNum2] === '') {
            state.ticTacToeBox[randomNum1][randomNum2] = 'O';
            state.turn = Player_X;
            createAndRenderGrid1();
        }
        else {
            compTurn();
        }
    }
}


//Enables "1 Player" button
$('.tictactoe').on('click', '#single', function (){
    createInitialGrid1();
})

//For 1 player mode. Makes cells clickable, sets current player's symbol, switches turns,  checks if there's a winner or tie, and re-renders grid. Proceeds through computer player's turn and returns to player 1's turn.
$('.tictactoe').on('click', '.t-cell', function (event){

    if ($(event.target).text() == '' && state.turn == Player_X ) {
        let cellData = $(this).data('t-cell location');
        let rowNum = +cellData[0];
        let colNum = +cellData[2];

        state.ticTacToeBox[rowNum][colNum] = Player_X;
        state.turn = Player_O;
        createAndRenderGrid1();

        if (state.gameOver === false){compTurn();}
    }

})



/* -------------------------------------------------------------- Functions and Click Handlers for 2 Player Mode------------------------------------------------------------ */



//Creates new or updated grid for 2 Player mode.
function createGrid2 () {

    for (let i = 0; i < state.ticTacToeBox.length; ++i) {
        for (let j=0; j < state.ticTacToeBox[i].length; ++j) {

        const newCell = ($(`<div class='t-cell2' id=a${i}${j}>${state.ticTacToeBox[i][j]}</div>`));

        newCell.data('t-cell location', `${i},${j}`);

        $('.tictactoe').append(newCell);
        }

    }
}


// Renders initial empty tic tac toe board for 2 Player mode.
function createInitialGrid2 (){

    $('.tictactoe').empty();
    
    createGrid2();
    updateTurn();

}


// Renders updated grid. Checks to see if there is a winner or tie and updates "current turn" display.
function createAndRenderGrid2 (){

    $('.tictactoe').empty();
    
    createGrid2();
    updateTurn();
    checkWin();
    tieCond();

}


//Enables "2 Players" button
$('.tictactoe').on('click', '#double', function (){
    createInitialGrid2();
})


// For 2 player mode. Makes cells clickable, sets current player's symbol, switches turns, checks if there's a winner or tie, and re-renders grid.
$('.tictactoe').on('click', '.t-cell2', function (event){

    if ($(event.target).text() == '' && state.turn == Player_X ) {
        let cellData = $(this).data('t-cell location');
        let rowNum = +cellData[0];
        let colNum = +cellData[2];

        state.ticTacToeBox[rowNum][colNum] = Player_X;
        state.turn = Player_O;
        createAndRenderGrid2();
    }

    else if ($(event.target).text() == '' && state.turn == Player_O){
        let cellData = $(this).data('t-cell location');
        let rowNum = +cellData[0];
        let colNum = +cellData[2];

        state.ticTacToeBox[rowNum][colNum] = Player_O;
        state.turn = Player_X;
        createAndRenderGrid2();
    }

})


/* -------------------------------------------------------------------------- Other Click Handlers ------------------------------------------------------------------------ */


//Enables "Play Again?" button
$('.tictactoe').on('click','.again', function (event){
    
    state.gameOver = false;

    for (let i = 0; i < state.ticTacToeBox.length; ++i) {
        for (let j=0; j < state.ticTacToeBox[i].length; ++j) {

            state.ticTacToeBox[i][j] = '';
        }
    }

    initialRender();
})


/* ----------------------------------------------------------------------------- Runtime Code ---------------------------------------------------------------------------- */

$(document).ready(initialRender);