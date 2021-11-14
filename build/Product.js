"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price, description) {
        this._name = name;
        this._price = price;
        this._description = description;
    }
    get name() { return this._name; }
    get price() { return this._price; }
    get description() { return this._description; }
}
exports.Product = Product;
