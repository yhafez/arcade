//T = Top, C = Center, B = Botton, L = Left, R = Right

/*-----------------------------------------------------------------------------Global Variables-----------------------------------------------------------------------------*/


let state2 = {};
let restoreData = {};

//Representation of empty Sudoku grid: 9 3x3 subgrids.
let defaultState= {

    'TL':
    ['','','',
    '','','',
    '','','',],

    'TC':
    ['','','',
    '','','',
    '','','',],

    'TR':
    ['','','',
    '','','',
    '','','',],

    'CL':
    ['','','',
    '','','',
    '','','',],

    'CC':
    ['','','',
    '','','',
    '','','',],

    'CR':
    ['','','',
    '','','',
    '','','',],

    'BL':
    ['','','',
    '','','',
    '','','',],

    'BC':
    ['','','',
    '','','',
    '','','',],

    'BR':
    ['','','',
    '','','',
    '','','',],

};

//Deep clones defaultState into state2 and restoreData variables
$.extend( true, state2, defaultState);
$.extend( true, restoreData, defaultState);

/*---------------------------------------------------------------------------------Functions---------------------------------------------------------------------------------*/

/*-------------------Row Conditions-------------------*/

function isTopRow (cellNum) {

    if (cellNum === 0 ||
        cellNum === 1 ||
        cellNum === 2) {

        return true;

    } else {return false;}

}

function isMiddleRow (cellNum) {

    if (cellNum === 3 ||
        cellNum === 4 ||
        cellNum === 5) {

        return true;

    } else {return false;}

}

function isBottomRow (cellNum) {

    if (cellNum === 6 ||
        cellNum === 7 ||
        cellNum === 8) {

        return true;

    } else {return false;}

}

/*-------------------Grid Row Conditions-------------------*/

function isTopGridRow (key) {
    if (key === 'TL' ||
        key === 'TR' ||
        key === 'TC') {

            return true;
    
        } else {return false;}
}

function isMiddleGridRow (key) {
    if (key === 'CL' ||
        key === 'CR' ||
        key === 'CC') {

            return true;
    
        } else {return false;}
}

function isBottomGridRow (key) {
    if (key === 'BL' ||
        key === 'BR' ||
        key === 'BC') {

            return true;
    
        } else {return false;}
}

/*-------------------Column Conditions-------------------*/

function isLeftColumn (cellNum) {

    if (cellNum === 0 ||
        cellNum === 3 ||
        cellNum === 6) {

        return true;

    } else {return false;}

}

function isMiddleColumn (cellNum) {

    if (cellNum === 1 ||
        cellNum === 4 ||
        cellNum === 7) {

        return true;

    } else {return false;}

}

function isRightColumn (cellNum) {

    if (cellNum === 2 ||
        cellNum === 5 ||
        cellNum === 8) {

        return true;

    } else {return false;}

}

/*-------------------Grid Column Conditions-------------------*/

function isLeftGridColumn (key) {
    if (key === 'TL' ||
        key === 'BL' ||
        key === 'CL') {

            return true;
    
        } else {return false;}
}

function isMiddleGridColumn (key) {
    if (key === 'TC' ||
        key === 'BC' ||
        key === 'CC') {

            return true;
    
        } else {return false;}
}

function isRightGridColumn (key) {
    if (key === 'TR' ||
        key === 'BR' ||
        key === 'CR') {

            return true;
    
        } else {return false;}
}



/*-------------------Repeat Checks-------------------*/


function noRepeatsSubGrid (key, cellValue) {
    if (state2[key][0] != cellValue && 
        state2[key][1] != cellValue && 
        state2[key][2] != cellValue && 
        state2[key][3] != cellValue && 
        state2[key][4] != cellValue && 
        state2[key][5] != cellValue && 
        state2[key][6] != cellValue && 
        state2[key][7] != cellValue && 
        state2[key][8] != cellValue) {
            
            return true;

        }
        
        else {
            return false;
        }
}



