
// Definimos un valor predeterminado ('alumno') usando parámetros por defecto
const crearUsuario = (nombre, rol = 'alumno') => ({ nombre, rol });

console.log(crearUsuario('Ana'));           // { nombre: 'Ana', rol: 'alumno' }
console.log(crearUsuario('Luis', 'admin')); // { nombre: 'Luis', rol: 'admin' }