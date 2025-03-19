//Arreglo de habilidades de un personaje del señor de los anillos
let skills: string[] = ['Bash', 'Counter', 'Healing'];

//Creando un objeto, los objetos para tiparse necesitan de una INTERFAZ
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

//Ahora el objeto strider debe ser de tipo Character y se asigna con : nombreInterfaz
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}
export {};