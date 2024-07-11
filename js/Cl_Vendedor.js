export default class Cl_Vendedor {
    constructor(n, m) {
        this.nombre = n;
        this.montoVenta = m;
    }

    //metodos
    set nombre(n) {
        this._nombre = n;
    }

    get nombre() {
        return this._nombre;
    }

    set montoVenta(m) {
        this._montoVenta = m;
    }

    get montoVenta() {
        return this._montoVenta;
    }

}