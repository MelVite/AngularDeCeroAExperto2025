/* GENERICS --> FUNCIONES GENERICAS
Son una característica que permite crear componentes (funciones, clases, interfaces, etc.)
que puedan trabajar con CUALQUIER TIPO DE DATO,
PERO de manera SEGURA y ESPECÍFICA en tiempo de compilación.
Permiten GENERALIZAR el tipo de datos de manera flexible sin perder la capacidad de aprovechar las características de tipado Typescript

SINTAXIS BASICA
Los genéricos se definen utilizando el símbolo <T>, 
donde T es un tipo genérico que se puede reemplazar por cualquier tipo cuando se usa la función, clase o interfaz. 
T es solo una convención, puedes usar cualquier otra letra o palabra, pero se suele usar T como un estándar.
*/

//Función que recibe la información de cualquier tipo
function whatsMyTime<T> ( argument: T ): T {

    return argument;
}

//Le puedo indicar a las variables que tipo de dato son con <>
let amIString = whatsMyTime<string>('Hola Mundo');
let amINumber = whatsMyTime<number>(100);
let amIArray = whatsMyTime<number[]>([1,2,3,4,5]);

console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('-') );