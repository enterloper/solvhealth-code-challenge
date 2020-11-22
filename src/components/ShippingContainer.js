import React from 'react';
import {arrayOf, shape, string} from 'prop-types';
import styled from 'styled-components';
// import Carrier from '../../public/svg/carrier.svg';
// import Destroyer from '../../public/svg/destroyer.svg';
// import Submarine from '../../public/svg/submarine.svg';

const StyledShippingContainer = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  height: 150px;
  
`;
  //48 73 107

const StyledBattleCarrierContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const StyledReconContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledTest = styled.p`
  font-family:  usnavym3d
`
const ShippingContainer = () => (
  <StyledShippingContainer>
    <StyledBattleCarrierContainer>
      <StyledTest>C</StyledTest>
      <p>Battleship</p>
    </StyledBattleCarrierContainer>
    <StyledReconContainer>
      <p>Destroyer</p>
      <p>Submarine</p>
      <p>Patrol Boat</p>
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