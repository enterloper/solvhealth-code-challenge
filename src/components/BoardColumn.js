import React from 'react';
import {shape, func, number, string, arrayOf, bool} from 'prop-types';
import styled from 'styled-components';
import Square from './Square';

const StyledColumn = styled.div`
  display: flex;
  width: 100%;
`;

const BoardColumn = ({ handlePlayerAttack, isPlayer1, column, playerTurn }) => (
  <StyledColumn>
    {column.map(square => (
      <Square 
          key={square.square_id}
          handleClick={handlePlayerAttack}
          square_id={square.square_id}
          isPlayer1={isPlayer1}
          playerTurn={playerTurn}
          status={square.status}
          occupied={square.occupied}
      />
    ))}
  </StyledColumn>
);

BoardColumn.propTypes = {
    handlePlayerAttack: func.isRequired,
    id: number,
    isPlayer1: bool,
    playerTurn: number,
    column: arrayOf(shape({
        square_id: string.isRequired,
        status: string.isRequred,
        occupied: bool.isRequired
      })).isRequired
};

export default BoardColumn;
