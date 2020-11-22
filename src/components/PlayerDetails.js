import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import styled from 'styled-components';

const StyledPlayerDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledPlayerTitle = styled.div`
  display: flex;
  height: 40px;
`;

const StyledIndicatorContainer = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIndicator = styled.div`
  display: ${({ playerTurn, playerId }) => playerTurn === playerId ? 'block' : 'none'};
  background-color: ${({playerId}) => playerId === 1 ? 'blue' : 'red' };
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;

const StyledPlayerName = styled.div`
  width: 90%;
  margin: auto;
`;

const PlayerDetails = ({ name, playerId, playerTurn }) => (
  <StyledPlayerDetails>
    <StyledPlayerTitle>
      <StyledIndicatorContainer>
        <StyledIndicator playerId={playerId} playerTurn={playerTurn} />
      </StyledIndicatorContainer>
      <StyledPlayerName>{name}</StyledPlayerName>
    </StyledPlayerTitle>
  </StyledPlayerDetails>
);

PlayerDetails.propTypes = {
  name: string,
  playerTurn: number,
  shipsAvailable: shape({
    carrier: arrayOf(string),
    battleship: arrayOf(string),
    destroyer: arrayOf(string),
    submarine: arrayOf(string),
    patrol: arrayOf(string),
  }),
  playerId: number,
};

export default PlayerDetails;