function noRepeatsRow (key, cellNum, cellValue) {


    /*---------Top Rows---------*/
    if (isTopRow(cellNum)) {
        
        if (isTopGridRow(key)){

            if (state2['TL'][0] != cellValue && 
                state2['TL'][1] != cellValue && 
                state2['TL'][2] != cellValue && 
                state2['TC'][0] != cellValue && 
                state2['TC'][1] != cellValue && 
                state2['TC'][2] != cellValue && 
                state2['TR'][0] != cellValue && 
                state2['TR'][1] != cellValue && 
                state2['TR'][2] != cellValue) {

                    return true;

            } else {return false;}
        }

        if (isMiddleGridRow(key)){

            if (state2['CL'][0] != cellValue && 
                state2['CL'][1] != cellValue && 
                state2['CL'][2] != cellValue && 
                state2['CC'][0] != cellValue && 
                state2['CC'][1] != cellValue && 
                state2['CC'][2] != cellValue && 
                state2['CR'][0] != cellValue && 
                state2['CR'][1] != cellValue && 
                state2['CR'][2] != cellValue) {

                    return true;

                } else {return false}
        }

        if (isBottomGridRow(key)){
            
            if (state2['BL'][0] != cellValue && 
                state2['BL'][1] != cellValue && 
                state2['BL'][2] != cellValue && 
                state2['BC'][0] != cellValue && 
                state2['BC'][1] != cellValue && 
                state2['BC'][2] != cellValue && 
                state2['BR'][0] != cellValue && 
                state2['BR'][1] != cellValue && 
                state2['BR'][2] != cellValue) {

                    return true;

                } else {return false}
        }


    /*---------Middle Rows---------*/
    } else if (isMiddleRow(cellNum)) {

        if (isTopGridRow(key)){

            if (state2['TL'][3] != cellValue && 
                state2['TL'][4] != cellValue && 
                state2['TL'][5] != cellValue && 
                state2['TC'][3] != cellValue && 
                state2['TC'][4] != cellValue && 
                state2['TC'][5] != cellValue && 
                state2['TR'][3] != cellValue && 
                state2['TR'][4] != cellValue && 
                state2['TR'][5] != cellValue) {

                    return true;

            } else {return false;}
        }

        if (isMiddleGridRow(key)){

            if (state2['CL'][3] != cellValue && 
                state2['CL'][4] != cellValue && 
                state2['CL'][5] != cellValue && 
                state2['CC'][3] != cellValue && 
                state2['CC'][4] != cellValue && 
                state2['CC'][5] != cellValue && 
                state2['CR'][3] != cellValue && 
                state2['CR'][4] != cellValue && 
                state2['CR'][5] != cellValue) {

                    return true;

                } else {return false}
        }

        if (isBottomGridRow(key)){
            
            if (state2['BL'][3] != cellValue && 
                state2['BL'][4] != cellValue && 
                state2['BL'][5] != cellValue && 
                state2['BC'][3] != cellValue && 
                state2['BC'][4] != cellValue && 
                state2['BC'][5] != cellValue && 
                state2['BR'][3] != cellValue && 
                state2['BR'][4] != cellValue && 
                state2['BR'][5] != cellValue) {

                    return true;

                } else {return false}
        }

    
    /*---------Bottom Rows---------*/
    } else if (isBottomRow(cellNum)) {

        if (isTopGridRow(key)){

            if (state2['TL'][6] != cellValue && 
                state2['TL'][7] != cellValue && 
                state2['TL'][8] != cellValue && 
                state2['TC'][6] != cellValue && 
                state2['TC'][7] != cellValue && 
                state2['TC'][8] != cellValue && 
                state2['TR'][6] != cellValue && 
                state2['TR'][7] != cellValue && 
                state2['TR'][8] != cellValue) {

                    return true;

            } else {return false;}
        }

        if (isMiddleGridRow(key)){

            if (state2['CL'][6] != cellValue && 
                state2['CL'][7] != cellValue && 
                state2['CL'][8] != cellValue && 
                state2['CC'][6] != cellValue && 
                state2['CC'][7] != cellValue && 
                state2['CC'][8] != cellValue && 
                state2['CR'][6] != cellValue && 
                state2['CR'][7] != cellValue && 
                state2['CR'][8] != cellValue) {

                    return true;

                } else {return false}
        }

        if (isBottomGridRow(key)){
            
            if (state2['BL'][6] != cellValue && 
                state2['BL'][7] != cellValue && 
                state2['BL'][8] != cellValue && 
                state2['BC'][6] != cellValue && 
                state2['BC'][7] != cellValue && 
                state2['BC'][8] != cellValue && 
                state2['BR'][6] != cellValue && 
                state2['BR'][7] != cellValue && 
                state2['BR'][8] != cellValue) {

                    return true;

                } else {return false}
        }

    } 

}

