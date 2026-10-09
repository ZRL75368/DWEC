const coche = {
    marca: 'BMW',
    modelo: 'Serie 3',
    año: 2003,
    estaDisponible: true
};

console.table(coche);

coche.color = 'Negro';

delete coche.año;

console.log(coche);