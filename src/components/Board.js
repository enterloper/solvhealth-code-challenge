import React from 'react';
import styled from 'styled-components';
import BoardRow from './BoardRow';

const Board = () => {
  const columns = new Array(10).fill(0);

  const StyledBoard = styled.div`
    border: 1px solid #000;
    height: 1000px;
    width: 1000px;
    background-color: red;
  `;
  
  return (
    <StyledBoard>
      {columns.map((column, index) => <BoardRow id={column+index} key={column}></BoardRow>)}
    </StyledBoard>
  );
}

export default Board;