import React, { useState } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import PlayerDetails from './PlayerDetails';
import Board from './Board';
import Footer from './Footer';
import buildBoard from '../helpers/buildBoard';
import placeShips from '../helpers/placeShips';
import {     
  initialPlayer1Ships,
  initialPlayer2Ships,
  initialPlayer2Moves 
} from '../../public/mvp_data';
import '../../public/styles/stylesheet.css';

/**
 * COLORS USED 
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
    margin: 40px auto 0;
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

const initPlayerShips = { initialPlayer1Ships, initialPlayer2Ships };

const App = () => {
  const [playerShips, setShips] = useState(initPlayerShips)
  const [playerBoard, setBoard] = useState(playerOccupation);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [player2Moves, setPlayer2Moves] = useState(initialPlayer2Moves);
  // console.log(player1Board);
  // const useEffect(() => {
  //   checkForHits()
  // }, [attacks]);
  
  // const [attacks, setAttacks] = useState([]);
  
  const handlePlayerAttack = event => {
    console.log(setBoard);
    console.log(setShips)
    console.log(setPlayerTurn)
    console.log(setPlayer2Moves, player2Moves)
    console.log('target:', event.target.id);
    // setAttacks(event.target.id)
    setPlayerTurn(playerTurn === 1 ? 2 : 1);
  }

  console.log({ initialPlayer1Ships, initialPlayer2Ships, initialPlayer2Moves })

  return (
    <StyledPlayingField>
      <StyledPageTitle>
        <h1>BATTLESHIP!</h1>
      </StyledPageTitle>
      <StyledPlayersContainer>
        <PlayerDetails 
          name="Player 1" 
          playerTurn={playerTurn}
          ships={playerShips.player1Ships} 
          playerId={1} 
        />
        <PlayerDetails 
          name="Player 2" 
          playerTurn={playerTurn}
          ships={playerShips.player1Ships} 
          playerId={2} 
        />
      </StyledPlayersContainer>
      <StyledDialogueBox>
          <h4>RADAR OF PLAYER TWO!!</h4>
      </StyledDialogueBox>
        <StyledDivider />
      <Board 
        handlePlayerAttack={handlePlayerAttack} 
        board={playerBoard.player2}
      />
      <StyledDialogueBox>
          <h4>YOUR RADAR!!</h4>
      </StyledDialogueBox>
        <StyledDivider />
      <Board 
        handlePlayerAttack={handlePlayerAttack} 
        board={playerBoard.player1}
        isPlayer1
      />
      <StyledDivider />
      <Footer />
    </StyledPlayingField> 
  );
}

export default App;