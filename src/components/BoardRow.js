import React from 'react';
// import {string} from 'prop-types';
import styled from 'styled-components';
import Square from './Square';

const BoardRow = () => {
  const board = new Array(10).fill();
  
  const StyledRow = styled.div`
    display: flex;
    width: 100%;
    background: blue;
  `;
  
  return (
    <StyledRow>
      {board.map((square, index) => <Square key={index} id={square}/>)}
    </StyledRow>
  );
}


export default BoardRow;
