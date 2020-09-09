import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import Cell from './Cell';
import * as allActions from '../store/actions';
import './styles.css';
import GameOver from './GameOver';

class SolverCell extends Component {

  updatedBoardData = cellData => {
    let { boardData } = this.state;
    boardData.map(dataRow => {
      return dataRow.map(cell => {
        cell.isMarked = cell.id === cellData.id ? true : false;
        return cell;
      });
    });
    return boardData;
  };

  handleCellClick = data => {
    const {  actions } = this.props;
   
      actions.revealCell(this.props.updatedBoardData, data);
      if (data.hasMine) {
        actions.gameOver();
      }
     
  };

  renderBoardData = () => {
    const { updatedBoardData } = this.props;
    return updatedBoardData.map((dataRow, index) => <div key={'row' + index}> {dataRow.map(cellData => this.addCell(cellData))} </div>);
  };

  addCell = data => {
    return <Cell key={'key' + data.id} data={data} showVal={data.isRevealed } onClick={() => this.handleCellClick(data)} />;
  };
  render() {
    const { lost, won } = this.props;
    return (
      <div className={classNames('board', { gameOver: lost })}>
        
        {this.renderBoardData()}
        <GameOver lost={lost} won={won} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { updatedBoardData, won, lost } = state.boardStatus;
  const { command } = state.currentCommand;
  return {
    command,
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
)(SolverCell);
