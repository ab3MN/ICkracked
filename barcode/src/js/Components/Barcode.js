import { createDomNode } from "./CreateNode/createDomNode";
import BarcodeForm from "./BarcodeForm";
import Modal from "./Modal";

const modal = new Modal();

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
    this.generateForm();
    this.form.onsubmit = this.handleSumbit;
    this.wrapper.append(this.form);

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
  createItem({ file, name, barcode }) {
    const item = createDomNode("li", "barcode__item");

    item.innerHTML = `
    <div class="barcode__description">
        <span>${name}</span>
        <span>${barcode}</span>
    </div>
    <div class="img__container">
        <img src=${file} alt="barcode__img">
    </div>
    `;
    item.onclick = this.handleOpenImg;
    this.list.append(item);
  }

  //LISTENERS

  handleSumbit = (e) => (e.preventDefault(), this.createItem(this.value));

  handleOpenImg = (e) => {
    const { src } = e.target;
    if (!src) return;
    const img = `
    <div class="modal__img">
      <img src=${src} alt="barcode__img">
    </div>`;
    modal.genereateModal(img);
  };
}
