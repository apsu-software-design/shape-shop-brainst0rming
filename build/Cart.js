"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    constructor() {
        this._products = [];
        this._quantities = [];
    }
    addItem(item, quantity) {
        this._products.push(item);
        this._quantities.push(quantity);
    }
    removeItem(index) {
        let numItems = this._products.length;
        if (numItems == 0) {
            console.log("removeItem: There are no items in cart.");
        }
        else if (index < 0 || index >= numItems) {
            console.log("removeItem: Index out of bounds.");
        }
        else {
            this._products.splice(index, 1);
            this._quantities.splice(index, 1);
        }
    }
    get products() {
        return this._products;
    }
    get quantities() {
        return this._quantities;
    }
}
exports.Cart = Cart;