function noRepeatsColumn (key, cellNum, cellValue) {

    /*---------Left Columns---------*/
    if (isLeftColumn(cellNum)) {
            
        if (isLeftGridColumn(key)){

            if (state2['TL'][0] != cellValue && 
                state2['TL'][3] != cellValue && 
                state2['TL'][6] != cellValue && 
                state2['CL'][0] != cellValue && 
                state2['CL'][3] != cellValue && 
                state2['CL'][6] != cellValue && 
                state2['BL'][0] != cellValue && 
                state2['BL'][3] != cellValue && 
                state2['BL'][6] != cellValue) {

                    return true;

            } else {return false;}
        }

        if (isMiddleGridColumn(key)){

            if (state2['TC'][0] != cellValue && 
                state2['TC'][3] != cellValue && 
                state2['TC'][6] != cellValue && 
                state2['CC'][0] != cellValue && 
                state2['CC'][3] != cellValue && 
                state2['CC'][6] != cellValue && 
                state2['BC'][0] != cellValue && 
                state2['BC'][3] != cellValue && 
                state2['BC'][6] != cellValue) {

                    return true;

            } else {return false;}
        }

        if (isRightGridColumn(key)){

            if (state2['TR'][0] != cellValue && 
                state2['TR'][3] != cellValue && 
                state2['TR'][6] != cellValue && 
                state2['CR'][0] != cellValue && 
                state2['CR'][3] != cellValue && 
                state2['CR'][6] != cellValue && 
                state2['BR'][0] != cellValue && 
                state2['BR'][3] != cellValue && 
                state2['BR'][6] != cellValue) {

                    return true;

            } else {return false;}
        }
    }


    /*---------Middle Columns---------*/
    if (isMiddleColumn(cellNum)) {
        
        if (isLeftGridColumn(key)){

            if (state2['TL'][1] != cellValue && 
                state2['TL'][4] != cellValue && 
                state2['TL'][7] != cellValue && 
                state2['CL'][1] != cellValue && 
                state2['CL'][4] != cellValue && 
                state2['CL'][7] != cellValue && 
                state2['BL'][1] != cellValue && 
                state2['BL'][4] != cellValue && 
                state2['BL'][7] != cellValue) {

                    return true;

            } else {return false;}
        }

        if (isMiddleGridColumn(key)){

            if (state2['TC'][1] != cellValue && 
                state2['TC'][4] != cellValue && 
                state2['TC'][7] != cellValue && 
                state2['CC'][1] != cellValue && 
                state2['CC'][4] != cellValue && 
                state2['CC'][7] != cellValue && 
                state2['BC'][1] != cellValue && 
                state2['BC'][4] != cellValue && 
                state2['BC'][7] != cellValue) {

                    return true;

            } else {return false;}
        }

        if (isRightGridColumn(key)){

            if (state2['TR'][1] != cellValue && 
                state2['TR'][4] != cellValue && 
                state2['TR'][7] != cellValue && 
                state2['CR'][1] != cellValue && 
                state2['CR'][4] != cellValue && 
                state2['CR'][7] != cellValue && 
                state2['BR'][1] != cellValue && 
                state2['BR'][4] != cellValue && 
                state2['BR'][7] != cellValue) {

                    return true;

            } else {return false;}
        }
    }


    /*---------Right Columns---------*/
    if (isRightColumn(cellNum)) {
            
        if (isLeftGridColumn(key)){

            if (state2['TL'][2] != cellValue && 
                state2['TL'][5] != cellValue && 
                state2['TL'][8] != cellValue && 
                state2['CL'][2] != cellValue && 
                state2['CL'][5] != cellValue && 
                state2['CL'][8] != cellValue && 
                state2['BL'][2] != cellValue && 
                state2['BL'][5] != cellValue && 
                state2['BL'][8] != cellValue) {

                    return true;

            } else {return false;}
        }

        if (isMiddleGridColumn(key)){

            if (state2['TC'][2] != cellValue && 
                state2['TC'][5] != cellValue && 
                state2['TC'][8] != cellValue && 
                state2['CC'][2] != cellValue && 
                state2['CC'][5] != cellValue && 
                state2['CC'][8] != cellValue && 
                state2['BC'][2] != cellValue && 
                state2['BC'][5] != cellValue && 
                state2['BC'][8] != cellValue) {

                    return true;

            } else {return false;}
        }

        if (isRightGridColumn(key)){

            if (state2['TR'][2] != cellValue && 
                state2['TR'][5] != cellValue && 
                state2['TR'][8] != cellValue && 
                state2['CR'][2] != cellValue && 
                state2['CR'][5] != cellValue && 
                state2['CR'][8] != cellValue && 
                state2['BR'][2] != cellValue && 
                state2['BR'][5] != cellValue && 
                state2['BR'][8] != cellValue) {

                    return true;

            } else {return false;}
        }
    }
}

