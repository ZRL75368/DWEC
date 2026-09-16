const coche = {
    marca : 'BMW',
    modelo : "Serie 3",
    anio : 2006,
    estadisponible : true
};

console.table(coche)

let{marca, modelo, anio, estadisponible} = coche;
console.log(coche);

coche.estadisponible = true;

coche.color = "negro";

delete coche.anio;
console.log(coche);