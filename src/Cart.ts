import {Product} from './Product';

/**
 * The Cart contains all items the user wishes to order in the appropriate quantities.
 * It is the model in the MVC pattern.
 */
export class Cart {
  private _products: Product[];
  private _quantities: number[];

  public constructor() {
    this._products = [];
    this._quantities = [];
  }

  public addItem(item: Product, quantity: number): void {
    this._products.push(item);
    this._quantities.push(quantity);
  }

  public removeItem(index: number): void {
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

  public get products(): Product[] {
    return this._products;
  }

  public get quantities(): number[] {
    return this._quantities;
  }
}
