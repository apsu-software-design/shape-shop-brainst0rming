// Bo Yang Li
// CSCI 4602
// Assignment 5

import {Product} from './Product';

/**
 * Abstract Class for building Products.
 */
export abstract class ProductBuilder {
  protected _product!: Product;

  public get product(): Product { return this._product; }
}
