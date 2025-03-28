/**CLASES
 * Son estructuras fundamentales en la POO 
 * Se utilizan para definir componentes, servicios, directivas, pipes entre otros elementos dentro de Angular
 * Las clases en Angular se definen usando la sintaxis estándar de TypeScript, con la palabra clave class.
 * Además, los decoradores como @Component, @Injectable, @Directive, entre otros, se usan para agregar metadatos que Angular necesita para saber cómo manejar esas clases en el contexto de su framework.
 */

export class Person {
    //Las buenas prácticas indican que las variables dentro de una clase deben ser inicializadas o identificadas
    //Las variables dentro de una clase se llaman PROPIEDADES
    public name: string;
    public address: string;

    //public indica que se puede utilizar desde fuera y private que unicamente esa propiedad esta disponible DENTRO DE LA CLASE

    //Las funciones dentro de una clase se conocen como MÉTODOS
    /*Para inicializar una clase se puede hacer con un CONSTRUCTOR
    El constructor es el primer método que se va a crear en nuestra instacia de la clase
    Es un método especial que se ejecuta automáticamente cuando se crea una nueva instancia de la clase.
    Su principal función es inicializar los valores de las propiedades de esa clase y realizar cualquier tarea de configuración necesaria
    
    ¿Cómo funciona el constructor?
    - El constructor es el primer método que se ejecuta cuando se instancia un objeto.
    - No retorna un valor explícito (si bien internamente devuelve el objeto recién creado).
    - Si no se define un constructor, TypeScript (y otros lenguajes) crea uno vacío por defecto, pero en la mayoría de los casos se define uno personalizado para inicializar las propiedades del objeto.
    */
    constructor(name: string, address: string) {
        //Para asignarle las variables dentro del paretesis se ponen en la igualdad 
        this.name = name;
        this.address = address;
    }

}

const ironMan = new Person( 'Tony', 'New York'); //Esto es instaciar a la clase Person, se manda a llamar de esta manera

console.log(ironMan);


//forma CORTA de definir clases:
export class Student {

    constructor(
        public name: string,
        public lastName: string,
        private grade: number,
    ) {}

}

const spiderMan = new Student('Peter', 'Parker', 1);

console.log(spiderMan);

/**HERENCIA --> Extender una clase 
 * La herencia se logra mediante la palabra clave EXTENDS 
 * Esto permite que una clase llamada subclase(hijo) herede propiedades y métodos de otra clase llamada superclase(padre).
 * La subclase puede modificar o extender la funcionalidad de la clase base,
 * además de agregar nuevas propiedades y métodos.
 */
export class Hero extends Person {
    
    //Al colocar un constrctor de una clase extendida es necesario colocarle super() para que mande a llamar al contructor del padre que en este caso es el constrctor de Person
    constructor(
        public alterEgo: string,
        public age: number, 
        public realName: string
    ) {
        //Al colocar un constrctor de una clase extendida es necesario colocarle super() para que mande a llamar al contructor del padre que en este caso es el constrctor de Person
        super( realName, 'New York');
    }
}

const batman = new Hero('Batman', 35, 'Bruce Wane');

console.log(batman);


/**COMPOSICIÓN --> Priorizar composición sobre herencia
 * Composición: Una clase usa otras clases para componer su funcionalidad. 
 * Es una relación más flexible, en la que las clases se pueden combinar y reutilizar sin crear una jerarquía rígida.
 * Se crea un objeto combiando varios objetos o clases que ofrecen funcionalidad específica.
 * La composición favorece la reutilización del código mediante la creación de clases más pequeñas y modulares.
 */

//Nuevo ejemplo 
export class Paciente {

    constructor(
        public nombre: string,
        public apellido: string,
        public unidad: number,
        public doctor: string,
    ) {}
}

export class CitaMedica {
    // public paciente: Paciente;
    //También puedo colocar la clase paciente destro de los parámetros del constructor eliminado el this

    constructor(
        public turno: string,
        public consultorio: number,
        public fecha: string,
        public paciente: Paciente,
    ) {
        // this.paciente = new Paciente('Melanio', 'Vite', 161)    
    }
}

//Esto se trata de una inyección de dependencias, los vemos más adelante ;) 
const goguito = new Paciente('Iris', 'Vite', 161, 'Dr. Del Lago');

const cita = new CitaMedica ('Matutino', 4, '04/03/2024', goguito);

console.log(cita);