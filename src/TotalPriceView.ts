import {Cart} from './Cart';
import {CartView} from './CartView';

/**
 * The CartView that contains the Cart total.
 */
export class TotalPriceView implements CartView {

  /**
   * See {@link CartView.isMatch}
   */    
  public isMatch(id: string): boolean {
    return id === "TOTAL_PRICE";
  }

  /**
   * See {@link CartView.getView}
   */
  public getView(cart: Cart): string {
    let total: number = 0;
    for (let i = 0; i < cart.products.length; i++) {
      total += cart.products[i].price * cart.quantities[i];
    }
    return "Shopping Cart Total: " + total;
  }
}
