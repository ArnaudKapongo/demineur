import * as actions from '../../constants/ActionTypes';



export const generateGrid = (rows, cols) => {
    return {
        type: actions.GENERATE_GRID,
        rows,
        cols
    };
};


  
  export const revealCell = (boardData, cell) => {
    return {
      type: actions.REVEAL_CELL,
      boardData,
      cell
    };
  };
  
  
  
  export const gameOver = () => {
    return {
      type: actions.GAME_OVER
    };
  };
  

export const setCommand = command => {
     if (command === 'Reveal') {
      return {
        type: actions.REVEAL_COMMAND,
        text: command
      };
    }
  };



export const RESET = 'RESET';

export const reset = () => {
    return {
        type: actions.RESET
    };
};


export const you_loose = (color) => {
    return {
        type: actions.YOU_LOOSE,
        color
    };
};

export const you_win = (color) => {
    return {
        type: actions.YOU_WIN,
        color
    };
};

export const visibleCell = (boardData, cell) => {
    return {
        type: actions.VISIBLE_CELL,
        boardData,
        cell
    };
};
