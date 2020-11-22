import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './Board';
import initializeBoard from '../helpers/initializeBoard';
import {     
  player1Ships,
  player2Ships,
  player2Moves 
} from '../../public/mvp_data';

const App = () => {
  const StyledPlayingField = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  
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
  return (
    <StyledPlayingField>
      <header></header>
      <Board 
        handlePlayerAttack={handlePlayerAttack} 
        board={board}
      />
    </StyledPlayingField> 
  );
}

export default App;