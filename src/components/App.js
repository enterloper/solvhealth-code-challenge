import React, { useState } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import PlayerDetails from './PlayerDetails';
import Board from './Board';
import initializeBoard from '../helpers/initializeBoard';

import {     
  player1Ships,
  player2Ships,
  player2Moves 
} from '../../public/mvp_data';

const StyledPlayingField = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledPlayersContainer = styled.header`
  display: flex;
  width: 85%;
  justify-content: center;
`;

const StyledDialogueBox = styled.div`
  width:100%;
  background: orange;
`;

const App = () => {
  
  
  // initialize board
  const initialBoard = initializeBoard();


  const [board, setBoard] = useState(initialBoard);
  // import styled from 'styled-components';
/*

Carrier, size 5
Battleship, size 4
Destroyer, size 3
Submarine, size 3
Patrol Boat, size 2

*/


  // const useEffect(() => {
  //   checkForHits()
  // }, [attacks]);
  
  // const [attacks, setAttacks] = useState([]);
  
  const handlePlayerAttack = (event) => {
    console.log('target:', event.target);
    console.log(JSON.stringify(setBoard));
    // setAttacks(event.target.id)
  }

  console.log({ player1Ships, player2Ships, player2Moves })
  const player1DummyShips = {
    carrier:  [ 'A9', 'B9', 'C9','D9','E9'],
    battleship:  [ 'A3', 'A4', 'A5','A6'],
    destroyer:  [ 'F2', 'G2', 'H2'],
    submarine:  [ 'G1','H1','I1'],
    patrol:  ['A10', 'B10'],
  }

  const player2DummyShips = {
    carrier:  [ 'A10', 'B10', 'C10','D10','E10'],
    battleship:  [ 'B3', 'B4', 'B5','B6'],
    destroyer:  [ 'F3', 'G3', 'H3'],
    submarine:  [ 'G1','H1','I1'],
    patrol:  ['A9', 'B9'],
  };  

  return (
    <StyledPlayingField>
      <StyledPlayersContainer>
        <PlayerDetails 
          name="Player 1" 
          playerTurn={1}
          shipsAvailable={player1DummyShips} 
          playerId={1} 
        />
        <PlayerDetails 
          name="Player 2" 
          playerTurn={1}
          shipsAvailable={player2DummyShips} 
          playerId={2} 
        />
      </StyledPlayersContainer>
      <StyledDialogueBox>PLAYER ONE SUCKS!</StyledDialogueBox>
      <Board 
        handlePlayerAttack={handlePlayerAttack} 
        board={board}
      />
    </StyledPlayingField> 
  );
}

export default App;