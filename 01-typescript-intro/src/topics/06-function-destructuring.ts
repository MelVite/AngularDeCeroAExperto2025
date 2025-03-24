/**DESTRUCTURACIÓN DE ARGUMENTOS EN FUNCIONES 
 * 
 */

export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Samsung S25',
    price: 700.0,
}

const tablet: Product = {
    description: 'iPad Air',
    price: 120.0,
}

/**OJO
 * Tener una función que utilice más de 3 argumentos en recomendable TRANSFORMARLA a un OBJETO.
 * Y dado a que tenemos un objeto también debemos crearle su interfaz
 */
interface IvaCalculationOptions {
    iva: number;
    products: Product[]; //Estoy esperando un arreglo de productos
}

//function taxCalculation( options: TaxCalculationOptions ): [number, number] {//Dado a que la función regresa un arreglo de solo 2 números se puede restringir como [number, number] en lugar de un arreglo de tipo number number[]
//Desestructuramos options por { tax, products}
// function taxCalculation( { iva, products}: TaxCalculationOptions ): [number, number] { //Pero no estan tan recomendado, mejor realiza la destructuración dentro de la función
export function ivaCalculation( options: IvaCalculationOptions ): [number, number] {
    
    //Destructuración dentro de la función
    const { iva, products } = options;

    let total = 0;

    products.forEach( product => {
        total += product.price;
    });
    //Aquí se puede desestructurar price:
    products.forEach( ({ price }) => {
        total += price;
    })

    return [ total, total * iva ];
}

const shoppingCard = [ phone, tablet ];
const iva = 0.16;

//==============================
//Pasa de: 
const result = ivaCalculation({
    products: shoppingCard,
    iva: iva,
})
//Para acceder a los valores de result se hace como un arreglo normal
console.log('Total:', result[0]);
console.log('IVA:', result[1]);

//Utilizando desestructuración
const [ total, ivaTotal] = ivaCalculation({
    products: shoppingCard,
    iva: iva,
})
console.log('Total:', total);
console.log('IVA:', ivaTotal);
//=================================
/** TAREA
 * Aplicar la destructuración en todos los niveles posibles del ejercicio anterior 
 * Suerte APA ;) 
 */

