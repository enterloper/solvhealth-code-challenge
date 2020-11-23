import React, { useState } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import PlayerDetails from './PlayerDetails';
import Board from './Board';
import buildBoard from '../helpers/buildBoard';
import setShips from '../helpers/setShips';
import {     
  player1Ships,
  player2Ships,
  player2Moves 
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
`;

// initialize board and ship state
const player1Terrain = buildBoard();
const player2Terrain = buildBoard();

const playerOccupation = {
  player1: setShips(player1Terrain, player1Ships),
  player2: setShips(player2Terrain, player2Ships)
};

const initPlayerShips = { player1Ships, player2Ships };

const App = () => {
  const [playerShips, setShips] = useState(initPlayerShips)
  const [playerBoard, setBoard] = useState(playerOccupation);
  // console.log(player1Board);
  // const useEffect(() => {
  //   checkForHits()
  // }, [attacks]);
  
  // const [attacks, setAttacks] = useState([]);
  
  const handlePlayerAttack = (event) => {
    console.log('target:', event.target);
    console.log(setBoard);
    console.log(setShips)
    // setAttacks(event.target.id)
  }

  console.log({ player1Ships, player2Ships, player2Moves })

  return (
    <StyledPlayingField>
      <StyledPageTitle>
        <h1>BATTLESHIP!</h1>
      </StyledPageTitle>
      <StyledPlayersContainer>
        <PlayerDetails 
          name="Player 1" 
          playerTurn={1}
          ships={playerShips.player1Ships} 
          playerId={1} 
        />
        <PlayerDetails 
          name="Player 2" 
          playerTurn={1}
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
    </StyledPlayingField> 
  );
}

export default App;