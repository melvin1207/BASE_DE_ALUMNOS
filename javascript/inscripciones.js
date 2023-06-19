const arregloestudiantes = JSON.parse(localStorage.getItem("estudiantes"));const home = document.querySelector('#Home');
const clases = document.querySelector('#AsignarClases');
const calificaciones = document.querySelector('#Calificaciones');
const finales = document.querySelector('#Finales');
const inscripciones = document.querySelector('#Inscripciones');
const namefilter = document.querySelector('#NameFilter');
const groupfilter = document.querySelector('#GroupFilter');
const form = document.querySelector('#inscripciones');

const updateStudentsList= () => {
  const studentsList = document.querySelector('#studentsList');
  studentsList.innerHTML = ''; // Limpiamos el contenido existente
  arregloestudiantes.forEach(student => {
      const row = `
      <tr>
        <td>${student.name}</td>
        <td>${student.lastname}</td>
        <td>${student.age}</td>
        <td>${student.group}</td>
        <td>${student.subject1}</td>
        <td>${student.subject2}</td>
        <td>${student.subject3}</td>
      </tr>
    `;
      studentsList.innerHTML += row;
  });
};

const clearStudentsList= () => {
const studentsList = document.querySelector('#studentsList');
studentsList.innerHTML = ''; // Limpiamos el contenido existente
arregloestudiantes.forEach(student => {
    const row = `
    <tr class="filtro">
      <td>${student.name}</td>
      <td>${student.lastname}</td>
      <td>${student.age}</td>
      <td>${student.group}</td>
      <td>${student.subject1}</td>
      <td>${student.subject2}</td>
      <td>${student.subject3}</td>
    </tr>
  `;
    studentsList.innerHTML += row;
});
};

updateStudentsList();

namefilter.addEventListener('keyup', (e) => {
  let name = namefilter.value.toLowerCase();
  clearStudentsList();
  arregloestudiantes.forEach(student => {
    if(student.name.toLowerCase().includes(name)){
      const row = `
        <tr>
          <td>${student.name}</td>
          <td>${student.lastname}</td>
          <td>${student.age}</td>
          <td>${student.group}</td>
          <td>${student.subject1}</td>
          <td>${student.subject2}</td>
          <td>${student.subject3}</td>
        </tr>
      `;
        studentsList.innerHTML += row;

    } else {
      const row = `
        <tr class="filtro">
          <td>${student.name}</td>
          <td>${student.lastname}</td>
          <td>${student.age}</td>
          <td>${student.group}</td>
          <td>${student.subjects}</td>
        </tr>
      `;
        studentsList.innerHTML += row;
    }
  })
})

groupfilter.addEventListener('change', (e) => {
  let group = groupfilter.value.toLowerCase();
  clearStudentsList();
  arregloestudiantes.forEach(student => {
    if(student.group.toLowerCase().includes(group)){
      const row = `
        <tr>
          <td>${student.name}</td>
          <td>${student.lastname}</td>
          <td>${student.age}</td>
          <td>${student.group}</td>
          <td>${student.subject1}</td>
          <td>${student.subject2}</td>
          <td>${student.subject3}</td>
        </tr>
      `;
        studentsList.innerHTML += row;

    } else {
      const row = `
        <tr class="filtro">
          <td>${student.name}</td>
          <td>${student.lastname}</td>
          <td>${student.age}</td>
          <td>${student.group}</td>
          <td>${student.subject1}</td>
          <td>${student.subject2}</td>
          <td>${student.subject3}</td>
        </tr>
      `;
        studentsList.innerHTML += row;
    }
  })
})

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que se envíe el formulario automáticamente
  /* Almacenando la información del formulario, en un objeto de javascript */
  
  const student = {
    name: form.name.value,
    group: form.group.value,
    subject: form.subjects.value
  };

  arregloestudiantes.forEach(estudiante => {
    if (student.name == estudiante.name && "A" == estudiante.group){
      estudiante.subject1 = "Matematicas"
      estudiante.subject2 = "Fisica"
      estudiante.subject3 = "Español"
      updateStudentsList();
      localStorage.setItem("estudiantes", JSON.stringify(arregloestudiantes));
    } else if (student.name == estudiante.name && "B" == estudiante.group){
      estudiante.subject1 = "Matematicas"
      estudiante.subject2 = "Historia"
      estudiante.subject3 = "Quimica"
      updateStudentsList();
      localStorage.setItem("estudiantes", JSON.stringify(arregloestudiantes));
    } else if (student.name == estudiante.name && "C" == estudiante.group){
      estudiante.subject1 = "Matematicas"
      estudiante.subject2 = "Fisica"
      estudiante.subject3 = "HIstoria"
      updateStudentsList();
      localStorage.setItem("estudiantes", JSON.stringify(arregloestudiantes));
    }
  })
})


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