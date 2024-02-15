import BARCODE__DATA from "../data/barcode.json";

const ROOT = document.querySelector("#root");

import Barcode from "./Components/Barcode";
const barcode = new Barcode(ROOT, BARCODE__DATA);
barcode.generateBarCode();

import BarcodeFilter from "./Components/BarcodeFilter";

const barcodeFilter = new BarcodeFilter(ROOT);
barcodeFilter.generateFiter();
