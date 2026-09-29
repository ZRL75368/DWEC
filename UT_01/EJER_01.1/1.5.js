// creamos un array de objetos y les asignamos variables con sus valores
const estudiantes = [
    {
        nombre: 'Teo', 
        apellidos: 'Gutierrez', 
        calificacion: 6, 
        aprobado: true},

    {
        nombre: 'Miguel', 
        apellidos: 'Sanz', 
        calificacion: 5, 
        aprobado: true},

    {
        nombre: 'Laura', 
        apellidos: 'Ortiz', 
        calificacion: 4, 
        aprobado: false
    }];

// aqui creamos un variable id que vaya aumentando por cada estudiante

// tenemos que crear un objeto estudiante mediante map en base a ese estudiante con ... indicamos qque añada todo sobre esos estudiantes y que le agregue el id
let id = 1;
const estudiantesAñadirId = estudiantes.map((estudiante) => ({
...estudiante,
id: id++
}));

console.log(estudiantesAñadirId);

// utilizamos el filter para filtrar estudiantes en un nuevo array cuya nota es >= a 5
const estudiantesAprobados = estudiantes.filter(estudiante => estudiante.calificacion >= 5);

console.log(estudiantesAprobados);

// Utilizampos Template String para un mensaje, mediante map, recorre cada estudiante aprobado lo guarda en estudiante y lo convierte a una frase
const frase = estudiantesAprobados.map(estudiante =>
    `¡Felicicdades ${estudiante.nombre}, has aprobado con ${estudiante.calificacion}!.`);

console.log(frase);

