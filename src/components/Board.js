import React from 'react';
import {array, func} from 'prop-types';
import styled from 'styled-components';
import BoardColumn from './BoardColumn';

const Board = ({ board, handlePlayerAttack }) => {
  const StyledBoard = styled.div`
    border: 1px solid #000;
    height: 1000px;
    width: 1000px;
  `;
  console.log({board});
  return (
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
}

Board.propTypes = {
    board: array.isRequired,
    handlePlayerAttack: func.isRequired
};

export default Board;