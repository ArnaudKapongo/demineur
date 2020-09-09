import React, { Component } from 'react';
import { connect } from 'react-redux';

import { generateGrid } from '../store/actions';
import './styles.css';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ text: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { generateGrid } = this.props;
    const text = event.target.userInput.value;
    const vals = text.split(' ');
    const rows = parseInt(vals[0]);
    const cols = parseInt(vals[1]);
    generateGrid(rows, cols);
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input className="input" type="text" name="userInput" onChange={this.handleChange} value={this.state.text} placeholder="Please enter row and column, e.g. 5 5" />
          <button className="btn"> Generate Grid </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { generateGrid }
)(UserInput);
