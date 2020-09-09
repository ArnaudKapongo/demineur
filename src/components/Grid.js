import React, { Component } from 'react';
import Cell from './Cell';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from '../store/actions';

import './styles.css';


class Grid extends Component {

    handleCellClick = data => {
        const { actions } = this.props;
        actions.visibleCell(this.props.updatedBoardData, data);
    };
    renderBoardData = () => {
        const { updatedBoardData } = this.props;
        return updatedBoardData.map((dataRow, index) => <div key={'row' + index}> {dataRow.map(cellData => this.addCell(cellData))} </div>);
    };
    
    addCell = data => {
        return <Cell key={'key' + data.id} data={data} showVal={data.isVisible}  onClick={() => this.handleCellClick(data)}/>;
    };

    render() {
        return(
        <div className="board">
            {this.renderBoardData()}
        </div>
        );
    }
    
}

const mapStateToProps = state => {
    const {updatedBoardData, won, lost } = state.boardStatus;
    return {
        won,
        lost,
        updatedBoardData
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(allActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid);