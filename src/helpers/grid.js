export const gridCells = n => {
  return n * 16;
}

export const isSpaceFree = (walls, x, y) => {
  // Convert to string format for easy lookup
  console.log("walls.add(`",x,",",y,"`)")
  const str = `${x},${y}`;
  // Check if walls has an entry at this spot
  const isWallPresent = walls.has(str);
  return !isWallPresent;
}