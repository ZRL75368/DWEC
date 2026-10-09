// gestorUsuarios.js

// Función que recibe datos y devuelve un objeto empaquetado con la información del usuario
export function crearPerfil(nombre, email, edad){
    return{
        nombre: nombre,
        email: email,
        edad: edad
    }
};

// Función que toma un objeto usuario y lo convierte en un texto formateado y legible
function mostrarPerfil(usuario){
    return `Nombre: ${usuario.nombre}, Email: ${usuario.email}, Edad: ${usuario.edad}`;
}
// Exportamos mostrarPerfil como la opción por defecto de este archivo
export default mostrarPerfil;

// Función que comprueba si la edad de un usuario es 18 o más (devuelve true o false)
export function esMayorDeEdad(usuario){
    if(usuario.edad >= 18){
        return true;
    }
    else{
        return false;
    };
};

// Función que usa .filter() para aplicar la regla anterior a todo un array y devolver solo los mayores
export function obtenerMayoresDeEdad(usuarios){
    return usuarios.filter(esMayorDeEdad);
};

// Función que usa .reduce() para sumar todas las edades y dividirlas entre el total para sacar la media
export function calcularPromedioEdad(usuarios){
    const suma = usuarios.reduce((acumulador, usuario)=>
        acumulador + usuario.edad, 0);
    return suma / usuarios.length;
};