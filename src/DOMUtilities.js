export function createDOMElement(options = { type: "div" }) {
  const elementContainer = document.createElement(options.type);
  if ("id" in options) {
    elementContainer.id = options.id;
  }
  if ("classList" in options) {
    for (const className of options.classList) {
      elementContainer.classList.add(className);
    }
  }
  if ("attribute" in options) {
    for (const attributePair of options.attribute) {
      elementContainer.setAttribute(attributePair[0], attributePair[1]);
    }
  }
  if ("text" in options) {
    elementContainer.textContent = options.text;
  }
  if ("SVGIcon" in options) {
    elementContainer.appendChild(createSVGIcon(options.SVGIcon));
  }
  if ("eventListener" in options) {
    elementContainer.addEventListener(
      options.eventListener[0],
      options.eventListener[1],
    );
  }
  return elementContainer;
}

export function createSVGIcon(src) {
  const SVGIconContainer = document.createElement("div");
  SVGIconContainer.classList.add("svg-container");
  fetch(src)
    .then((response) => response.text())
    .then((svg) => {
      SVGIconContainer.innerHTML = svg;
    })
    .catch((error) => console.error("Error loading the SVG: ", error));
  return SVGIconContainer;
}

export function createContainerOfElements(
  elements,
  classList = ["parent-container"],
) {
  const parentContainer = createDOMElement({
    type: "div",
    classList: classList,
  });
  for (const element of elements) {
    parentContainer.appendChild(element);
  }
  return parentContainer;
}
