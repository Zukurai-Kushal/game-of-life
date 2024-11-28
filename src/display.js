import {
  createDOMElement,
  createSVGIcon,
  createContainerOfElements,
} from "./DOMUtilities";
import {
  currentState,
  stringToCoordinates,
  toggleCell,
  updateState,
  populationCount,
  generationCount,
  init_gameState,
} from "./game";

import arrowSVG from "./assets/icons/triangle.svg";
import playSVG from "./assets/icons/play.svg";
import pauseSVG from "./assets/icons/pause.svg";
import nextSVG from "./assets/icons/skip-next.svg";
import resetSVG from "./assets/icons/skip-backward.svg";
import clearSVG from "./assets/icons/close-thick.svg";
import speedSVG from "./assets/icons/speedometer.svg";
import resizeSVG from "./assets/icons/resize.svg";

let gameGridSize = 50;
let offSet = [-20, -10];
let gameSpeed = 60; //(fps)
const gameDisplayContainer = document.getElementById("game-display-container");
let gameIntervalID;

export function displayGame(gameState) {
  if (document.getElementById("game-grid") === null) {
    init_game_display();
  }

  const gameGrid = document.getElementById("game-grid");

  for (const cell of gameGrid.querySelectorAll(".cell.alive")) {
    cell.classList.remove("alive");
  }

  gameState.forEach((cell) => {
    let [row, col] = repositionCoordinates(
      "display",
      stringToCoordinates(cell),
    );
    if (row >= 0 && row < gameGridSize && col >= 0 && col < gameGridSize) {
      gameGrid.rows[row].cells[col].classList.add("alive");
    }
  });

  updateGameStatus();
}

function updateGameStatus() {
  const generationCountValueContainer =
    document.getElementById("generation-count");
  generationCountValueContainer.textContent = generationCount;
  const populationCountValueContainer =
    document.getElementById("population-count");
  populationCountValueContainer.textContent = populationCount;
}

function repositionCoordinates(destination, coordinates) {
  let [row, col] = coordinates;
  let multiplier = 0;
  if (destination == "display") {
    multiplier = +1;
  } else if (destination == "gameState") {
    multiplier = -1;
  } else {
    console.error("Offset destination not valid!");
    return;
  }
  row += Math.floor(gameGridSize / 2) * multiplier;
  col += Math.floor(gameGridSize / 2) * multiplier;
  row += offSet[0] * multiplier;
  col += offSet[1] * multiplier;
  return [row, col];
}

function setGridSize(size = gameGridSize) {
  gameGridSize = size;
  try {
    const gameGrid = document.getElementById("game-grid");
    gameGrid.innerHTML = "";
    for (let row = 0; row < size; row++) {
      let rowElement = gameGrid.insertRow();
      for (let col = 0; col < size; col++) {
        let cellElement = rowElement.insertCell();
        cellElement.setAttribute("row", row);
        cellElement.setAttribute("col", col);
        cellElement.classList.add("cell");
      }
    }
    const gameGridValueContainer = document.getElementById("grid-size");
    if (gameGridValueContainer) {
      gameGridValueContainer.innerText = size;
    }
  } catch (err) {
    console.log(err);
  }
}