/*-------------------Fill Check-------------------*/

function isSubGridFull(key) {
    if (state2[key][0] != '' &&
        state2[key][1] != '' &&
        state2[key][2] != '' &&
        state2[key][3] != '' &&
        state2[key][4] != '' &&
        state2[key][5] != '' &&
        state2[key][6] != '' &&
        state2[key][7] != '' &&
        state2[key][8] != '' ) {
        
            return true;

        } else {return false}
}

function isGridFull () {
    
    for (let key in state2) {
       
        for (let i = 0; i < 9; ++i) {

            if (state2[key][i] != '') {
                continue;
            }
            else {return false}

        }
    }
    return true;
}

/*-------------------Win Check-------------------*/


//Checks if game is won by checking if all cells contain the correct numbers. If so, displays win-screen.
function checkWinSudoku() {
    
    for (let key in state2) {

        for (let i = 0; i < 9; ++i) {

            const resetVal = $(`#${key}-${i}`).text();
            state2[key][i] = resetVal;

        }
    }

    if (isGridFull() && !$('.s-cell').hasClass('wrong')) {
        const winScreen = $(`
        <div class='win-screen'>
        🎉 YOU WIN!!! 🎉
        <button class='play-again'>Play again?</button>
        </div>`
        );
        $('.sudoku').append(winScreen);
    }
}

/*-------------------Pseudo-Random Number Generators-------------------*/

function randomNumMax8 () {
    let max8 = Math.ceil((Math.random() * 4) + (Math.random() * 4));
    return max8;
}

function randomNum0to8 () {
    return Math.floor(Math.random() * 9);
}

function randomNum1to9 () {
    return Math.floor(Math.random() * 9) + 1;
}

function randomNum2to8 () {
    return Math.floor(Math.random() * 7) + 2;
}

function randomNum1to5 () {
    return Math.floor(Math.random() * 5) + 1;
}

function randomNum4to8 () {
    return Math.floor(Math.random() * 4) + 5;
}

