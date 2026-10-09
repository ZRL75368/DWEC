// establezco los valores por defecto
let base = 5;
let altura = 2;

// crea una Function Delcaration de el area de rectangulo on su datos
function calcularAreaRectangulo(base, altura){
    let area = (base * altura);
    return area;
}

// creo otra misma de el del triangulo, pero usando Function Expression
// const calcularAreaTriangulo = function(base, altura){
//     let area = (base * altura)/2;
//     return area;
// }

// Pruebo la anterior utilizando arrow function =>
const calcularAreaTriangulo = (base, altura) => (base * altura)/2;

// imprimo
console.log(calcularAreaRectangulo(base, altura));
console.log(calcularAreaTriangulo(base, altura));