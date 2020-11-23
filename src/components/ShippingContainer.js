import React from 'react';
import {arrayOf, shape, string} from 'prop-types';
import styled from 'styled-components';

const StyledShippingContainer = styled.div`
  border: 3px solid #e42c2c;
  border-radius: 3px;  
  height: 120px;
  background-color: #2663b1;
`;

const StyledBattleCarrierContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const StyledReconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 12px;
`;

const StyledShip = styled.div`
> p {
  font-family:  BattleShips1;
  font-size: 40px;
  line-height: 1;
  margin: 0;
  color: ${({ship}) => ship.length ? 'black' : '#e42c2c'};
}`;

const ShippingContainer = ({ ships }) => (
  <StyledShippingContainer>
    <StyledBattleCarrierContainer>
      <StyledShip ship={ships.carrier}>
        <p>0</p>
      </StyledShip>
      <StyledShip ship={ships.battleship}>
        <p>F</p>
      </StyledShip>
    </StyledBattleCarrierContainer>
    <StyledReconContainer>
      <StyledShip ship={ships.destroyer}>
        <p>p</p>
      </StyledShip>
      <StyledShip ship={ships.submarine}>
        <p>s</p>
      </StyledShip>
      <StyledShip ship={ships.patrol}>
        <p>P</p>
      </StyledShip>
    </StyledReconContainer>
  </StyledShippingContainer>
);

ShippingContainer.propTypes = {
  ships: shape({
    carrier: arrayOf(string),
    battleship: arrayOf(string),
    destroyer: arrayOf(string),
    submarine: arrayOf(string),
    patrol: arrayOf(string),
  })
};

export default ShippingContainer;