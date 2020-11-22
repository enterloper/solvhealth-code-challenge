import React from 'react';
import {array, func} from 'prop-types';
import styled from 'styled-components';
import BoardColumn from './BoardColumn';

const StyledBoard = styled.div`
  border: 1px solid #4EA5D9;
  border-radius: 3px;
  height: 500px;
  width: 500px;
  background-image: url('../../public/assets/just-waves.png');
`;

const Board = ({ board, handlePlayerAttack }) => (
  <StyledBoard>
    {board.map(column => (
      <BoardColumn 
          key={column.column_id}
          id={column.column_id}
          column={column.row}
          handlePlayerAttack={handlePlayerAttack}
      />
    ))}
  </StyledBoard>
);

Board.propTypes = {
    board: array.isRequired,
    handlePlayerAttack: func.isRequired
};

export default Board; 