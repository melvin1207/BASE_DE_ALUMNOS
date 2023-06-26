let arregloestudiantes = JSON.parse(localStorage.getItem("estudiantes"));
const form = document.querySelector('#Registry');
const nameal = document.querySelector ('#nameal')
const lastnameal = document.querySelector ('#lastnameal')
const newRegistry= document.querySelector('#newRegistry');
const home = document.querySelector('#Home');
const clases = document.querySelector('#AsignarClases');
const calificaciones = document.querySelector('#Calificaciones');
const finales = document.querySelector('#Finales');
const inscripciones = document.querySelector('#Inscripciones');

// Boton del formulario
form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const student = {
    name: form.name.value,
    lastname: form.lastName.value,
    age: Number(form.age.value)
  };
  if (validateStudent(student)) {
    arregloestudiantes.push(student);
    localStorage.setItem("estudiantes", JSON.stringify(arregloestudiantes));
    updateStudentsList();
  } else{
    alert("Tienes un dato vacío, verificalo");
    event.stopPropagation();
  }
})

//Limpiar la lista visivle
const clearStudentsList= () => {
  const studentsList = document.querySelector('#studentsList');
  studentsList.innerHTML = ''; // Limpiamos el contenido existente
  arregloestudiantes.forEach(student => {
    const row = `
    <tr class="filtro">
    <td>${student.name}</td>
    <td>${student.lastname}</td>
    <td>${student.age}</td>
    </tr>
    `;
    studentsList.innerHTML += row;
  });
};

//Actualizar la vista visible de estudiantes
const updateStudentsList= () => {
  const studentsList = document.querySelector('#studentsList');
  studentsList.innerHTML = ''; // Limpiamos el contenido existente
  arregloestudiantes.forEach(student => {
    const row = `
      <tr>
        <td>${student.name}</td>
        <td>${student.lastname}</td>
        <td>${student.age}</td>
      </tr>
    `;
    studentsList.innerHTML += row;
  });
};

updateStudentsList();

//borrar la lista no visible
newRegistry.addEventListener('click', (event) => {
  arregloestudiantes = [];
  clearStudentsList();
})

//Filtro por nombre
nameal.addEventListener ('click', (event) => {
  event.preventDefault();
  const n = arregloestudiantes.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arregloestudiantes[j].name > arregloestudiantes[j + 1].name) {
        [arregloestudiantes[j], arregloestudiantes[j + 1]] = [arregloestudiantes[j + 1], arregloestudiantes[j]];
      }
    }
  }
  updateStudentsList();  
})

//Filtro por apellido 
lastnameal.addEventListener ('click', (event) => {
  event.preventDefault();
  const n = arregloestudiantes.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arregloestudiantes[j].lastname > arregloestudiantes[j + 1].lastname) {
        [arregloestudiantes[j], arregloestudiantes[j + 1]] = [arregloestudiantes[j + 1], arregloestudiantes[j]];
      }
    }
  }
  updateStudentsList();
})

//validar un estudiante
const validateStudent= ({ name = "", lastname = "", age = 0 }) => name !== "" && lastname !== "" && age !== 0; //Regresa un booleano

//Botones para el cambio de paginas
home.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'index.html';
})

clases.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'clases.html';
})

calificaciones.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'calificaciones.html';
})

finales.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'finales.html';
})

inscripciones.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'inscripciones.html';
})

