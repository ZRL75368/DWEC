// Declaramos un array (lista) constante que contiene objetos con los datos de los empleados
const empleados = [
    { id: 1, nombre: 'Ana Gómez', departamento: 'Tecnología', salario: 2500 },
    { id: 2, nombre: 'Carlos Ruiz', departamento: 'Recursos Humanos', salario: 1800 },
    { id: 3, nombre: 'Lucía Pérez', departamento: 'Tecnología', salario: 3100 },
    { id: 4, nombre: 'David Torres', departamento: 'Marketing', salario: 2100 }
];

// Función para añadir un nuevo empleado
// export: permite usar esta función en otros archivos
// empleado: parámetro que recibe el objeto con los datos del nuevo trabajador
export function agregarEmpleado(empleado) {
    // .push(): método que añade el nuevo elemento al final del array original
    empleados.push(empleado);
}

// Función para eliminar un empleado por su ID
export function eliminarEmpleado(id) {
    // .findIndex(): busca en el array y devuelve la posición numérica (índice) del elemento que coincida
    // emp => emp.id === id: condición que revisa si el id del empleado actual es igual al que buscamos
    const index = empleados.findIndex(emp => emp.id === id);
    
    // Si encuentra el índice (es decir, es diferente de -1)
    if (index !== -1) {
        // .splice(): elimina elementos del array. 'index' indica dónde empieza y '1' cuántos borra
        empleados.splice(index, 1);
    }
}

// Función para buscar empleados por departamento
export function buscarPorDepartamento(departamento) {
    // .filter(): recorre el array y devuelve un NUEVO array con todos los elementos que cumplan la condición
    // .toLowerCase(): pasa el texto a minúsculas para evitar fallos si escriben mayúsculas/minúsculas
    return empleados.filter(emp => emp.departamento.toLowerCase() === departamento.toLowerCase());
}

// Función para calcular el salario promedio
export function calcularSalarioPromedio() {
    // Si no hay empleados, devolvemos 0 para evitar errores de división por cero
    if (empleados.length === 0) return 0;

    // .reduce(): reduce todo el array a un único valor (en este caso, la suma total)
    // acumulador: guarda la suma parcial en cada vuelta
    // emp: elemento actual
    // , 0 al final: valor inicial con el que empieza el acumulador
    const total = empleados.reduce((acumulador, emp) => acumulador + emp.salario, 0);

    // Dividimos la suma total entre el número total de elementos (.length) para sacar la media
    return total / empleados.length;
}

// Función para obtener empleados ordenados por salario (de mayor a menor)
export function obtenerEmpleadosOrdenadosPorSalario() {
    // [...empleados]: el operador spread (...) crea una copia exacta del array
    // Se hace copia para no modificar el array original al usar .sort()
    // .sort(): ordena los elementos. (a, b) son dos elementos consecutivos que se comparan
    // b.salario - a.salario: al restar el segundo menos el primero, ordena de mayor a menor
    return [...empleados].sort((a, b) => b.salario - a.salario);
}

// Función auxiliar para ver la lista completa actual
export function obtenerEmpleados() {
    return empleados;
}