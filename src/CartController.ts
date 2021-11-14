import {Product} from './Product';
import {Cart} from './Cart';
import {CartView} from './CartView';
import {ItemsView} from './ItemsView';
import {TotalPriceView} from './TotalPriceView';
import {ItemRemoveView} from './ItemRemoveView';

/**
 * The CartController is responsible for managing all aspects of the Cart, including information display.
 * It is the controller in the MVC pattern
 */
export class CartController {
  private _model: Cart;
  private _views: CartView[]

  public constructor(model: Cart) {
    this._model = model;
    this._views = [];
    this._views.push(new ItemsView());
    this._views.push(new TotalPriceView());
    this._views.push(new ItemRemoveView());
  }

  public addItemToCart(item: Product, quantity: number): void {
    this._model.addItem(item, quantity);
  }

  public removeItemFromCart(index: number): void {
    this._model.removeItem(index);
  }

  /**
   * Displays a desired view.
   * @param id The string associated with the view to be displayed.
   */
  public displayView(id: string): void {
    for (const view of this._views) {
      if (view.isMatch(id)) { console.log(view.getView(this._model)); }
    }
  }
}
