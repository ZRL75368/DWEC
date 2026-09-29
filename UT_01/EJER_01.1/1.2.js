// creamos un objeto coche con sus propiedades
const coche = {
    marca : 'BMW',
    modelo : "Serie 3",
    anio : 2006,
    estadisponible : true
};

// lo mostramos por pantalla
console.table(coche)

//utilizamos la desestructuracion para extraer las variables separadas e imprimirlas
let{marca, modelo, anio, estadisponible} = coche;
console.log(coche);

// cambiamos las propiedades indicasdas
coche.estadisponible = true;

// añadimos una propiedad llamada color y eliminamos la de anio
coche.color = "negro";

delete coche.anio;
console.log(coche);