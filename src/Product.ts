// Bo Yang Li
// CSCI 4602
// Assignment 5

/**
 * Item in the Cart.
 */
export class Product {
    private _name: string;
    private _price: number;
    private _description: string;

    public constructor(name: string, price: number, description: string) {
        this._name = name;
        this._price = price;
        this._description = description;
    }

    public get name(): string { return this._name; }
    public get price(): number { return this._price; }
    public get description(): string { return this._description; }
}
