//Variables

const name: string = 'Strider';
//name = 123; typescript asigna el tipo de dato cuando no se hace y lo respeta, es este caso marca error 

//Distintos tipos de datos en una variable, se pueden poner los tipos separados con |
let hpPoints: number | 'FULL' = 95;
hpPoints = 'FULL';

const isALive: boolean = true;
console.log({
    name, hpPoints, isALive
});


export {};