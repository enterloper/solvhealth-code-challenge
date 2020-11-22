const initializeBoard = () => {
  const array = [0,1,2,3,4,5,6,7,8,9]
  const boardLayout = array
    .map(column => ({
      column_id: column,
      row: array.map((square) => ({
        square_id: `${column}-${square}`,
        status: undefined
      }))
    }));

  return boardLayout;
}

export default initializeBoard;