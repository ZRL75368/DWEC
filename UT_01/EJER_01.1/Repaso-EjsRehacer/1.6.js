const cursos = [
    {
        nombre: 'Matematicas',
        profesor: 'Juan',
        estudiantes: [
            {
                nombre: 'Carlos',
                calificacion: 3
            },  
            {
                nombre: 'Ana',
                calificacion: 7
            },
             {
                nombre: 'Jorge',
                calificacion: 6
            }
        ]
    },
    {
        nombre: 'Filosofia',
        profesor: 'Maria',
        estudiantes: [
            {
                nombre: 'Francisco',
                calificacion: 8
            },  
            {
                nombre: 'Alex',
                calificacion: 7
            },
             {
                nombre: 'Mario',
                calificacion: 9
            }
        ]
    },
    {
        nombre: 'Lengua',
        profesor: 'Carmen',
        estudiantes: [
            {
                nombre: 'Sofia',
                calificacion: 3
            },  
            {
                nombre: 'Laura',
                calificacion: 1
            },
             {
                nombre: 'Pedro',
                calificacion: 9
            }
        ]
    },
    {
        nombre: 'Historia',
        profesor: 'Nacho',
        estudiantes: [
            {
                nombre: 'Alvaro',
                calificacion: 3
            },  
            {
                nombre: 'Pablo',
                calificacion: 2
            },
             {
                nombre: 'Angela',
                calificacion: 6
            }
        ]
    }
];


function sacarPromedio(curso){
    let total = 0;
  
    curso.estudiantes.forEach((estudiante) => {
   
    total += estudiante.calificacion;
  });

  return total / curso.estudiantes.length;
};


const resumenCursos = cursos.map((curso) => {
  const nombre = curso.nombre;
  
  return {
    nombre: nombre,
    promedio: sacarPromedio(curso)
  };
});

console.log(resumenCursos);

const cursosDestacados = cursos.filter((curso)=>{

    return sacarPromedio(curso) >=7;
}
);

console.log(cursosDestacados);