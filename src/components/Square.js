import React from 'react';
import {func, string} from 'prop-types';
import styled from 'styled-components';

const StyledSquare = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid #2663b1;
`;

const Square = ({handleClick, id, status}) => {
  console.log(status);
  return (
    <StyledSquare id={id} onClick={handleClick} shipPresence>
       
    </StyledSquare>
  );
};

Square.propTypes = {
    handleClick: func.isRequired,
    id: string.isRequired,
    status: string
};

export default Square;