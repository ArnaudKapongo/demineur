import React, { Component } from 'react';
import { connect } from 'react-redux';

import ButtonNewGame from './ButtonNewGame';
import SolverCell from './SolverCell';

class App extends Component {
  render() {
    
    return (
      <div className="App">
       <ButtonNewGame />
        <SolverCell/>
      </div>
    );
  }
}

export default connect()(App);
