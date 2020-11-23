const buildBoard = () => {
  const array = [0,1,2,3,4,5,6,7,8,9]
  const boardLayout = array
    .map(column => ({
      column_id: column,
      row: array.map((square) => ({
        square_id: `${column}-${square}`,
        status: undefined,
        occupied: false
      }))
    }));

  return boardLayout;
}

export default buildBoard;