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
        labelText: "Barcode",
        name: "barcode",
        placeholder: "Enter barcode",
        onchange: this.handleChange,
        type: "file",
      },
    ].forEach((el) => {
      const { id, labelText, name, placeholder, type, onchange } = el;
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
      label.append(input);
      this.form.append(label);
    });
  }
  createButton() {
    const button = createDomNode(
      "button",
      "button",
      "submit__button",
      "barcode__submit"
    );
  }

  //Listeners
  handleChange = (e) => {
    const { value, name } = e.target;
    this.value = { ...this.value, [name]: value.split(/(\\|\/)/g).pop() };
    console.log(this.value);
  };
}
