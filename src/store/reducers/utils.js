import {   REVEAL_CELL } from '../../constants/ActionTypes';

export const initializeBoard = (rows = 0, cols = 0) => {
  let boardData = [];
  let id = 0;
  for (let r = 0; r < rows; r++) {
    boardData.push([]);
    for (let c = 0; c < cols; c++) {
      boardData[r][c] = {
        id: id++,
        value: 0,
        isRevealed: false,
        isMarked: false,
        isGuessed: false,
        hasMine: false
      };
    } 
  } 
  const totalMines = parseInt((rows * cols) / 3);
  boardData = plantMines(boardData, rows, cols, totalMines);

  return boardData;
};

export const updateBoard = action => {
  let updatedBoardData = action.boardData;
  let cellData = action.cell;
  return updatedBoardData.map(dataRow => {
    return dataRow.map(cell => {
      if (cell.id === cellData.id) {
         if (action.type === REVEAL_CELL) {
          cell.isRevealed = true;
          if (!cell.hasMine) {
            const r = parseInt(cell.id / updatedBoardData.length);
            const c = cell.id % updatedBoardData[0].length;
            cell.value = getNeighborMines(updatedBoardData, r, c);
            
          } else {
            cell.value = '💣';
          }
        } 
      }
      return cell;
    });
  });
};


export const haswon = boardData => {
  boardData.map(row => row.filter(cell => cell.hasMine === true).length).reduce((sum, curVal) => sum + curVal, 0);

  return false;
};

const getNeighborMines = (boardData, row, col) => {
  const totalRows = boardData.length;
  const totalCols = boardData[0].length;
  let mines = 0;
  if (isValidCell(totalRows, totalCols, row - 1, col - 1) && boardData[row - 1][col - 1].hasMine) {
    mines++;
  }
  if (isValidCell(totalRows, totalCols, row, col - 1) && boardData[row][col - 1].hasMine) {
    mines++;
  }
  if (isValidCell(totalRows, totalCols, row + 1, col - 1) && boardData[row + 1][col - 1].hasMine) {
    mines++;
  }
  if (isValidCell(totalRows, totalCols, row - 1, col) && boardData[row - 1][col].hasMine) {
    mines++;
  }
  if (isValidCell(totalRows, totalCols, row + 1, col) && boardData[row + 1][col].hasMine) {
    mines++;
  }
  if (isValidCell(totalRows, totalCols, row - 1, col + 1) && boardData[row - 1][col + 1].hasMine) {
    mines++;
  }
  if (isValidCell(totalRows, totalCols, row, col + 1) && boardData[row][col + 1].hasMine) {
    mines++;
  }
  if (isValidCell(totalRows, totalCols, row + 1, col + 1) && boardData[row + 1][col + 1].hasMine) {
    mines++;
  }
  return mines;
};

const isValidCell = (rows, cols, x, y) => {
 
  if (x >= 0 && x < rows && y >= 0 && y < cols) return true;
  return false;
};

const plantMines = (boardData, rows, cols, totalMines) => {
  let r = 0;
  let c = 0;
  let minesPlanted = 0;
  while (minesPlanted < totalMines) {
    r = getRandomNumber(rows);
    c = getRandomNumber(cols);
    if (!boardData[r][c].hasMine) {
      boardData[r][c].hasMine = true;
      boardData[r][c].value = '💣';
      minesPlanted++;
    }
  } 
  return boardData;
};

const getRandomNumber = upperBound => {
  return Math.floor(Math.random() * upperBound);
};
