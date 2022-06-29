//Boolean
let muted: boolean = true;
muted = false;

//Number
let seis = 6;
let numerador: number = 42;
let denominador: number = seis;
let resultado = numerador/denominador;

//String
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;

//Arrays
let people: string[] = [];
people = ['Isable', 'Nicole', 'Raul']
//people.push(9);
 
let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push('Riacardo');
peopleAndNumbers.push(98989);

//Enum

enum Color {
    Rojo = 'rojo',
    Verde = 'verde',
    Azul = 'azul',
    Amarillo = 'amarillo',
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`);

//Any
let comodin: any = 'joker';
comodin = { type: 'Wildcard'};
comodin = false;
comodin = 9;

//object
let someObject: object = { type: 'Wildcard'};
