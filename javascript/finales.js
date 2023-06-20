const arregloestudiantes = JSON.parse(localStorage.getItem("estudiantes"));
const home = document.querySelector('#Home');
const clases = document.querySelector('#AsignarClases');
const calificaciones = document.querySelector('#Calificaciones');
const finales = document.querySelector('#Finales');
const inscripciones = document.querySelector('#Inscripciones');
const namefilter = document.querySelector('#NameFilter');
const groupfilter = document.querySelector('#GroupFilter');
const nameal = document.querySelector ('#nameal')
const lastnameal = document.querySelector ('#lastnameal')
const groupprom = document.querySelector('#groupprom');
const ascen = document.querySelector('#ascen');
const descen = document.querySelector('#descen');

//orden ascendente
ascen.addEventListener ('click', (event) => {
  event.preventDefault();
  event.preventDefault();
  if(groupfilter.value == "A") {
    arregloestudiantes.sort ((a, b) => {
      a = a.promedio;
      b = b.promedio;
      if (a == b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
        return 1;
    })
    updateStudentsList()
  } else if(groupfilter.value == "B") {
    arregloestudiantes.sort ((a, b) => {
      a = a.promedio;
      b = b.promedio;
      if (a == b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
        return 1;
    })
    updateStudentsList()
  } else if(groupfilter.value == "C") {
    arregloestudiantes.sort ((a, b) => {
      a = a.promedio;
      b = b.promedio;
      if (a == b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
        return 1;
    })
    updateStudentsList()
  } else if(groupfilter.value == "Todos"){
    arregloestudiantes.sort ((a, b) => {
      a = a.promedio;
      b = b.promedio;
      if (a == b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
        return 1;
    })
    updateStudentsList()
  }
})

//orden descendente
descen.addEventListener ('click', (event) => {
  event.preventDefault();
  event.preventDefault();
  if(groupfilter.value == "A") {
    arregloestudiantes.sort ((a, b) => {
      a = a.promedio;
      b = b.promedio;
      if (a == b) {
        return 0;
      }
      if (a > b) {
        return -1;
      }
        return 1;
    })
    updateStudentsList()
  } else if(groupfilter.value == "B") {
    arregloestudiantes.sort ((a, b) => {
      a = a.promedio;
      b = b.promedio;
      if (a == b) {
        return 0;
      }
      if (a > b) {
        return -1;
      }
        return 1;
    })
    updateStudentsList()
  } else if(groupfilter.value == "C") {
    arregloestudiantes.sort ((a, b) => {
      a = a.promedio;
      b = b.promedio;
      if (a == b) {
        return 0;
      }
      if (a > b) {
        return -1;
      }
        return 1;
    })
    updateStudentsList()
  } else if(groupfilter.value == "Todos"){
    arregloestudiantes.sort ((a, b) => {
      a = a.promedio;
      b = b.promedio;
      if (a == b) {
        return 0;
      }
      if (a > b) {
        return -1;
      }
        return 1;
    })
    updateStudentsList()
  }
})

// se asigna el promedio
arregloestudiantes.forEach(student => {
  let promedio = ((Number(student.cali1) + Number(student.cali2) + Number(student.cali3)) / 3).toFixed(1)
  student.promedio = promedio;
})

//filtro de grupo
groupfilter.addEventListener('change', (event) => {
  let i = 0;
  let prom = 0;
  event.preventDefault();
  let group = groupfilter.value.toLowerCase();
  clearStudentsList()
  arregloestudiantes.forEach(student => {
    if(student.group.toLowerCase().includes(group)){
      i++
      prom = prom + Number(student.promedio);
      groupprom.innerHTML = prom / i;
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
        <td>${student.promedio}</td>
        </tr>
      `;
        studentsList.innerHTML += row;
    } else if(groupfilter.value == "Todos"){
      i++
      prom = prom + Number(student.promedio);
      groupprom.innerHTML = (prom / i).toFixed(1);
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
        <td>${student.promedio}</td>
        </tr>
      `;
        studentsList.innerHTML += row;
    } 
    else {
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
  i=0
})

//limpiar la lista visible
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

//organizar por nombre
nameal.addEventListener ('click', (event) => {
  event.preventDefault();
  if(groupfilter.value == "A") {
    arregloestudiantes.sort ((a, b) => {
      a = a.name;
      b = b.name;
      if (a == b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
        return 1;
    })
    updateStudentsList()
  } else if(groupfilter.value == "B") {
    arregloestudiantes.sort ((a, b) => {
      a = a.name;
      b = b.name;
      if (a == b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
        return 1;
    })
    updateStudentsList()
  } else if(groupfilter.value == "C") {
    arregloestudiantes.sort ((a, b) => {
      a = a.name;
      b = b.name;
      if (a == b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
        return 1;
    })
    updateStudentsList()
  } else if(groupfilter.value == "Todos"){
    arregloestudiantes.sort ((a, b) => {
      a = a.name;
      b = b.name;
      if (a == b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
        return 1;
    })
    updateStudentsList()
  }
})

//organizar por apellido
lastnameal.addEventListener ('click', (event) => {
  event.preventDefault();
  if(groupfilter.value == "A") {
    arregloestudiantes.sort ((a, b) => {
      a = a.lastname;
      b = b.lastname;
      if (a == b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
        return 1;
    })
    updateStudentsList()
  } else if(groupfilter.value == "B") {
    arregloestudiantes.sort ((a, b) => {
      a = a.lastname;
      b = b.lastname;
      if (a == b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
        return 1;
    })
    updateStudentsList()
  } else if(groupfilter.value == "C") {
    arregloestudiantes.sort ((a, b) => {
      a = a.lastname;
      b = b.lastname;
      if (a == b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
        return 1;
    })
    updateStudentsList()
  }  else if(groupfilter.value == "Todos"){
    arregloestudiantes.sort ((a, b) => {
      a = a.lastname;
      b = b.lastname;
      if (a == b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
        return 1;
    })
    updateStudentsList()
  }
})

//actualizar lista visibles
const updateStudentsList= () => {
  const studentsList = document.querySelector('#studentsList');
  studentsList.innerHTML = ''; // Limpiamos el contenido existente
  arregloestudiantes.forEach(student => {
    if(groupfilter.value == "A" && student.group == "A"){
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
        <td>${student.promedio}</td>
      </tr>
    `;
    studentsList.innerHTML += row;
    } else if(groupfilter.value == "B" && student.group == "B"){
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
        <td>${student.promedio}</td>
      </tr>
    `;
    studentsList.innerHTML += row;
    } else if(groupfilter.value == "C" && student.group == "C"){
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
        <td>${student.promedio}</td>
      </tr>
    `;
    studentsList.innerHTML += row;
    } else if (groupfilter.value == "Todos"){
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
        <td>${student.promedio}</td>
      </tr>
    `;
    studentsList.innerHTML += row;
    }
  });
};

//botones de la barra de navegación
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