/*-------------------Grid, Selector, and State Functions-------------------*/


//Stores correct value for hidden cells as hidden data. Used to validate whether or not a player's input for an empty cell is correct.
function preserveData () {

    for (let key in state2) {

        for (let i = 0; i < 9; ++i){
            
            const saveData = $(`#${key}-${i}`).data('value');

            if (saveData != undefined){

                restoreData[key][i] = saveData;

            }
        }
    }

}


//Creates and renders initial grid, along with mode-selection buttons
function createAndRenderGrid () {

    
    $('.sudoku').empty();

    for (let key in state2) {

        const newGrid = $(`<div class=${key}></div>`)
        $('.sudoku').append(newGrid);

        for (let i = 0; i < state2[key].length; ++i) {
            
            const newCell = $(`<div class="s-cell" id=${key}-${i}>${state2[key][i]}</div>`);
            
            const updateData = restoreData[key][i];
            newCell.data('value', updateData);

            $(`.${key}`).append(newCell);

        }
    }
    const easyMode = $('<button class="s-button" id="easy">Easy</button>');
    const mediumMode = $('<button class="s-button" id="medium">Medium</button>')
    const hardMode = $('<button class="s-button" id="hard">Hard</button>')
    $('.sudoku').append(easyMode, mediumMode, hardMode);

}


//Fills grid with unique numbers ranging from 1 to 9 with no numbers repeating in rows, columns, or subgrids.
function fillGrid () {

    if (isGridFull) {
        $.extend( true, state2, defaultState);
    }

    newKey: for (let key in state2){
        
        let i = 0;
        let subGridFailCount = 0;
        let gridFailCount = 0;

        newCell: while (i < 9) {

            let cellNum = randomNum0to8();

            if (state2[key][i] === '') {
                
                sameCell: while (isSubGridFull(key) === false) {

                    let cellValue = randomNum1to9();

                    if (noRepeatsSubGrid(key, cellValue) &&
                        noRepeatsColumn(key, i, cellValue) &&
                        noRepeatsRow (key, i, cellValue) &&
                        subGridFailCount < 100 &&
                        gridFailCount < 1000) {
                            
                            state2[key][i] = cellValue;
                            ++i;
                            subGridFailCount = 0;
                            continue newCell;

                        } else if (subGridFailCount >= 100) {

                            state2[key] = [
                            '','','',
                            '','','',
                            '','','',],
                            subGridFailCount = 0;
                            i = 0;
                            continue sameCell;

                        } else if (gridFailCount >= 1000) {

                            $.extend( true, state2, defaultState);
                            fillGrid();

                        } else {
                            ++subGridFailCount;
                            ++gridFailCount;
                            continue sameCell;
                        }
                    }
                
            } else if (isSubGridFull(key)) {
                
                continue newKey;

            } else {
                continue newCell
            }
        }
    }
    createAndRenderGrid();
};


// Creates and renders the number selector, which is used to allow the player to enter values into empty cells.
function createAndRenderNumSelector () {

    const selector = $(`
    <div class='num-selector'>
    <button class='num-button'>1</button>
    <button class='num-button'>2</button>
    <button class='num-button'>3</button>
    <button class='num-button'>4</button>
    <button class='num-button'>5</button>
    <button class='num-button'>6</button>
    <button class='num-button'>7</button>
    <button class='num-button'>8</button>
    <button class='num-button'>9</button>
    </div>`);
        $('.sudsec').append(selector);

}

/*-------------------Hiding Functions-------------------*/

//Pick a random amount of cells to hide for each game mode.  
function hideCellsEasy () {
    
        for (let key in state2) {
        
            let hideNum = randomNum1to5();
            let i = 0;

            while (i < hideNum) {

                let randomCellNum = randomNum0to8();
                let randomCellValue = state2[key][randomCellNum];
                let currentCellValue = $(`#${key}-${randomCellNum}`).text();

                if (randomCellValue != '') {
                    
                    state2[key][randomCellNum] = '';
                    createAndRenderGrid();
                    $(`#${key}-${randomCellNum}`).data('value', currentCellValue);
                    preserveData();
                    ++i;
                    
                }

                else {continue}

        }
    }
}