function init_game_display() {
  gameDisplayContainer.innerHTML = "";
  const gameGrid = createDOMElement({
    type: "table",
    id: "game-grid",
  });
  gameGrid.onclick = (e) => {
    if (e.target.classList.contains("cell")) {
      e.target.classList.toggle("alive");
      let [row, col] = [
        Number(e.target.getAttribute("row")),
        Number(e.target.getAttribute("col")),
      ];
      [row, col] = repositionCoordinates("gameState", [row, col]);
      toggleCell([row, col]);
      updateGameStatus();
    }
  };
  gameDisplayContainer.appendChild(gameGrid);
  setGridSize();
  gameDisplayContainer.appendChild(createOffsetButton("up"));
  gameDisplayContainer.appendChild(createOffsetButton("down"));
  gameDisplayContainer.appendChild(createOffsetButton("left"));
  gameDisplayContainer.appendChild(createOffsetButton("right"));
  const gameStatusContainer = createDOMElement({
    type: "div",
    id: "game-status-container",
  });
  gameDisplayContainer.appendChild(gameStatusContainer);
  const generationCountContainer = createDOMElement({
    type: "div",
    classList: ["game-status"],
  });
  gameStatusContainer.appendChild(generationCountContainer);
  generationCountContainer.appendChild(
    createDOMElement({ type: "label", text: "Generation" }),
  );
  generationCountContainer.appendChild(
    createDOMElement({
      type: "div",
      text: generationCount,
      id: "generation-count",
    }),
  );
  const populationCountContainer = createDOMElement({
    type: "div",
    classList: ["game-status"],
  });
  gameStatusContainer.appendChild(populationCountContainer);
  populationCountContainer.appendChild(
    createDOMElement({ type: "label", text: "Population" }),
  );
  populationCountContainer.appendChild(
    createDOMElement({
      type: "div",
      text: populationCount,
      id: "population-count",
    }),
  );
}

function createOffsetButton(direction) {
  const offSetButton = createDOMElement({
    type: "button",
    classList: ["offset-button"],
    attribute: [["direction", direction]],
    SVGIcon: arrowSVG,
  });
  offSetButton.onclick = () => {
    moveDisplay(direction);
  };
  return offSetButton;
}

function moveDisplay(direction) {
  switch (direction) {
    case "up":
      offSet[0] += Math.ceil(gameGridSize / 10);
      break;
    case "down":
      offSet[0] -= Math.ceil(gameGridSize / 10);
      break;
    case "left":
      offSet[1] += Math.ceil(gameGridSize / 10);
      break;
    case "right":
      offSet[1] -= Math.ceil(gameGridSize / 10);
      break;
    default:
      console.error("Invalid direction!");
      return;
  }
  displayGame(currentState);
}

function init_game_description() {
  const gameDescriptionContainer = document.getElementById("game-description");
  gameDescriptionContainer.innerHTML = "";
  gameDescriptionContainer.appendChild(
    createDOMElement({
      type: "div",
      classList: ["title"],
      text: "Conway's Game of Life",
    }),
  );
  gameDescriptionContainer.appendChild(
    createDOMElement({
      type: "div",
      classList: ["description"],
      text: "The Game of Life, also known as Conway's Game of Life or simply Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.",
    }),
  );
  const rulesContainer = createDOMElement({
    type: "div",
    classList: ["rules-container"],
  });
  gameDescriptionContainer.appendChild(rulesContainer);
  rulesContainer.appendChild(
    createDOMElement({ type: "div", classList: ["title"], text: "Rules" }),
  );
  const rulesList = createDOMElement({ type: "ol" });
  rulesContainer.appendChild(rulesList);
  rulesList.appendChild(
    createDOMElement({
      type: "li",
      text: "Any live cell with fewer than two live neighbours dies, as if by underpopulation.",
    }),
  );
  rulesList.appendChild(
    createDOMElement({
      type: "li",
      text: "Any live cell with two or three live neighbours lives on to the next generation.",
    }),
  );
  rulesList.appendChild(
    createDOMElement({
      type: "li",
      text: "Any live cell with more than three live neighbours dies, as if by overpopulation.",
    }),
  );
  rulesList.appendChild(
    createDOMElement({
      type: "li",
      text: "Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.",
    }),
  );
}

