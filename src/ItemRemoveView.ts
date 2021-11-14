import {Cart} from './Cart';
import {CartView} from './CartView';

/**
 * The CartView that contains the item menu for item removmal.
 */
export class ItemRemoveView implements CartView {
  
  /**
   * See {@link CartView.isMatch}
   */
  public isMatch(id: string): boolean {
    return id === "REMOVE";
  }

  /**
   * See {@link CartView.getView}
   */
  public getView(cart: Cart): string {
    let viewString: string = "";
    viewString += "Select an item to be removed from the cart.\n";

    for (let i = 0; i < cart.products.length; i++) {
      viewString += i + ": " + cart.products[i].name + "\n";
    }
    return viewString;
  }       
} 

