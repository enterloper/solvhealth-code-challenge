import React from 'react';
import {bool, func, string} from 'prop-types';
import styled from 'styled-components';

const StyledSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid #2663b1;
  background-color: ${({ isPlayer1, occupied }) => (isPlayer1 && occupied) ? 'slategrey' : 'transparent'}}
`;

const StyledPin = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ status} ) => status === 'miss' ? 'white' : '#e42c2c'};
`;

const Square = ({handleClick, occupied, square_id, isPlayer1, status}) => {
  const handlePlayerMove = event => { 
    if(!isPlayer1) {
      handleClick(event)
    }
  }

  return (
    <StyledSquare 
      id={square_id} 
      isPlayer1={isPlayer1}
      occupied={occupied}
      onClick={handlePlayerMove} 
      status={status}
    >
        {status && <StyledPin status={status} />}
    </StyledSquare>
  );
}

Square.propTypes = {
    handleClick: func.isRequired,
    square_id: string.isRequired,
    isPlayer1: bool,
    occupied: bool.isRequired,
    status: string
};

Square.defaultProps = {
  isPlayer1: false,
  status: undefined
};

export default Square;
