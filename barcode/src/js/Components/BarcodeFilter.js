import { createInput } from "./CreateNode/createFormsElement";

export default class BarcodeFilter {
  constructor(root) {
    Object.assign(this, { root, value: "" });
  }

  generateFiter() {
    const filter = createInput(
      {
        type: "text",
        value: this.value,
      },
      onchange,
      "filter__input"
    );

    this.root.prepend(filter);
  }
}
