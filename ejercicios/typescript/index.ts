//Interfaces

enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
}

interface Rectangulo {
    ancho: number;
    alto: number;
    color: Color;
}

let rect: Rectangulo = {
    ancho: 4,
    alto:6,
    //color: Color.Rojo,
};

function area(r: Rectangulo): number {
return r.alto * r.ancho;
}

const areaRectangulo = area(rect);
console.log(areaRectangulo);

rect.toString = function(){
    return this.color ? `Un rectángulo ${this.color}` : `Un rectángulo`
}

console.log(rect.toString())
