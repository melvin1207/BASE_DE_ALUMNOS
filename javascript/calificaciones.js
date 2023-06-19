const arregloestudiantes = JSON.parse(localStorage.getItem("estudiantes"));const home = document.querySelector('#Home');
const clases = document.querySelector('#AsignarClases');
const calificaciones = document.querySelector('#Calificaciones');
const finales = document.querySelector('#Finales');
const inscripciones = document.querySelector('#Inscripciones');
const namefilter = document.querySelector('#NameFilter');
const groupfilter = document.querySelector('#GroupFilter');
const form = document.querySelector('#inscripciones');

const materia1 = document.querySelector('#subject1');
const materia2 = document.querySelector('#subject2');
const materia3 = document.querySelector('#subject3');



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
        <td>${student.cali1}</td>
        <td>${student.subject2}</td>
        <td>${student.cali2}</td>
        <td>${student.subject3}</td>
        <td>${student.cali3}</td>
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
    <td>${student.cali1}</td>
    <td>${student.subject2}</td>
    <td>${student.cali2}</td>
    <td>${student.subject3}</td>
    <td>${student.cali3}</td>
    </tr>
  `;
    studentsList.innerHTML += row;
});
};

updateStudentsList();


groupfilter.addEventListener('change', (e) => {
  let group = groupfilter.value.toLowerCase();

  clearStudentsList();
  arregloestudiantes.forEach(student => {
    if(student.group.toLowerCase().includes(group)){
      materia1.innerHTML = student.subject1;
      materia2.innerHTML = student.subject2;
      materia3.innerHTML = student.subject3;
      const row = `
        <tr>
        <td>${student.name}</td>
        <td>${student.lastname}</td>
        <td>${student.age}</td>
        <td>${student.group}</td>
        <td>${student.subject1}</td>
        <td>${student.cali1}</td>
        <td>${student.subject2}</td>
        <td>${student.cali2}</td>
        <td>${student.subject3}</td>
        <td>${student.cali3}</td>
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
        <td>${student.cali1}</td>
        <td>${student.subject2}</td>
        <td>${student.cali2}</td>
        <td>${student.subject3}</td>
        <td>${student.cali3}</td>
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
    cali1: form.cali1.value,
    cali2: form.cali2.value,
    cali3: form.cali3.value
  };

  arregloestudiantes.forEach(estudiante => {
    if (student.name == estudiante.name && student.group == estudiante.group){
      estudiante.cali1 = student.cali1
      estudiante.cali2 = student.cali2
      estudiante.cali3 = student.cali3
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