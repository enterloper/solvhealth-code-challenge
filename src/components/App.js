import React from 'react';
import styled from 'styled-components';
import Board from './Board';

const App = () => {
  const StyledPlayingField = styled.div`
    height: 100vh;
    width: 100vw;
  `;
  
  // const player2Ships = {
  //   "carrier":  [ "A10", "B10", "C10","D10","E10"],
  //   "battleship":  [ "B3", "B4", "B5","B6"],
  //   "destroyer":  [ "F3", "G3", "H3"],
  //   "submarine":  [ "G1","H1","I1"],
  //   "patrol":  ["A9", "B9"],
  // };  
  // []
  // for (let key ship in player2Ships) {
    
  // }
  // const useEffect(() => {
  //   checkForHits()
  // }, [attacks]);
  
  // const [attacks, setAttacks] = useState([]);
  
  // const handlePlayerAttack = (event) => {
  //   console.log({attacks})
  //   setAttacks(event.target.id)
  // }
  return (
    <StyledPlayingField>
      <Board />
    </StyledPlayingField> 
  );
}

export default App;