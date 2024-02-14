import Barcode from "./Components/Barcode";
import BARCODE__DATA from "../data/barcode.json";

const barcode = new Barcode(document.querySelector("#root"), BARCODE__DATA);
barcode.generateBarCode();
