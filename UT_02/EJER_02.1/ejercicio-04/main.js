// import: trae las funciones que necesitamos desde el archivo local 'empleados.js'
import { 
    agregarEmpleado, 
    eliminarEmpleado, 
    buscarPorDepartamento, 
    calcularSalarioPromedio, 
    obtenerEmpleadosOrdenadosPorSalario,
    obtenerEmpleados 
} from './empleados.js';

// console.log(): imprime información en la consola para visualizarla
console.log("--- Lista inicial de empleados ---");
console.log(obtenerEmpleados());

// Creamos un objeto literal con los datos del nuevo libro/empleado y lo añadimos
const nuevoEmpleado = { 
    id: 5, 
    nombre: 'Elena Marco', 
    departamento: 'Marketing', 
    salario: 2400 
};
agregarEmpleado(nuevoEmpleado);

console.log("--- Lista después de añadir un empleado ---");
console.log(obtenerEmpleados());

// Llamamos a la función de filtrar por departamento y mostramos el resultado
console.log("--- Empleados del departamento de Tecnología ---");
console.log(buscarPorDepartamento('Tecnología'));

// Calculamos y mostramos la media salarial
console.log("--- Salario promedio de la empresa ---");
console.log(calcularSalarioPromedio());

// Obtenemos y mostramos la lista ordenada de mayor a menor sueldo
console.log("--- Empleados ordenados por salario (Mayor a Menor) ---");
console.log(obtenerEmpleadosOrdenadosPorSalario());

// Eliminamos al empleado con ID 2
eliminarEmpleado(2);
console.log("--- Lista después de eliminar al empleado con ID 2 ---");
console.log(obtenerEmpleados());