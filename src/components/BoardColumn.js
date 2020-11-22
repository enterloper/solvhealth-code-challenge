import React from 'react';
import {shape, func, number, string, arrayOf} from 'prop-types';
import styled from 'styled-components';
import Square from './Square';

const StyledColumn = styled.div`
  display: flex;
  width: 100%;
`;

const BoardColumn = ({ handlePlayerAttack, column }) => {  
  console.log({column})
  return (
    <StyledColumn>
      {column.map(square => (
        <Square 
            key={square.square_id}
            handleClick={handlePlayerAttack}
            id={square.square_id}
            status={square.status}
        />
      ))}
    </StyledColumn>
  );
}

BoardColumn.propTypes = {
    handlePlayerAttack: func.isRequired,
    id: number,
    column: arrayOf(shape({
        square_id: string.isRequired,
        status: string.isRequred
      })).isRequired
};

export default BoardColumn;
