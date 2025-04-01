/**DECORADORES 
 * Funciones especiales que se adjuntan a diferentes objetos 
 * que permite agregar anotaciones o modificar el comportamiento de clases, métodos, propiedades o parámetros en el código de una manera declarativa
 */
function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}

@classDecorator
class SuperClass {

    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola Mundo')
    }
}

//Imprimo la DEFINICION de las clase
console.log( SuperClass );

//Creo una instancia de la clase SuperClass
const myClass = new SuperClass();
console.log( myClass ); //Aquí si se imprime la instancia creada

//Es muy raro crear decoradores.