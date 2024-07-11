/* Se conoce el monto de venta de varios vendedores. Se desea conocer la cantidad de ventas que fueron por 100$
o menos, cantidad de ventas mayores a 100$. Asimismo, se desea saber el monto total en $ de todas las ventas.*/

import Cl_Vendedor from "./Cl_Vendedor.js";
import Cl_TodoVendedor from "./Cl_TodoVendedor.js";

//instanciar el objeto
let vendedor = new Cl_Vendedor("Mary", 150);
let vendedor2 = new Cl_Vendedor("Jose", 135);
let vendedor3 = new Cl_Vendedor("Carlos", 160);
let vendedor4 = new Cl_Vendedor("Pedro", 75);

let todoVendedor = new Cl_TodoVendedor();
todoVendedor.procesarVendedor(vendedor);
todoVendedor.procesarVendedor(vendedor2);
todoVendedor.procesarVendedor(vendedor3);
todoVendedor.procesarVendedor(vendedor4);

//salida solicitada
let salida = document.getElementById('Salida');
salida.innerHTML = 'Resultados'
salida.innerHTML += '<br> Cantidad de ventas que fueron por 100$ o menos = ' + todoVendedor.devolverMenor();
salida.innerHTML += '<br> Cantidad de ventas mayores a 100$ = ' + todoVendedor.devolverMayor();
salida.innerHTML += '<br> Monto total de las ventas = ' + todoVendedor.devolverMontoTotal() + "$";