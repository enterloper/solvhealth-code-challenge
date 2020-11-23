const inflictShipDamage = (ships, target) => {
  for(let ship in ships) {
    let position = ships[ship].indexOf(target)
    if (position >= 0) {
      ships[ship].splice(position, 1);
    }
  }

  return ships;
};

export default inflictShipDamage;