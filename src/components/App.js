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
  margin: 10px;
`;

const StyledPageTitle = styled.div`
  > h1 {
    text-align: center;
    margin: 20px auto 0;
  }
`;

const StyledDialogueBox = styled.div`
  width:100%;
  text-align: center;

  > h4 {
    margin: 24px auto;
    font-size: 20px;
    width: 85%;
  }
`;

const StyledDivider = styled.div`
  height: 1px;
  width: 85%;
  border-bottom: 1px solid black;
`;

const App = () => {
  
  
  // initialize board
  const blank = initializeBoard();
  console.log({blank});

  const [board, setBoard] = useState(blank);
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
    console.log(setBoard);
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
      <StyledPageTitle>
        <h1>BATTLESHIP</h1>
      </StyledPageTitle>
      <StyledPlayersContainer>
        <PlayerDetails 
          name="Player 1" 
          playerTurn={2}
          ships={player1DummyShips} 
          playerId={1} 
        />
        <PlayerDetails 
          name="Player 2" 
          playerTurn={2}
          ships={player2DummyShips} 
          playerId={2} 
        />
      </StyledPlayersContainer>
      <StyledDivider />
      <StyledDialogueBox>
          <h4>PLAYER ONE LOSES!!</h4>
        </StyledDialogueBox>
      <Board 
        handlePlayerAttack={handlePlayerAttack} 
        board={board}
      />
    </StyledPlayingField> 
  );
}

export default App;