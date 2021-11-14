// Bo Yang Li
// CSCI 4602
// Assignment 5

import {Product} from './Product';
import {ProductBuilder} from './ProductBuilder';

/**
 * PentagonBuilder builds Pentagon Products with predefined attributes.
 */
export class PentagonBuilder extends ProductBuilder {

  public constructor() {
    super();
    this._product = new Product("Pentagon", 5.5, "It's got five sides!");
  }
}
