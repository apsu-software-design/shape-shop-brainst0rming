import {Cart} from './Cart';

/**
 * The interface upon which all views from the MVC pattern are based on.
 */
export interface CartView {

  /**
   * Strategy Pattern: Does the ID associated with said CartView match the request?
   * @param id The string associated with the requested CartView.
   * @return True if request is satisfied, False otherwise.
   */
  isMatch(id: string): boolean;

  /**
   * Computes a string sequence corresponding to the desired view for the Cart.
   * @param cart The Cart to be displayed in some way.
   * @return A string sequence representing the CartView's view of the Cart.
   */
  getView(cart: Cart): string;
}
