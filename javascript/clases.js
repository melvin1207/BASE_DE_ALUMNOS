const arregloestudiantes = JSON.parse(localStorage.getItem("estudiantes"));
const namefilter = document.querySelector('#NameFilter')
const lastnamefilter = document.querySelector('#LastNameFilter')
const form = document.querySelector('#asign-group');
const home = document.querySelector('#Home');
const clases = document.querySelector('#AsignarClases');
const calificaciones = document.querySelector('#Calificaciones');
const finales = document.querySelector('#Finales');
const inscripciones = document.querySelector('#Inscripciones');


//actualizar la lista visible
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
    </tr>
    `;
    studentsList.innerHTML += row;
  });
};

//limpiar la lista visibles
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
    </tr>
    `;
    studentsList.innerHTML += row;
  });
};

updateStudentsList();

//filtro por nombre
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
      </tr>
      `;
      studentsList.innerHTML += row;
    }
  })
})

//filtro por apellido
lastnamefilter.addEventListener('keyup', (e) => {
  let lastname = lastnamefilter.value.toLowerCase();
  clearStudentsList();
  arregloestudiantes.forEach(student => {
  if(student.lastname.toLowerCase().includes(lastname)){
    const row = `
      <tr>
        <td>${student.name}</td>
        <td>${student.lastname}</td>
        <td>${student.age}</td>
        <td>${student.group}</td>
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
      </tr>
      `;
    studentsList.innerHTML += row;
  }
  })
})

//formulario de los datos
form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const student = {
    name: form.name.value,
    lastname : form.lastname.value,
    group: form.group.value
  };

  arregloestudiantes.forEach(estudiante => {
    if (student.name == estudiante.name && student.lastname == estudiante.lastname){
      estudiante.group = student.group;
      updateStudentsList();
      localStorage.setItem("estudiantes", JSON.stringify(arregloestudiantes));
    }
  })
})

//BOTONES DE LA BARRA DE NEVEGACIÓN
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