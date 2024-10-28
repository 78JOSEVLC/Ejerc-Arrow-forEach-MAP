//--Clase SOFI--Fecha:  Martes 22 Octubre 2024
// function sum(a, b) {
//     return a + b;
// }

// const sum = (a, b) => {
//     return a + b;
// };
// const sum = (a, b) => a + b;

function prueba() {
     return "hola"
}
const prueba = () => "hola";
const saludar = (nombre) => "Hola mi nombre es " + nombre;
// console.log(sum(2, 2));
// function greeting(greet, name) {
//   return `${greet} ${name}`;
// }
const greeting = (greet, name) => `${greet} soy ${name}`;
// const greeting = (greet,name) => greet +" soy "+ name
// console.log(greeting("hola", "Xavi"));

//**MÉTODOS ARRAY */

//foreach
const fruits = ["pera", "manzana", "melon", "cereza", "higo"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

// fruits.forEach((fruit) => console.log(fruit));

// const canciones = ["Hang onto yourself", "Go your own way", "Modern Love"];

// canciones.forEach((cancion, indice, array) => {
//   console.log('Elemento actual',cancion,'índice', indice,'array',array);
// });

// const myArray = [1,2,3,4]

// const myArrayTimesTwo = myArray.map((value)=>{
//     return value * 2
// })

const songs = [
  { name: "Curl of the Burl", artist: "Mastodon" },
  { name: "Oblivion", artist: "Mastodon" },
  { name: "Flying Whales", artist: "Gojira" },
  { name: "Euralio y sus cabras", artist: "Euralio" },
];

//   const allSongNames = []

//   for (const song of songs) {
//     console.log(song)
//       allSongNames.push(song.name)
//   }

// const allSongNames = songs.map((song)=>{
//     return song.name
// })

const allSongNames = songs.map(song => song.name);

// console.log(allSongNames);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];


// let result =[]
// for (const word of words) {
//     if(word.length > 6){
//         result.push(word)
//     }
// }

// const result = words.filter((word)=> word.length >6)
// console.log(result)

const numbers = [10, 5, 7];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     // sum = sum + numbers[i]
//     sum += numbers[i];
// }

// const sum = numbers.reduce((a,b)=> a+b)
let sum = 0
numbers.forEach(number => sum = sum+ number)
console.log(sum)

/* Blaming clase-es6/main.js at main · SofiaPinilla/clase-es6 */