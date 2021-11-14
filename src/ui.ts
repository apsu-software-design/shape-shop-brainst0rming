// Bo Yang Li
// CSCI 4602
// Assignment 5

/**
 * The main responsibility for this module is to handle all user interaction.
 * @module
 */

import readlineSync = require('readline-sync'); //for easier repeated prompts
import {Product} from './Product';
import {Cart} from './Cart';
import {CartController} from './CartController';
import {ProductBuilder} from './ProductBuilder';
import {TriangleBuilder} from './TriangleBuilder';
import {SquareBuilder} from './SquareBuilder';
import {PentagonBuilder} from './PentagonBuilder';

/**
 * Function to run the UI
 */
export function start() {
  showMainMenu(new CartController(new Cart));
}

/**
 * The main menu. Will show until the user exits
 * @param cc The CartController which controls the Cart.
 */
function showMainMenu(cc: CartController): void {
  while(true){ //run until we exit
    console.log(`Welcome to the Shape Store! We offer the best shapes! Pick an option:
  1. Add an item to the cart.
  2. Remove an item to the cart.
  3. View the items in the cart.
  4. View the price of all items.
  5. Quit.`);

    let response: string = readlineSync.question('> ')
    if(response === '5' || response.slice(0,2).toLowerCase() === ':q') {
      break; //stop looping, thus leaving method
    }

    switch(response) { //handle each response
      case '1': addItemToCart(cc); break;
      case '2': removeItemFromCart(cc); break;
      case '3': viewItemsInCart(cc); break;
      case '4': viewCartTotal(cc); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
  }
}

/**
 * Prompts the user to add an item to the Cart.
 * @param cc The CartController which controls the Cart.
 */
function addItemToCart(cc: CartController): void {
  let itemBuilder: ProductBuilder|undefined = letUserSelectItem(); // Builder Assignment
  
  if (itemBuilder) {
    let itemQty: number = letUserSelectQuantity();
    cc.addItemToCart(itemBuilder.product, itemQty); // Get the built item and add to Cart

    /*switch(itemName) { // This solution would scale poorly. Use a Builder?
      case "TRIANGLE":
        cc.addItemToCart(new Product("Triangle", 3.5, "It's got three sides!"), itemQty);
        break;
      case "SQUARE":
        cc.addItemToCart(new Product("Square", 4.5, "It's got four sides!"), itemQty);
        break;
      case "PENTAGON":
        cc.addItemToCart(new Product("Pentagon", 5.5, "It's got five sides!"), itemQty);
        break;
    }*/
   
  }
}

/**
 * The item selection menu for the user to pick from.
 * @return The user's item's builder.
 */
function letUserSelectItem(): ProductBuilder|undefined {
  console.log(`Here you can select your shape. Pick an option:
  1. Buy a Triangle!
  2. Buy a Square!
  3. Buy a Pentagon!
  4. Go back. Don't buy anything.`);

  let response: string = readlineSync.question('> ')

  switch(response) { //handle each response
    case '1':
      console.log('');
      return new TriangleBuilder();
    case '2':
      console.log('');
      return new SquareBuilder();
    case '3':
      console.log('');
      return new PentagonBuilder();
    default:
      console.log('Invalid option!\n');
      return undefined;
  }
}

/**
 * Prompts the user for the quantity of a shape to order.
 * @return The user-specified item quantity.
 */
function letUserSelectQuantity(): number {
  console.log(`How many of this shape would you like to purchase?
`);
  console.log('');

  let response: string = readlineSync.question('> ')
  return parseInt(response);
}

/**
 * The item removal menu which will remove a user-specified item from Cart.
 * @param cc The CartController which controls the Cart.
 */
function removeItemFromCart(cc: CartController): void {
  cc.displayView("REMOVE");

  let response: string = readlineSync.question('> ')
  let toRemove: number = parseInt(response);

  cc.removeItemFromCart(toRemove);
  console.log(''); //extra empty line for revisiting
}

/**
 * Displays all items and their attributes in the Cart.
 * @param cc The CartController which controls the Cart.
 */
function viewItemsInCart(cc: CartController): void {
  cc.displayView("ITEMS");
}

/**
 * Displays the total price for the Cart.
 * @param cc The CartController which controls the Cart.
 */
function viewCartTotal(cc: CartController): void {
  cc.displayView("TOTAL_PRICE");
}

