// Entender cómo utilizar funciones flecha
// Aprender a utilizar foreach, reduce, map & filter

// FUNCIONES  FLECHA
//1) ●Convierte la siguiente función en una función flecha:
function saludar() { 
    return "Hola"; 
} 
console.log(saludar());

const saludar1 = () => "hola"; 
console.log(saludar1());

const miNombre = "Jose";
const saludar2 = (name) => "Hola mi nombre es:  " + name; // "miNombre" es una variable pasada como parametro
console.log(saludar2(miNombre));

//2) ●Convierte la siguiente función en una función flecha 
//   **en línea:**
function division(a,b) { 
    return a / b;
}
const division1 = (a,b) =>  a / b;
console.log("el resultado de la division es:  " + division1(8,2));


//3) ●Convierte la siguiente función en una función flecha:
function mi1Nombre(nombre) {  
    return `Mi nombre es ${nombre}`;
}
console.log(mi1Nombre("JoseFrancisco"));

const miNombre1 = (nombre) => `Mi nombre es ${nombre}`;
console.log(miNombre1("Francisco"));  

//4) ●Convierte las siguientes funciones en funciones flecha:
function test2() {
    console.log("Función test 2 Ejecutada");
    }
    test2(); // se ejecuta y muestra por consola...
    // Funcion test2 flecha
    const test22 = () => "Función test 2 ejecu--tada.";  
    // xa verlo por consola hacemos...
    console.log(test22()); // (ejecuto la Funcion) ahora SI mostrará el resultado x consola
    
    // Funcion test1 flecha
    function test1(callback) { 
        callback();
    }
    const test11 = (callback) => callback();  
    test1(test2);
    console.log("***********------***********");    

// FOREACH
// concepto: El bucle *forEach* en JS es un bucle que simplemente recorre los objetos de un array.
//Utiliza la siguiente array para resolver los próximos ejercicios:
let gente = [  // es un Array con elementos que son Objetos ...
    {
    nombre: "Jamiro",
    edad: 45,
    },
    {
    nombre: "Juan",
    edad: 35,
    },
    {
    nombre: "Paco",
    edad: 34,
    },
    {
    nombre: "Pepe",
    edad: 14,
    },
    {
    nombre: "Pilar",
    edad: 24,
    },
    {
    nombre: "Laura",
    edad: 24,
    },
    {
    nombre: "Jenny",
    edad: 10,
    },
    ];
// practica de comprension con varios ejercicios de mostrar *Array/Objetos* por consola....
console.log(gente);// lista gente* Array con Objtos
console.log([gente]);  // lista *gente* como Array (detecta que es un Array)

console.log("*********Ejemplo 1 Nombre/Edad**********");
gente.forEach(personas => {
    console.log(`Nombre: ${personas.nombre}, Edad: ${personas.edad}`);
});

console.log("*********Ejemplo 2 Nombre**********");
gente.forEach(ArrayGente => {
    console.log(`Nombre: ${ArrayGente.nombre}`)
}); // lista los Objetos/Key=Nombre del *Array gente*
console.log("*********Ejemplo 3 Edad**********");

gente.forEach(ArrayEdad => {
    console.log(`Edad: ${ArrayEdad.edad}`)
}); // lista los Objetos/Key=edad del *Array gente*
console.log("*********FIN**********");

//5) ● Crea un array con la gente MAYOR de 25 años y muéstralo por consola. 
const genteVCinco = [];
let genteSumVCinco = 0; // ponemos en "cero" para luego sumar...
function genteMayorVCinco () {    
    for (let i = 0; i < gente.length; i++) {
        if (gente[i].edad >=25) { // usamos gente[i] para recorrer TODOS los objetos
            genteVCinco.push(gente[i]); // guaramos el Objeto completo... 
            genteSumVCinco += gente[i].edad; // sumamos la Edad...
        }
    }
}
genteMayorVCinco();  // se ejecuta el código, llamando a la Funcion ...
console.log(`*****array Suma edades*****`);
console.log("la suma de edades es: " + genteSumVCinco); // Muestra el resultado de la suma de las edades
console.log(`*****array con nombres >25 años*****`);
console.log(genteVCinco);  // Muestra las personas >25 años 

//6)  Crea un array con la gente *CUYOS NOMBRES* que empieza por J. */
console.log(`*****array con nombres "J"*****`);

const ArrayNombresJ = [];
for (let i = 0; i < gente.length; i++) {
    if (gente[i].nombre.startsWith("J")) { // startsWith("J"): Este método verifica si la cadena comienza con el carácter especificado
        ArrayNombresJ.push(gente[i]);
    }
}
console.log(ArrayNombresJ);

//3) M A P
/* concepto: tenemos una array de objetos que deseamos modificar/agregar 
propiedades de cada objeto, tambien lo usaremos en un *Array* de String.   */

/* ●Dado el siguiente array, crear otro que sea el resultado de elevar
cada número a si mismo:   */
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]
const numbers1 = [ 4, 5, 6, 7, 8, 9, 10];
let resultado = [];
function elevadoASiMismo() {
    for (let i = 0; i < numbers1.length; i++) {
        const resParcial = (numbers1[i] ** numbers1[i]);
        resultado.push(resParcial);
        
    }    
}
elevadoASiMismo();
console.log(`*****nuevo Array resultado*****`);
console.log(resultado);

//4. Filter
// ●Crea un segundo array que devuelva los impares
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let impares = numbers.filter(numero => (numero % 2 == 0)); 
console.log(impares);

// ●Dado el siguiente array, genera un segundo array que filtre los
// platos veganos y saque una sentencia como la del ejemplo:
const foodList = [
{ name: 'Tempeh', isVeggie: true },
{ name: 'Cheesbacon burguer', isVeggie: false },
{ name: 'Tofu burguer', isVeggie: true },
{ name: 'Entrecot', isVeggie: false }
];
 [
'Que rico Tempeh me voy a comer!',
'Que rica Tofu burguer me voy a comer!'
]
  
const veganFood = foodList
.filter(food => food.isVeggie) // Filtra los platos veganos
.map(food => `Que rica ${food.name} me voy a comer!`); // Genera las sentencias

console.log(veganFood);
  