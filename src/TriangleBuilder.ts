// Bo Yang Li
// CSCI 4602
// Assignment 5

import {Product} from './Product';
import {ProductBuilder} from './ProductBuilder';

/**
 * TriangleBuilder builds Triangle Products with predefined attributes.
 */
export class TriangleBuilder extends ProductBuilder{

  public constructor() {
    super();
    this._product = new Product("Triangle", 3.5, "It's got three sides!");
  }
}
