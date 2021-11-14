"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PentagonBuilder = void 0;
const Product_1 = require("./Product");
const ProductBuilder_1 = require("./ProductBuilder");
class PentagonBuilder extends ProductBuilder_1.ProductBuilder {
    constructor() {
        super();
        this._product = new Product_1.Product("Pentagon", 5.5, "It's got five sides!");
    }
}
exports.PentagonBuilder = PentagonBuilder;
