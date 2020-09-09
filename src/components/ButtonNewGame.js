import React , { Component } from 'react';
import { connect } from 'react-redux';
import { generateGrid } from '../store/actions';

class ButtonNewGame extends Component {

    state = {

    }

    handleChange = event => {
        const { value } = event.target;
        this.setState({ text: value });
    };
    handleSubmit = event => {
        event.preventDefault();
        const { generateGrid } = this.props;
        generateGrid(6, 6);
    };
    render() {
        
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <button className="btn">New Game</button>
                </form>
            </div>
        );
    }
}

export default connect(
    null, 
    { generateGrid }
    ) (ButtonNewGame);


