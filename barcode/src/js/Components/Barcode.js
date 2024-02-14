import { createDomNode } from "./CreateNode/createDomNode";
import BarcodeForm from "./BarcodeForm";

export default class Barcode extends BarcodeForm {
  constructor(root, data) {
    super();
    Object.assign(this, {
      root,
      data,
      list: null,
      wrapper: null,
    });
  }

  generateBarCode() {
    this.createSection();
    this.wrapper.append(this.generateForm());

    this.createList();
    this.data.forEach((data) => this.createItem(data));
    this.wrapper.append(this.list);
  }

  createSection() {
    this.section = createDomNode("section", "section", "barcode");
    this.wrapper = createDomNode("div", "wrapper");
    this.section.append(this.wrapper);
    this.root.append(this.section);
  }

  createList() {
    const list = createDomNode("ul", "barcode__list");
    Object.assign(this, { list });
  }
  createItem({ imgSrc, name, barcode }) {
    const item = createDomNode("li", "barcode__item");

    item.innerHTML = `
    <div class="barcode__description">
        <span>${name}</span>
        <span>${barcode}</span>
    </div>
    <div class="img__container">
        <img src=${imgSrc} alt="barcode__img">
    </div>
    `;
    this.list.append(item);
  }
}
