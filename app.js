
const createBoard = (size) => {
  let board = [];
  for(let i = 0; i < size; i++){
    board.push(new Array());
    for(let j = 0; j <size; j++){
      board[i].push(0);
    }
  }
  return board;
}

const displayBoard = (board) => {
  for(let row in board){
    for(let id in board[row]){
      let div = document.createElement('div');
      div.setAttribute('class', 'cell');
      div.setAttribute('id', parseInt(id) + parseInt(row * board.length));
      document.getElementById('board').appendChild(div);
    }
  }
}

let boardDim = 9;
let cellSize = 50;

document.querySelector(':root').style = `--size-cell: ${cellSize}px`;
document.getElementById('board').style.gridTemplateColumns = `repeat(${boardDim}, var(--size-cell))`;

let board = createBoard(boardDim);
displayBoard(board);
// console.table(board);