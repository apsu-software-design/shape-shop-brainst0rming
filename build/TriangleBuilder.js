"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriangleBuilder = void 0;
const Product_1 = require("./Product");
const ProductBuilder_1 = require("./ProductBuilder");
class TriangleBuilder extends ProductBuilder_1.ProductBuilder {
    constructor() {
        super();
        this._product = new Product_1.Product("Triangle", 3.5, "It's got three sides!");
    }
}
exports.TriangleBuilder = TriangleBuilder;
