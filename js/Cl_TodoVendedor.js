export default class Cl_TodoVendedor {
    constructor(){
        this.contVentaMenor = 0;
        this.contVentaMayor = 0;
        this.acumVenta = 0;
    }

    //metodos
    procesarVendedor(vend) {
        if(vend.montoVenta <= 100) {
            this.contVentaMenor++;
        } else {
            this.contVentaMayor++;
        }
        this.acumVenta += vend.montoVenta;
    }
    devolverMayor(){
        return this.contVentaMayor;
    }
    devolverMenor() {
        return this.contVentaMenor;
    }

    devolverMontoTotal(){
        return this.acumVenta;
    }
}