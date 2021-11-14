"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const ItemsView_1 = require("./ItemsView");
const TotalPriceView_1 = require("./TotalPriceView");
const ItemRemoveView_1 = require("./ItemRemoveView");
class CartController {
    constructor(model) {
        this._model = model;
        this._views = [];
        this._views.push(new ItemsView_1.ItemsView());
        this._views.push(new TotalPriceView_1.TotalPriceView());
        this._views.push(new ItemRemoveView_1.ItemRemoveView());
    }
    addItemToCart(item, quantity) {
        this._model.addItem(item, quantity);
    }
    removeItemFromCart(index) {
        this._model.removeItem(index);
    }
    displayView(id) {
        for (const view of this._views) {
            if (view.isMatch(id)) {
                console.log(view.getView(this._model));
            }
        }
    }
}
exports.CartController = CartController;
