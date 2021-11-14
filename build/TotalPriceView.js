"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalPriceView = void 0;
class TotalPriceView {
    isMatch(id) {
        return id === "TOTAL_PRICE";
    }
    getView(cart) {
        let total = 0;
        for (let i = 0; i < cart.products.length; i++) {
            total += cart.products[i].price * cart.quantities[i];
        }
        return "Shopping Cart Total: " + total;
    }
}
exports.TotalPriceView = TotalPriceView;
