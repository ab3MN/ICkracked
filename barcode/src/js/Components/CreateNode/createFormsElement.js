import { createDomNode } from "./createDomNode";

export const createInput = (attributes = {}, onchange, ...classes) => {
  const input = createDomNode("input", ...classes);
  for (let attribute in attributes) {
    input[attribute] = attributes[attribute];
  }
  input.addEventListener("change", onchange);
  return input;
};

export const createLabel = (id, text, ...classes) => {
  const label = createDomNode("label", ...classes);
  label.for = id;
  label.innerText = text;
  return label;
};

export const createForm = (attributes = {}, onSubmit, ...classes) => {
  const form = createDomNode("form", ...classes);

  for (let attribute in attributes) {
    form[attribute] = attributes[attribute];
  }
  form.addEventListener("submit", onSubmit);
  return form;
};
