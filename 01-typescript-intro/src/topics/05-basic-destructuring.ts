 
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Give up",
    details: {
        author: 'Linkid Park',
        year: 2007,
    }
}

/** DESESTRUCTURACIÓN DE OBJETOS
 * Es una sintaxis especial que permite extraer valores de arreglos o propiedades de objetos y asignarlos a variables de manera más concisa y legible.
 * Permite extraer propiedades e un objeto y asignarlas a variables.
 */
const { song, songDuration:duration } = audioPlayer;
//aquí la propiedad song puede ser llamada como una nueva constante y no como una propiedad del objeto audioPlayer, si quiero cambiarle el nombre a la variable de la propiedad se hace con el nombre de la propiedad seguido de : y el nuevo nombre que le quiero dar a la variable.

console.log(`Song: `, song);
console.log(`Duration: `, duration);

//Desestructuración de details author, primero desestructurar details y después author
const { details:{ author } } = audioPlayer;

console.log(`Author: `, author);

/**DESESTRUCTURACIÓN DE ARREGLOS
 * Practicamente es lo mismo que con los objetos pero se utilizan [] en lugar de {}
 * PERO la destructuración en arreglos funciona por el INDICE del valor y no por el nombre como en los objetos
 * por lo tanto se deben colocar todos los indices ya sean vacios o nombrados para llegar al elemento que queremos
 */
const dandadan: string[] = ['Momo', 'Okarun', 'Aria'];

const [ , , aria ] = dandadan; //Puedo no definir a los primeros 2 valores para llegar el 3
//Para el caso de un elemento que no existe en el arreglo se le puede asignar uno desde la destructuración
const [ , , , turbo = 'Not found' ] = dandadan;

//Si quiero el personaje de Aria de manera tradicional sería de la siguiente forma: 
console.log('Personaje 3:', aria)
console.log('Personaje 4:', turbo)