import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import PlayerDetails from './PlayerDetails';
import Board from './Board';
import Footer from './Footer';
import buildBoard from '../helpers/buildBoard';
import placeShips from '../helpers/placeShips';
import convertToAlphaNumeric from '../helpers/convertToAlphaNumeric';
import convertToNumeric from '../helpers/convertToNumeric';
import reducePositions from '../helpers/reducePositions';
import inflictShipDamage from '../helpers/inflictShipDamage';
import {     
  initialPlayer1Ships,
  initialPlayer2Ships,
  initialPlayer2Moves 
} from '../../public/mvp_data';
import '../../public/styles/stylesheet.css';

/**
 * TODO: make constants file & Proptypes file
 * CRIMSON #e42c2c;
 * STEELBLUE #2663b1
 */
const StyledPlayingField = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledPlayersContainer = styled.header`
  display: flex;
  width: calc(100% - 20px);
  justify-content: center;
  margin: 10px 10px;
`;

const StyledPageTitle = styled.div`
  > h1 {
    text-align: center;
    margin: 64px auto 0;
    font-family: 'Monoton', cursive;
    font-weight: 400;
    font-size: 50px;
    color: #e42c2c;
  }
`;

const StyledDialogueBox = styled.div`
  width:100%;
  text-align: center;
  
  > h4 {
    height: 23px;
    margin: 24px auto;
    font-size: 24px;
    width: 85%;
  }
  `;

const StyledDivider = styled.div`
  height: 1px;
  width: 85%;
  border-bottom: 1px solid black;
  margin-bottom: 24px;
  &:last-of-type {
    margin-top: 240px;
  }
`;

// initialize board and ship state
const player1Terrain = buildBoard();
const player2Terrain = buildBoard();

const playerOccupation = {
  player1: placeShips(player1Terrain, initialPlayer1Ships),
  player2: placeShips(player2Terrain, initialPlayer2Ships)
};

const reducedPlayerPositions = {
  player1: reducePositions(initialPlayer1Ships),
  player2: reducePositions(initialPlayer2Ships),
};

const initPlayerShips = { 
  player1: initialPlayer1Ships,
  player2: initialPlayer2Ships 
};

const initPlayerAttacks = {
  player1: [],
  player2: []
};

const App = () => {
  // const [playerBoard, setBoard] = useState(playerOccupation); TODO: Reset Board for new games
  const [playerShips, setPlayerShips] = useState(initPlayerShips)
  const [playerTurn, setPlayerTurn] = useState(1);
  const [player2Moves, setPlayer2Moves] = useState(initialPlayer2Moves);
  const [playerAttacks, setPlayerAttacks] = useState(initPlayerAttacks);
  
  useEffect(() => {
    if (playerTurn === 2) {
      let playerTwoAttack = player2Moves.pop();
      handlePlayerAttack(convertToNumeric(playerTwoAttack));
      setPlayer2Moves([...player2Moves]);
    }
  }, [playerTurn]);

  const handlePlayerAttack = coordinateId => {
    const otherPlayer = `player${playerTurn === 1 ? 2 : 1}`;
    const coordinates = coordinateId.split('-');
    const targetedSquare = playerOccupation[otherPlayer][coordinates[0]].row[coordinates[1]];
    
    if (targetedSquare.status) {
      return;
    }
    // check if hit
    const alphaValue = convertToAlphaNumeric(coordinateId);
    const confirmHit = reducedPlayerPositions[otherPlayer].includes(alphaValue);

    const currentPlayer = `player${playerTurn}`;

    if (confirmHit) {
      targetedSquare.status = 'hit';
      const otherPlayerShips = playerShips[otherPlayer];
      
      setPlayerShips({
        [otherPlayer]: inflictShipDamage(otherPlayerShips, alphaValue),
        [currentPlayer]: playerShips[currentPlayer]
      });     
    } else {
      targetedSquare.status = 'miss'
    }
    
    setPlayerAttacks({
      [currentPlayer]: [...playerAttacks[currentPlayer], alphaValue],
      [otherPlayer]: [...playerAttacks[otherPlayer]]
    })
    setPlayerTurn(playerTurn === 1 ? 2 : 1);
  }

  return (
    <StyledPlayingField>
      <StyledPageTitle>
        <h1>BATTLESHIP!</h1>
      </StyledPageTitle>
      <StyledPlayersContainer>
        <PlayerDetails 
          name="Player 1" 
          playerTurn={playerTurn}
          ships={playerShips.player1} 
          playerId={1} 
        />
        <PlayerDetails 
          name="Player 2" 
          playerTurn={playerTurn}
          ships={playerShips.player2} 
          playerId={2} 
        />
      </StyledPlayersContainer>
      <StyledDialogueBox>
          <h4>RADAR OF PLAYER TWO!!</h4>
      </StyledDialogueBox>
        <StyledDivider />
      <Board 
        handlePlayerAttack={handlePlayerAttack} 
        board={playerOccupation.player2}
        playerTurn={playerTurn}
      />
      <StyledDialogueBox>
          <h4>YOUR RADAR!!</h4>
      </StyledDialogueBox>
        <StyledDivider />
      <Board 
        handlePlayerAttack={handlePlayerAttack} 
        board={playerOccupation.player1}
        isPlayer1
        playerTurn={playerTurn}
      />
      <StyledDivider />
      <Footer />
    </StyledPlayingField> 
  );
}

export default App;