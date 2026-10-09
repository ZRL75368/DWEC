const estudiantes = [

    {
        nombre: 'Teo',
        apellidos: 'Gutiérrez',
        calificacion: 7,
        aprobado: true
    },

    {
        nombre: 'Alvaro',
        apellidos: 'Moran',
        calificacion: 9,
        aprobado: true
    },

    {
        nombre: 'Nacho',
        apellidos: 'Martinez',
        calificacion: 3,
        aprobado: false
    },

];

// no hace falta recorrer con bulce ya que el map ya recorre solo, pero hay que declarar el indice
const añadirId = estudiantes.map((estudiante, i) => { 
    return estudiante.id = i;
    }
);

const aprobados = estudiantes.filter((estudiante) => {
    return estudiante.calificacion >= 5;
});

for(let i = 0; i < aprobados.length; i++){
    console.log(`¡Felicidades ${aprobados[i].nombre}, has aprobado con ${aprobados[i].calificacion}!`);
};

for(let i = 0; i < estudiantes.length; i++){
    if(estudiantes[i].calificacion >= 5){
        estudiantes[i].aprobado = true;
    }
    else if(estudiantes[i].calificacion <5){
        estudiantes[i].aprobado = false;
    }
    else{
        console.log(`⚠️ Incoherencia en el registro de ${estudiantes[i].nombre} calificación = ${estudiantes[i].calificacion}, aprobado = ${estudiantes[i].aprobado}`);
    }
};