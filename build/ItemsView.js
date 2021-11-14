"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsView = void 0;
class ItemsView {
    isMatch(id) {
        return id === "ITEMS";
    }
    getView(cart) {
        let viewString = "";
        for (let i = 0; i < cart.products.length; i++) {
            viewString += "       Name: " + cart.products[i].name + "\n";
            viewString += "      Price: " + cart.products[i].price + "\n";
            viewString += "Description: " + cart.products[i].description + "\n";
            viewString += "   Quantity: " + cart.quantities[i] + "\n";
        }
        return viewString;
    }
}
exports.ItemsView = ItemsView;
