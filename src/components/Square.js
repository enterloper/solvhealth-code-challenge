import React from 'react';
import {func, string} from 'prop-types';
import styled from 'styled-components';

const Square = ({handleClick, id}) => {
  const StyledSquare = styled.div`
    width: 98px;
    height: 98px;
    border: 1px solid black;
    
  `;
  
  return (
    <StyledSquare id={id} onClick={handleClick} shipPresence>
       test
    </StyledSquare>
  );
};

Square.propTypes = {
    handleClick: func.isRequired,
    id: string.isRequired
};

export default Square;