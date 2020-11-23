import React from 'react';
import {array, bool, func} from 'prop-types';
import styled from 'styled-components';
import BoardColumn from './BoardColumn';

const StyledBoard = styled.div`
  border: 1px solid #4EA5D9;
  border-radius: 3px;
  height: 550px;
  width: 550px;
  background-image: url('../../public/assets/just-waves.png');
`;

const AlphaLegendWrapper = styled.div`
  display: flex;
`;

const AlphaLegend = styled.div`
  display: flex;
  flex-direction: column;
`;

const NumberLegend = styled.div`
  display: flex;
`;

const LegendSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid #2663b1;
`;

const buildYAxis = array => (
  array.map(letter => <LegendSquare key={letter}>{letter}</LegendSquare>)
);

const buildXAxis = () => {
  const xAxis = [<LegendSquare key={0} />];
  for(let i = 1; i < 11; i++) {
    xAxis.push(<LegendSquare key={i}>{i}</LegendSquare>);
  }
  return xAxis;
}

const Board = ({ board, isPlayer1, handlePlayerAttack }) => {
  const alphas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  return (
    <StyledBoard>
      <NumberLegend>
        {buildXAxis()}
      </NumberLegend>
      <AlphaLegendWrapper>
        <AlphaLegend>
          {buildYAxis(alphas)}
        </AlphaLegend>
        <div>
          {board.map(column => (
            <BoardColumn 
                key={column.column_id}
                id={column.column_id}
                column={column.row}
                handlePlayerAttack={handlePlayerAttack}
                isPlayer1={isPlayer1}
            />
          ))}
        </div>
      </AlphaLegendWrapper>
    </StyledBoard>
  );
}

Board.propTypes = {
    board: array.isRequired,
    handlePlayerAttack: func.isRequired,
    isPlayer1: bool
};

Board.defaultProps = {
  isPlayer1: false
};

export default Board; 