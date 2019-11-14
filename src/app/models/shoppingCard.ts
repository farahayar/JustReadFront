export class ShoppingCard {
    // lezem export !!

    // koll attribut andou ? optionel w el ? t3aweth les possibilités mta les constructeurs lkooooool
    constructor(
        private _idUser?: String,
        private _addedDate?: Date,
        private _products?: []) { }

    get idUser() { return this._idUser; }
    set idUser(idUser: String) { this._idUser = idUser; }

    get addedDate() { return this._addedDate; }
    set addedDate(addedDate: Date) { this._addedDate = addedDate; }


    get products() { return this._products; }
    set products(products: []) { this._products = products; }

}