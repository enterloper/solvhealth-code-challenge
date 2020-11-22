import React from 'react';
import {shape, func, number, string, arrayOf} from 'prop-types';
import styled from 'styled-components';
import Square from './Square';

const BoardColumn = ({ handlePlayerAttack, column }) => {  
  const StyledColumn = styled.div`
    display: flex;
    width: 100%;
    background: blue;
  `;
  return (
    <StyledColumn>
      {column.map((square, index) => (
        <Square 
            key={index}
            handleClick={handlePlayerAttack}
            id={square}
        />
      ))}
    </StyledColumn>
  );
}

BoardColumn.propTypes = {
    handlePlayerAttack: func.isRequired,
    id: number,
    column: shape({
      column_id: string.isRequired,
      row: arrayOf(shape({
        square_id: string.isRequired,
        status: string.isRequred
      }).isRequired
    ).isRequired
  })
};

export default BoardColumn;
