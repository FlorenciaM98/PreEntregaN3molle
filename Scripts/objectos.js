// objeto = {key: value, key: value}
// array es una forma de objecto, es decir los objetos abarcan a los array, estan en otro file
// las propiedades del objeto pueden tener funciones, y a eso lo vamos a llamar comportamiento.
// las propiedades del objeto son las key pero no son variables, la variable es el objeto, es decir
// los value en sí.
/*const persona1 = {
    nombre: "Flor",
    edad: 24,
}*/

/*const persona2 = {
    nombre: "Rocío",
    edad: 21,
    calle: "linda 789"
}*/

//obtener valores de un objecto

//console.log(persona2.edad); //puede ser con punto
//console.log(persona1["edad"]); //puede ser con los corchetes
//console.log(persona1); //puedo pedir el objeto entero, esto imprime tambien las key


// asigno otros valores

//persona1.nombre = "María";
//persona1["edad"] = 55;

//console.log(persona1.edad);
//console.log(persona1.nombre);

//CONSTRUCTOR DE OBJETOS
// es una funcion que usamos para crear un nuevo objeto cada vez que sea necesario
// me permite inicializar las propiedades de un objeto
// los metodos constructores se escriben con la primer letras en mayus

// "this" es luego intercambiado por el parametro en cuya declaracion yo llamo a la funcion

/*function Persona(nombre, edad, calle) {
    this.nombrePersona = nombre;
    this.edadPersona = edad;
    this.callePersona = calle;
   
    this.hablar = function(nombre){console.log("Hola soy " + this.nombrePersona);}    
}*/

//Uso new para crear un nuevo objeto y seguido pongo el nombre de la funcion creadora que quiero usar

//const persona3 = new Persona("Florencia", 24, "Jose bonifacio");  
// como llamo a la funcion si quisiera mostrar el nombre de la persona3 podría
// console.log(persona3.nombrePersona), lo que es igual a lo que dice la funcion this.nombrePersona
// this en este caso es el nombre de la variable

//const persona4 = new Persona("Juan", 22, "Luis Garcia");

//los metodos de los objetos tambien son funciones pero se limitan a solamente poder ser llamados dentro de
//la funcion. Es decir, los metodos son funciones dentro de los objectos.
//Metodo(se requiere un objeto y puede retornar ningun valor)

// todo lo que sea palabra + .(punto) + palabra estoy hablando de un objeto
// si yo pongo console.log(cadena.toLowerCase()) estoy usando un METODO sobre la variable cadena
// si pongo console.log(cadena.length) estoy usando una propiedas sobre la variable cadena

//persona3.hablar(persona3.nombre); //esto imprime "Hola soy " + nombre


//en la declaracion de clase la funcion constructora es reemplazada por el metodo constructor

/* class Persona2{

    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }

    hablar() {
        console.log("Hola soy " + this.nombre);
    }

} */

//Dos clases-objetos que vamos a usar
//Math y Date


