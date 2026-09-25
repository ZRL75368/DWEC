const usuario = {
    nombre: 'Teo',
    email: 'teo@gmail.com'
}

const perfil = {
    puesto: 'alumno',
    empresa: 'IES Fleming'
}

const empleado = {...usuario, ...perfil}
console.log(empleado);