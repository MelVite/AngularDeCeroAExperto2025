/*
    ===== Tarea sobre objetos e intefaces =====
*/

//1. Crear la interface SuperHero 
interface SuperHero {
    name: string;
    age: number;
    //Cuando se trabaja con interfaces que dentro tienen otro objeto se recomienda que este objeto también tenga su propia interfaz
    address: Address;
    showAddress: () => string;

}

interface Address {
    street: string;
    country: string;
    city: string;
}



const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};