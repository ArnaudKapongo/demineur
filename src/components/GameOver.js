import React from 'react';

import { Fragment } from 'react';

import './styles.css';

const GameOver = ({ lost, won }) => {
  return (
    <Fragment>
      {(lost || won) && (
        <div className="finish-msg">
          {lost && <span> YOU LOOSE </span>} {won && <span> YOU WIN! </span>}
        </div>
      )}
    </Fragment>
  );
};

export default GameOver;