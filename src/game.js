export let currentState = new Set();
export let generationCount = 0;
export let populationCount = 0;

export function init_gameState(type = "reset") {
  if (type === "reset") {
    currentState = new Set([
      "1,0",
      "2,1",
      "2,2",
      "1,2",
      "0,2",
      "3,11",
      "4,10",
      "4,9",
      "5,10",
      "5,11",
    ]);
  } else if (type === "clear") {
    currentState = new Set();
  } else {
    console.error("Invalid type!");
  }
  populationCount = currentState.size;
  generationCount = 0;
}

function coordinatesToString(arr) {
  return `${arr[0]},${arr[1]}`;
}

export function stringToCoordinates(str) {
  const coordinates = str.split(",");
  const row = Number(coordinates[0]);
  const col = Number(coordinates[1]);
  const arr = [row, col];
  return arr;
}

function printCurrentState(size = 20) {
  for (let row = 0; row < size; row++) {
    let myString = "";
    for (let col = 0; col < size; col++) {
      if (currentState.has(coordinatesToString([row, col]))) {
        myString = myString.concat("X");
      } else {
        myString = myString.concat("0");
      }
    }
    console.log(myString);
  }
}

export function updateState() {
  currentState = getNextState();
  generationCount++;
  populationCount = currentState.size;
}

export function toggleCell(coordinates) {
  const cell = coordinatesToString(coordinates);
  if (currentState.has(cell)) {
    currentState.delete(cell);
    populationCount--;
  } else {
    currentState.add(cell);
    populationCount++;
  }
}

function getNextState() {
  let nextState = new Set();
  let checkList = new Set();
  currentState.forEach((cell) => {
    const [row, col] = stringToCoordinates(cell);
    checkList.add(coordinatesToString([row - 1, col - 1]));
    checkList.add(coordinatesToString([row - 1, col]));
    checkList.add(coordinatesToString([row - 1, col + 1]));
    checkList.add(coordinatesToString([row, col - 1]));
    checkList.add(coordinatesToString([row, col]));
    checkList.add(coordinatesToString([row, col + 1]));
    checkList.add(coordinatesToString([row + 1, col - 1]));
    checkList.add(coordinatesToString([row + 1, col]));
    checkList.add(coordinatesToString([row + 1, col + 1]));
  });
  checkList.forEach((cell) => {
    if (isCellAliveForNextState(cell)) {
      nextState.add(cell);
    }
  });
  return nextState;
}

function isCellAliveForNextState(cell) {
  if (currentState.has(cell)) {
    let aliveNeighborCount = getAliveNeighborCount(cell);
    if (aliveNeighborCount < 2 || aliveNeighborCount > 3) {
      return false;
    } else {
      return true;
    }
  } else {
    let aliveNeighborCount = getAliveNeighborCount(cell);
    if (aliveNeighborCount === 3) {
      return true;
    }
  }
}

function getAliveNeighborCount(cell) {
  const [row, col] = stringToCoordinates(cell);
  let aliveNeighborCount = 0;
  if (currentState.has(coordinatesToString([row - 1, col - 1]))) {
    aliveNeighborCount++;
  }
  if (currentState.has(coordinatesToString([row - 1, col]))) {
    aliveNeighborCount++;
  }
  if (currentState.has(coordinatesToString([row - 1, col + 1]))) {
    aliveNeighborCount++;
  }

  if (currentState.has(coordinatesToString([row, col - 1]))) {
    aliveNeighborCount++;
  }
  if (currentState.has(coordinatesToString([row, col + 1]))) {
    aliveNeighborCount++;
  }

  if (currentState.has(coordinatesToString([row + 1, col - 1]))) {
    aliveNeighborCount++;
  }
  if (currentState.has(coordinatesToString([row + 1, col]))) {
    aliveNeighborCount++;
  }
  if (currentState.has(coordinatesToString([row + 1, col + 1]))) {
    aliveNeighborCount++;
  }

  return aliveNeighborCount;
}
