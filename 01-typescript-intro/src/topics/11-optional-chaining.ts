/**ENCADENAMIENTO OPCIONAL 
 * Es una característica que permite acceder a propiedades de un objeto de manera segura,
 * evitando errores cuando una propiedad no está definida o es null o undefined.
 * El encadenamiento opcional ofrece una forma más concisa y elegante de manejar casos 
 */

export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Melanio',
}

const passenger2: Passenger = {
    name: 'Hortensia',
    children: ['Mel', 'Iris']
}

const returnChildren = ( passenger: Passenger ): number => {

    if ( !passenger.children ) return 0;

    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children!.length;

    console.log( passenger.name, howManyChildren);

    return howManyChildren;
}

returnChildren( passenger2 );
returnChildren( passenger1 );