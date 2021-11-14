"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareBuilder = void 0;
const Product_1 = require("./Product");
const ProductBuilder_1 = require("./ProductBuilder");
class SquareBuilder extends ProductBuilder_1.ProductBuilder {
    constructor() {
        super();
        this._product = new Product_1.Product("Square", 4.5, "It's got four sides!");
    }
}
exports.SquareBuilder = SquareBuilder;
