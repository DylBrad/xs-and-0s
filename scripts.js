// hover over cell
//     show shaded X (add .x class on board)

// click cell
//     set class .x on cell
//     switch to circles turn (.circle class on board)
//     check if win or draw
//     if (win)
//          show winner text
//     else if (no one wins)
//          switch player

const board = document.getElementById('board');
const cells = document.querySelectorAll('[data-cell]');
const winnerMessage = document.querySelector('.winning-message');
const winnerText = document.querySelector('[data-winning-message-text]');
let isXsTurn = true;

const xTurn = function () {
    board.classList.add('x');
    board.classList.remove('circle');
    isXsTurn = true;
};
const oTurn = function () {
    board.classList.add('circle');
    board.classList.remove('x');
    isXsTurn = false;
};

const checkXs = function() {
    if(cells[0].classList.contains('x') && cells[1].classList.contains('x') && cells[2].classList.contains('x') ||
       cells[3].classList.contains('x') && cells[4].classList.contains('x') && cells[5].classList.contains('x') ||
       cells[6].classList.contains('x') && cells[7].classList.contains('x') && cells[8].classList.contains('x') ||
       cells[0].classList.contains('x') && cells[3].classList.contains('x') && cells[6].classList.contains('x') ||
       cells[1].classList.contains('x') && cells[4].classList.contains('x') && cells[7].classList.contains('x') ||
       cells[2].classList.contains('x') && cells[5].classList.contains('x') && cells[8].classList.contains('x') ||
       cells[0].classList.contains('x') && cells[4].classList.contains('x') && cells[8].classList.contains('x') ||
       cells[2].classList.contains('x') && cells[4].classList.contains('x') && cells[6].classList.contains('x')) {
        winnerMessage.classList.add('show');
        winnerText.textContent = 'X Wins!';
    } 
};
const checkOs = function() {
    if(cells[0].classList.contains('circle') && cells[1].classList.contains('circle') && cells[2].classList.contains('circle') ||
       cells[3].classList.contains('circle') && cells[4].classList.contains('circle') && cells[5].classList.contains('circle') ||
       cells[6].classList.contains('circle') && cells[7].classList.contains('circle') && cells[8].classList.contains('circle') ||
       cells[0].classList.contains('circle') && cells[3].classList.contains('circle') && cells[6].classList.contains('circle') ||
       cells[1].classList.contains('circle') && cells[4].classList.contains('circle') && cells[7].classList.contains('circle') ||
       cells[2].classList.contains('circle') && cells[5].classList.contains('circle') && cells[8].classList.contains('circle') ||
       cells[0].classList.contains('circle') && cells[4].classList.contains('circle') && cells[8].classList.contains('circle') ||
       cells[2].classList.contains('circle') && cells[4].classList.contains('circle') && cells[6].classList.contains('circle')) {
        winnerMessage.classList.add('show');
        winnerText.textContent = 'O Wins!';
    } 
};

const playGame = () => {
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (isXsTurn === true) {
                cell.classList.add('x');
                checkXs()
                oTurn();
            } else if (isXsTurn === false) {
                cell.classList.add('circle');
                checkOs();
                xTurn();
            };
        });
    });
};

playGame()

/**
 * ToDo
 * [ ] fix bug - double clicking cell changes symbol. 
 * [X] display winner message and reset button 
 * [ ] clear board and classes onclicking reset button
 */