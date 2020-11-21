https://gist.github.com/dbraga/8209ae72ac74a330fe0c9e7a94a5ca7e

// GLOBALS
const { useState, useEffect } = React;
window.styled = window.styled.default;
// Exercise 
// https://gist.github.com/dbraga/8209ae72ac74a330fe0c9e7a94a5ca7e


/*

Carrier, size 5
Battleship, size 4
Destroyer, size 3
Submarine, size 3
Patrol Boat, size 2

*/

// const player1Ships = {
//   "carrier":  [ "A9", "B9", "C9","D9","E9"],
//   "battleship":  [ "A3", "A4", "A5","A6"],
//   "destroyer":  [ "F2", "G2", "H2"],
//   "submarine":  [ "G1","H1","I1"],
//   "patrol":  ["A10", "B10"],
// };



// const player2Moves = ["H10", "C7", "D10", "H2", "I4", "E8", "G4", "J3", "D6", "B9", "G9", "J10", "F8", "B8", "G6", "A4", "D9", "I9", "I8", "E1", "D7", "B5", "H6", "H1", "F2", "E2", "F1", "C10", "J1", "B6", "H8", "F3", "H3", "B1", "J6", "D4", "A5", "H5", "E4", "A7", "D5", "C2", "C5", "J5", "J9", "J8", "G3", "F4", "C1", "B10", "D8", "H9", "C9", "C6", "G10", "A1", "A2", "F5", "H4", "I10", "C3", "J7", "I1", "H7", "I3", "I2", "J2", "C8", "F7", "A10", "E10", "E6", "A8", "E3", "B7", "D1", "F9", "F10", "D3", "A6", "B2", "I6", "G7", "G2", "G5", "E9", "E5", "B4", "D2", "J4", "C4", "I7", "G8", "G1", "A3", "F6", "I5", "A9", "B3", "E7"];

// HELPER
function convertToAlphaNumeric (string) {
    // "10-10"
    //J-10
    const stringArray = string.split('-');
    stringArray[0] = String.fromCharCode(parseInt(stringArray[0]) + 64);
    return stringArray.join('-');
}

function convertToNumeric (string) {
  const alpha = string.charCodeAt(0);
  return `${alpha - 64}-${string.substring(1)}`;
}

const Square = ({handleClick, id}) => {
  const StyledSquare = styled.div`
    width: 98px;
    height: 98px;
    border: 1px solid black;
    
  `;
  
  return (
    <StyledSquare id={id} onClick={handleClick} shipPresence>
       test
    </StyledSquare>
  );
};

const BoardRow = ({id}) => {
  const board = new Array(10).fill();
  
  const StyledRow = styled.div`
    display: flex;
    width: 100%;
    background: blue;
  `;
  
  return (
    <StyledRow>
      {board.map(square => <Square />)}
    </StyledRow>
  );
}

const Board = () => {
  const columns = new Array(10).fill(undefined).map((el, index) => 0);

  const StyledBoard = styled.div`
    border: 1px solid #000;
    height: 1000px;
    width: 1000px;
    background-color: red;
  `;
  
  return (
    <StyledBoard>
      {columns.map(column => <BoardRow id={column}></BoardRow>)}
    </StyledBoard>
  );
}

const App = () => {
  
  const StyledPlayingField = styled.div`
    height: 100vh;
    width: 100vw;
  `;
  
  const player2Ships = {
    "carrier":  [ "A10", "B10", "C10","D10","E10"],
    "battleship":  [ "B3", "B4", "B5","B6"],
    "destroyer":  [ "F3", "G3", "H3"],
    "submarine":  [ "G1","H1","I1"],
    "patrol":  ["A9", "B9"],
  };  
  []
  for (let key ship in player2Ships) {
    
  }
  const useEffect(() => {
    checkForHits()
  }, [attacks]);
  
  const [attacks, setAttacks] = useState([]);
  
  handlePlayerAttack = (event) => {
    
    setAttacks(event.target.id)
  }
  return (
    <StyledPlayingField>
      <Board />
    </StyledPlayingField>
    
  )  
}

ReactDOM.render( <App />, document.getElementById("app"));