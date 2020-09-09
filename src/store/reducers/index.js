import { combineReducers } from 'redux';

import {  REVEAL_CELL, GAME_OVER } from '../../constants/ActionTypes';
import * as actions from '../../constants/ActionTypes';
import commandReducer from './game-commands';
import * as Utils from './utils';

const initialState = {
  boardInitialized: false,
  updatedBoardData: [],
  rows: 6,
  cols: 6,
  won: false,
  lost: false
};

const executeCommand = (state = initialState, action) => {
  switch (action.type) {
    case actions.GENERATE_GRID: {
      const rows = action.rows;
      const cols = action.cols;
    
      let updatedBoardData = Utils.initializeBoard(rows, cols);
      return {
        ...state,
        updatedBoardData,
        rows,
        cols,
        lost: false
      };
    }
  
    case REVEAL_CELL: {
      
      return {
        ...state,
        boardInitialized: true,
        updatedBoardData: Utils.updateBoard(action),
        won: Utils.haswon(action.boardData)
      };
    }

    

    case GAME_OVER:
      return {
        ...state,
        lost: true
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentCommand: commandReducer,
  boardStatus: executeCommand
});

export default rootReducer;
