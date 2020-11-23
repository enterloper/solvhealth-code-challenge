import React from 'react';
import {array, bool, func} from 'prop-types';
import styled from 'styled-components';
import BoardColumn from './BoardColumn';

const StyledBoard = styled.div`
  border: 1px solid #4EA5D9;
  border-radius: 3px;
  height: 500px;
  width: 500px;
  background-image: url('../../public/assets/just-waves.png');
`;

const Board = ({ board, isPlayer1, handlePlayerAttack }) => (
  <StyledBoard>
    {board.map(column => (
      <BoardColumn 
          key={column.column_id}
          id={column.column_id}
          column={column.row}
          handlePlayerAttack={handlePlayerAttack}
          isPlayer1={isPlayer1}
      />
    ))}
  </StyledBoard>
);

Board.propTypes = {
    board: array.isRequired,
    handlePlayerAttack: func.isRequired,
    isPlayer1: bool
};

Board.defaultProps = {
  isPlayer1: false
};

export default Board; 