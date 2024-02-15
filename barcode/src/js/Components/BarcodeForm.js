import { createDomNode } from "./CreateNode/createDomNode";
import {
  createInput,
  createLabel,
  createForm,
} from "./CreateNode/createFormsElement";

export default class BarcodeForm {
  constructor() {
    Object.assign(this, {
      form: null,
      value: {
        barcode: "",
        name: "",
        file: "",
      },
    });
  }

  generateForm() {
    this.createForm();
    this.createInput();
    this.createButton();
    return this.form;
  }

  createForm() {
    this.form = createForm(
      { method: "post", id: "barcode__form" },
      this.handleSubmit,
      "barcode__form"
    );
  }
  createInput() {
    [
      {
        id: "barcode__number",
        labelText: "Barcode",
        name: "barcode",
        placeholder: "Enter barcode",
        onchange: this.handleChange,
        type: "text",
      },
      {
        id: "barcode__name",
        labelText: "Name",
        name: "name",
        placeholder: "Enter Name",
        onchange: this.handleChange,
        type: "text",
      },
      {
        id: "barcode__file",
        labelText: "Upload",
        name: "file",
        placeholder: "Enter barcode",
        onchange: this.handleChange,
        type: "file",
      },
    ].forEach((el) => {
      const { id, labelText, name, placeholder, type, onchange } = el;
      const inputContainer = createDomNode("div", "input__container");
      const label = createLabel(id, labelText, "barcode__label");
      const input = createInput(
        {
          name,
          value: this.value[name],
          placeholder,
          type,
        },
        onchange,
        "barcode__input"
      );
      inputContainer.append(label);
      inputContainer.append(input);

      this.form.append(inputContainer);
    });
  }
  createButton() {
    const button = createDomNode(
      "button",
      "button",
      "submit__button",
      "barcode__submit"
    );
    button.type = "submit";
    button.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    UPLOAD
    `;
    this.form.append(button);
  }

  //Listeners
  handleChange = (e) => {
    let { value, name, type } = e.target;
    if (type === "file")
      value = "./src/assets/barcode/" + value.split(/(\\|\/)/g).pop();
    this.value = { ...this.value, [name]: value };
  };
}
