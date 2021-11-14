"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRemoveView = void 0;
class ItemRemoveView {
    isMatch(id) {
        return id === "REMOVE";
    }
    getView(cart) {
        let viewString = "";
        viewString += "Select an item to be removed from the cart.\n";
        for (let i = 0; i < cart.products.length; i++) {
            viewString += i + ": " + cart.products[i].name + "\n";
        }
        return viewString;
    }
}
exports.ItemRemoveView = ItemRemoveView;