function hideCellsMedium () {
    
    for (let key in state2) {
    
        let hideNum = randomNum2to8();
        let i = 0;

        while (i < hideNum) {

            let randomCellNum = randomNum0to8();
            let randomCellValue = state2[key][randomCellNum];
            let currentCellValue = $(`#${key}-${randomCellNum}`).text();

            if (randomCellValue != '') {
                
                state2[key][randomCellNum] = '';
                createAndRenderGrid();
                $(`#${key}-${randomCellNum}`).data('value', currentCellValue);
                preserveData();
                ++i;
                
            }

            else {continue}

        }
    }
}


function hideCellsHard () {
    
    for (let key in state2) {
    
        let hideNum = randomNum4to8();
        let i = 0;

        while (i < hideNum) {

            let randomCellNum = randomNum0to8();
            let randomCellValue = state2[key][randomCellNum];
            let currentCellValue = $(`#${key}-${randomCellNum}`).text();

            if (randomCellValue != '') {
                
                state2[key][randomCellNum] = '';
                createAndRenderGrid();
                $(`#${key}-${randomCellNum}`).data('value', currentCellValue);
                preserveData();
                ++i;
                
            }

            else {continue}

        }
    }
}


/*------------------------------------------------------------------------------Click Handlers------------------------------------------------------------------------------*/


//Enables "Easy" mode button.
$('.sudoku').on('click', '#easy', function() {

    fillGrid();
    hideCellsEasy();
    $('#easy, #medium, #hard').css('display', 'none');

});


////Enables "Medium" mode button.
$('.sudoku').on('click', '#medium', function() {

    fillGrid();
    hideCellsMedium();
    $('#easy, #medium, #hard').css('display', 'none');

});


//Enables "Hard" mode button.
$('.sudoku').on('click', '#hard', function() {

    fillGrid();
    hideCellsHard();
    $('#easy, #medium, #hard').css('display', 'none');

});


//Enables "Play Again?" button.
$('.sudoku').on('click', '.play-again', function() {

    $.extend( true, state2, defaultState);
    $.extend( true, restoreData, defaultState);
    createAndRenderGrid();
    
});


//Allows player to select an empty cell before inputing a number.
$('.sudoku').on('click', '.s-cell', function() {

    let cellValue = $(this).text();
    
    if ($(this).hasClass('selected-cell')){
        $(this).removeClass('selected-cell');
    }

    else if (cellValue === '' || $(this).hasClass('wrong')){
        $('.s-cell').removeClass('selected-cell');
        $(this).addClass('selected-cell');
    }
});


//Allows player to input numbers into the selected cell, and evaluates if that number is correct or not.
$('.sudsec').on('click', '.num-button', function() {

    const selectedNum = $(this).text();
    const cellValReal = $('.selected-cell').data('value');
    $('.selected-cell').text(selectedNum);
    const id = $('.selected-cell').attr('id')
    const cellKey = id[0] + id[1];
    const cellIndex = id[3];


   if (selectedNum != cellValReal){

        $('.selected-cell').addClass('wrong');

   } else if ($('.selected-cell').hasClass('wrong') && selectedNum == cellValReal) {

        $('.selected-cell').removeClass('wrong');

   }

   else if (selectedNum == cellValReal) {

        state2[cellKey][cellIndex] = cellValReal;
        $('.selected-cell').removeClass('selected-cell');
        
   }

   checkWinSudoku();
});


/*------------------------------------------------------------------------------Runtime Code------------------------------------------------------------------------------*/

$(document).ready(createAndRenderGrid);
$(document).ready(createAndRenderNumSelector);