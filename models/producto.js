class Producto{

    constructor(id,sku,nombre,precio,stock){
        this._id = id;
        this._sku = sku;
        this._nombre = nombre;
        this._precio = precio;
        this._stock = stock;
    }

    get id() {
        return this._id;
    }
    
    set id(id) {
        this._id = id;
    }

    get sku() {
        return this._sku;
    }
    
    set sku(sku) {
        this._sku = sku;
    }

    get nombre() {
        return this._nombre;
    }
    
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }
    
    set precio(precio) {
        this._precio = precio;
    }

    get stock() {
        return this._stock;
    }
    
    set stock(stock) {
        this._stock = stock;
    }
}

module.exports = producto;