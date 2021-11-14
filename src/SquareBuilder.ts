// Bo Yang Li
// CSCI 4602
// Assignment 5

import {Product} from './Product';
import {ProductBuilder} from './ProductBuilder';

/**
 * SquareBuilder builds Square Products with predefined attributes.
 */
export class SquareBuilder extends ProductBuilder {

  public constructor() {
    super();
    this._product = new Product("Square", 4.5, "It's got four sides!");
  }
}