function init_game_control_panel() {
  const gameControlPanel = document.getElementById("game-control-panel");
  gameControlPanel.innerHTML = "";
  const playStopButton = createDOMElement({
    type: "button",
    id: "play-stop-button",
    attribute: [["display", "play"]],
  });
  const playIcon = createSVGIcon(playSVG);
  playIcon.classList.add("play-icon");
  playStopButton.appendChild(playIcon);
  const stopIcon = createSVGIcon(pauseSVG);
  stopIcon.classList.add("stop-icon");
  playStopButton.appendChild(stopIcon);
  playStopButton.onclick = () => {
    if (playStopButton.getAttribute("display") === "play") {
      playStopButton.setAttribute("display", "stop");
      runGame();
    } else {
      playStopButton.setAttribute("display", "play");
      pauseGame();
    }
  };
  gameControlPanel.appendChild(playStopButton);

  gameControlPanel.appendChild(
    createDOMElement({
      type: "button",
      SVGIcon: nextSVG,
      eventListener: ["click", displayNextState],
    }),
  );

  gameControlPanel.appendChild(
    createDOMElement({
      type: "button",
      SVGIcon: resetSVG,
      eventListener: [
        "click",
        () => {
          init_gameState("reset");
          displayGame(currentState);
        },
      ],
    }),
  );

  gameControlPanel.appendChild(
    createDOMElement({
      type: "button",
      SVGIcon: clearSVG,
      eventListener: [
        "click",
        () => {
          init_gameState("clear");
          displayGame(currentState);
        },
      ],
    }),
  );

  gameControlPanel.appendChild(
    createContainerOfElements(
      [
        createSVGIcon(speedSVG),
        createDOMElement({
          type: "input",
          attribute: [
            ["type", "range"],
            ["min", 1],
            ["max", 200],
            ["value", 60],
          ],
          classList: ["slider"],
          eventListener: [
            "input",
            (event) => {
              updateSpeed(event.target.value);
            },
          ],
        }),
        createContainerOfElements(
          [
            createDOMElement({
              type: "div",
              id: "game-speed",
              text: gameSpeed,
            }),
            createDOMElement({ type: "div", text: "FPS" }),
          ],
          ["value-container"],
        ),
      ],
      ["slider-container"],
    ),
  );

  gameControlPanel.appendChild(
    createContainerOfElements(
      [
        createSVGIcon(resizeSVG),
        createDOMElement({
          type: "input",
          attribute: [
            ["type", "range"],
            ["min", 10],
            ["max", 200],
            ["value", 50],
          ],
          classList: ["slider"],
          eventListener: [
            "input",
            (event) => {
              setGridSize(event.target.value);
              displayGame(currentState);
            },
          ],
        }),
        createContainerOfElements(
          [
            createDOMElement({
              type: "div",
              id: "grid-size",
              text: gameGridSize,
            }),
            createDOMElement({ type: "div", text: "Sq." }),
          ],
          ["value-container"],
        ),
      ],
      ["slider-container"],
    ),
  );
}

function updateSpeed(newSpeedValue) {
  gameSpeed = newSpeedValue;
  if (gameIntervalID) {
    runGame();
  }
  const speedValueContainer = document.getElementById("game-speed");
  if (speedValueContainer) {
    speedValueContainer.innerText = newSpeedValue;
  }
}

function displayNextState() {
  updateState();
  displayGame(currentState);
}

function init_keyboard_support() {
  document.body.addEventListener("keydown", (event) => {
    const key = event.key;
    switch (event.key) {
      case "ArrowLeft":
        moveDisplay("left");
        event.preventDefault();
        break;
      case "ArrowRight":
        moveDisplay("right");
        event.preventDefault();
        break;
      case "ArrowUp":
        moveDisplay("up");
        event.preventDefault();
        break;
      case "ArrowDown":
        moveDisplay("down");
        event.preventDefault();
        break;
      case "Enter":
        const playStopButton = document.getElementById("play-stop-button");
        if (playStopButton != null) {
          playStopButton.click();
        }
        break;
    }
  });
}

function runGame() {
  gameIntervalID = window.clearInterval(gameIntervalID);
  gameIntervalID = window.setInterval(() => {
    updateState();
    displayGame(currentState);
  }, 1000 / gameSpeed);
}

function pauseGame() {
  console.log(gameIntervalID);
  gameIntervalID = window.clearInterval(gameIntervalID);
  console.log(gameIntervalID);
}

export function init_display() {
  init_game_description();
  init_game_display();
  init_game_control_panel();
  init_keyboard_support();
  displayGame(currentState);
}
