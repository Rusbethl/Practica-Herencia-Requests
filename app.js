const alumnos=[

    new Alumnos('Ronald', 'Rusbethl R', '07','Ing Software','V'),
    new Alumnos('Ronald', 'Rusbethl R', '07','Ing Software','V')
    
];

function mostrarAlumnos(){
    let texto = '';
    for(let alumno of alumnos){
        
        texto += `<li>${alumno.matricula} ${alumno.nombre} ${alumno.apellido} ${alumno.grado} ${alumno.carrera} ${alumno.turno}</li>`;
    }
    document.getElementById('alumnos').innerHTML = texto;
    
}
4
function agregarAlumno(){
     const ff = document.forms['formulario'];
     const nombre = ff['nombre'];
     const apellido = ff['apellido'];
     const grado = ff['grado'];
     const carrera = ff['carrera'];
     const turno = ff['turno'];
     const alumno = new Alumnos(nombre.value,apellido.value,grado.value,carrera.value,turno.value);
     alumnos.push(alumno);
     mostrarAlumnos();
}