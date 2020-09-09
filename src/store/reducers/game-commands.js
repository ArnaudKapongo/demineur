import { REVEAL_COMMAND } from '../../constants/ActionTypes';

const command = (state = { command: 'Mark' }, action) => {
  switch (action.type) {
    case REVEAL_COMMAND:
  
      return { command: action.text };

    default:
      return state;
  }
};

export default command;