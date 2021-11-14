import {Cart} from './Cart';
import {CartView} from './CartView';

/**
 * The CartView that contains all Cart item attributes, including quantity.
 */
export class ItemsView implements CartView {

  /**
   * See {@link CartView.isMatch}
   */
  public isMatch(id: string): boolean {
    return id === "ITEMS";
  }

  /**
   * See {@link CartView.getView}
   */
  public getView(cart: Cart): string {
    let viewString: string = "";
    for (let i = 0; i < cart.products.length; i++) {
      viewString += "       Name: " + cart.products[i].name + "\n";
      viewString += "      Price: " + cart.products[i].price + "\n";
      viewString += "Description: " + cart.products[i].description + "\n";
      viewString += "   Quantity: " + cart.quantities[i] + "\n";
    }
    return viewString;
  }
}
