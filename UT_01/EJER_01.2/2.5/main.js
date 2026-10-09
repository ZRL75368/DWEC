// main.js

// Importamos las funciones necesarias desde el archivo gestorUsuarios.js
import mostrarPerfil, { crearPerfil, obtenerMayoresDeEdad, calcularPromedioEdad } from "./gestorUsuarios.js";

// Creamos un array (lista) con 5 usuarios usando la función crearPerfil
const usuarios = [
    crearPerfil('Teo', 'teo@gmail.com', 20),
    crearPerfil('Pablo', 'pablo@gmail.com', 19),
    crearPerfil('Juan', 'juan@gmail.com', 15),
    crearPerfil('Carla', 'carlao@gmail.com', 22),
    crearPerfil('Lucia', 'lucia@gmail.com', 17)
]

// Bucle clásico para recorrer la lista completa e imprimir el perfil de cada usuario
for( let i = 0; i < usuarios.length; i++){
    console.log(mostrarPerfil(usuarios[i]));
}

// Filtramos la lista original para quedarnos solo con los usuarios mayores de edad
let mayoresDeEdad = obtenerMayoresDeEdad(usuarios);

// Bucle para recorrer la nueva lista de mayores de edad y mostrarlos por consola
console.log("Mayores de edad:");
for( let i = 0; i < mayoresDeEdad.length; i++){
    console.log(mostrarPerfil(mayoresDeEdad[i]));
};

// Calculamos y mostramos la edad promedio de todos los usuarios
console.log("Promedio de edad: ", calcularPromedioEdad(usuarios));