import React, { Component } from 'react';

import './styles.css';

class Cell extends Component {
    render() {

        const { data, onClick, showVal } = this.props;

        
        return (
        <div className="cell" onClick={onClick}>
            { showVal && data.value }
        </div>
        );
    }
}

export default Cell;

