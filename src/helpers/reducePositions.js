const reducePositions = grid => {
  let reduced = [];
  
  for(let ship in grid) {
    grid[ship].reduce((acc, curr) => {
      acc.push(curr);
      return acc;
    }, reduced);
  }

  return reduced;
}
export default reducePositions;