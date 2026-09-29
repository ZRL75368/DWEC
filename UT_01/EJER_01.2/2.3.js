const usuario = {
    nombre: 'Teo',
    email: 'teo@gmail.com'
}

const perfil = {
    puesto: 'alumno',
    empresa: 'IES Fleming'
}

// Combinamos anidando el objeto perfil dentro de empleado
const empleado = {
    ...usuario,
    perfil: {
        ...perfil
    }
};

console.log("Objeto empleado:", empleado);

// Intentamos acceder a empleado.perfil.direccion.ciudad usando Optional Chaining
// y asignamos un valor por defecto con Nullish Coalescing
const ciudadEmpleado = empleado.perfil?.direccion?.ciudad ?? "Ciudad no especificada";

console.log("Ciudad:", ciudadEmpleado); 
// Resultado en consola: "Ciudad no especificada" (porque direccion no existe todavía)s