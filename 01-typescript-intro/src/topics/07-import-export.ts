import { Product, ivaCalculation } from './06-function-destructuring';
/**IMPORTACIONES Y EXPORTACIONES 
 * Se trata de una funcionalidad encapsulada, donde se tienen modulos que se pueden llevar al mundo exterior
 * (se entiende como mundo exterior a todo archivo distinto al del código de origen)
 */

//Utilizanos de nuevo la interfaz de Product del archivo 6
const shoppingCard: Product[] = [
    {
        description: 'Nokia',
        price: 100,
    },
    {
        description: 'Huawei',
        price: 50,
    }
];

//Aplicar objeto que pide la función
const [ total, iva ] = ivaCalculation({
    products: shoppingCard,
    iva: 0.16,
});

console.log('Exp Total:', total);
console.log('Exp Iva:', iva);

/** Al importar un archivo se importa TODO, por ello vemos los console.log del archivo 6
 * A menos que sea estrictamente necesario solo debemos tener las funciones o elementos que se buscan exportar.
 */


