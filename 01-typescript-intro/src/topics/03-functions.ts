//Función tradicional
function addNumbers(a: number, b: number) {
    return a + b;
}

const result: string = addNumbers(1, 2).toString();

console.log({ result }); //Para imprimir como un objeto


//Funciones FLECHA
const addNumbersArrow = (a: number, b: number) => {
    return a + b; 
}

//Puedo asignarle un solo tipo de dato global a la función
const addNumbersArrowString = (a: number, b: number): string => {
    return `${ a + b}`; //Para colocar texto con uso de variables se utiliza ``
}

const resultArrow: string = addNumbersArrowString(2, 5);

console.log({ resultArrow });

function multiply( firstNumber: number, secondNumber?: number, base: number = 2 ) {
    return firstNumber * base;
}

const multiplyResult: number = multiply(5); //Imprime 10

console.log({ multiplyResult });