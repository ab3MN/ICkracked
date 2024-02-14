export const createDomNode = (el = "div", ...classes) => {
  const domElement = document.createElement(el);
  domElement.classList.add(...classes);
  return domElement;
};
