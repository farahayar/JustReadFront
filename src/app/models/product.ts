export class Product {
    // lezem export !!

    // koll attribut andou ? optionel w el ? t3aweth les possibilités mta les constructeurs lkooooool
    constructor(private _productName?: string,
        private _productDescription?: string,
        private _productPrice?: string,
        private _prodDate?: string,
        private _idClient?: string,
        private _photoUrl?: string) { }


    get productName() { return this._productName; }
    set productName(productName: string) { this._productName = productName; }


    get productDescription() { return this._productDescription; }
    set productDescription(productDescription: string) { this._productDescription = productDescription; }


    get productPrice() { return this._productPrice; }
    set productPrice(productPrice: string) { this._productPrice = productPrice; }


    get prodDate() { return this._prodDate; }
    set prodDate(prodDate: string) { this._prodDate = prodDate; }


    get idClient() { return this._idClient; }
    set idClient(idClient: string) { this._idClient = idClient; }

    get photoUrl() { return this._photoUrl; }
    set photoUrl(photoUrl: string) { this._photoUrl = photoUrl; }



}