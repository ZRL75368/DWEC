// creo un Array llamado curso que cada elemento contiene estos atributos
// dentro de cada curso hay un array de tres estudiantes matriculados
const cursos = [
    {
    nombre: 'DAW',
    profesor: 'Mario',
    estudiantes: [
        {nombre: 'Teo', calificacion: 3},
        {nombre: 'Luis', calificacion: 7},
        {nombre: 'Ana', calificacion: 9},

        ],
    },

    {
    nombre: 'DAM',
    profesor: 'Marta',
    estudiantes: [
        {nombre: 'Maria', calificacion: 2},
        {nombre: 'Juan', calificacion: 5},
        {nombre: 'Pedro', calificacion: 8},

        ],
    },

    {
    nombre: 'ASIR',
    profesor: 'Luis',
    estudiantes: [
        {nombre: 'Carmen', calificacion: 7},
        {nombre: 'Jose', calificacion: 6},
        {nombre: 'Alba', calificacion: 1},

        ],
    },

    {
    nombre: 'IA',
    profesor: 'Daniel',
    estudiantes: [
        {nombre: 'Alvaro', calificacion: 1},
        {nombre: 'Diego', calificacion: 9},
        {nombre: 'Alejandro', calificacion: 5},

        ],
    }];

// creo un nuevo array llamado resumenCursos
// .map() recorre todos los cursos uno por uno
// Por cada curso, devuelve un nuevo objeto

const resumenCursos = cursos.map(curso => {

    // creo una variable para guardar la suma de todas
    // las calificaciones de los estudiantes
    let suma = 0;

    // recorro el array de estudiantes del curso actual
    // estudiante representa a cada estudiante
    curso.estudiantes.forEach(estudiante => {

        // sumo la calificación del estudiante a suma
        suma += estudiante.calificacion;
    });

    // calculo el promedio:
    // suma de las calificaciones / número de estudiantes
    const promedio = suma / curso.estudiantes.length;

    // devuelvo un nuevo objeto con solo los datos 
    // que nos pide el ejercicio
    return {

        // guardo el nombre del curso
        nombreCurso: curso.nombre,
        
        // guardo el promedio de las calificaciones
        promedioCalificaciones: promedio
    };
});

// muestro por consola el nuevo array con el resumen de los cursos
console.log(resumenCursos);