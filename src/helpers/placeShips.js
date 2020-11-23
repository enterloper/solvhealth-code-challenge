import convertToNumeric from './convertToNumeric';

const placeShips = (board, ships) => {
  for(let ship in ships) {
    ships[ship].forEach(shipSection => {
      const coordinates = convertToNumeric(shipSection).split('-');
      board[coordinates[0]].row[coordinates[1]].occupied = true;
    });
  }

  return board;
};

export default placeShips;