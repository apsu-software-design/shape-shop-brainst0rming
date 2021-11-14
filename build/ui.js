"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const readlineSync = require("readline-sync");
const Cart_1 = require("./Cart");
const CartController_1 = require("./CartController");
const TriangleBuilder_1 = require("./TriangleBuilder");
const SquareBuilder_1 = require("./SquareBuilder");
const PentagonBuilder_1 = require("./PentagonBuilder");
function start() {
    showMainMenu(new CartController_1.CartController(new Cart_1.Cart));
}
exports.start = start;
function showMainMenu(cc) {
    while (true) {
        console.log(`Welcome to the Shape Store! We offer the best shapes! Pick an option:
  1. Add an item to the cart.
  2. Remove an item to the cart.
  3. View the items in the cart.
  4. View the price of all items.
  5. Quit.`);
        let response = readlineSync.question('> ');
        if (response === '5' || response.slice(0, 2).toLowerCase() === ':q') {
            break;
        }
        switch (response) {
            case '1':
                addItemToCart(cc);
                break;
            case '2':
                removeItemFromCart(cc);
                break;
            case '3':
                viewItemsInCart(cc);
                break;
            case '4':
                viewCartTotal(cc);
                break;
            default: console.log('Invalid option!');
        }
        console.log('');
    }
}
function addItemToCart(cc) {
    let itemBuilder = letUserSelectItem();
    if (itemBuilder) {
        let itemQty = letUserSelectQuantity();
        cc.addItemToCart(itemBuilder.product, itemQty);
    }
}
function letUserSelectItem() {
    console.log(`Here you can select your shape. Pick an option:
  1. Buy a Triangle!
  2. Buy a Square!
  3. Buy a Pentagon!
  4. Go back. Don't buy anything.`);
    let response = readlineSync.question('> ');
    switch (response) {
        case '1':
            console.log('');
            return new TriangleBuilder_1.TriangleBuilder();
        case '2':
            console.log('');
            return new SquareBuilder_1.SquareBuilder();
        case '3':
            console.log('');
            return new PentagonBuilder_1.PentagonBuilder();
        default:
            console.log('Invalid option!\n');
            return undefined;
    }
}
function letUserSelectQuantity() {
    console.log(`How many of this shape would you like to purchase?
`);
    console.log('');
    let response = readlineSync.question('> ');
    return parseInt(response);
}
function removeItemFromCart(cc) {
    cc.displayView("REMOVE");
    let response = readlineSync.question('> ');
    let toRemove = parseInt(response);
    cc.removeItemFromCart(toRemove);
    console.log('');
}
function viewItemsInCart(cc) {
    cc.displayView("ITEMS");
}
function viewCartTotal(cc) {
    cc.displayView("TOTAL_PRICE");
}
