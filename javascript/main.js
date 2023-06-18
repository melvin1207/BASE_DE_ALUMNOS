const arregloestudiantes = []
const form = document.querySelector('#Registry');
const nameal = document.querySelector ('#nameal')
const lastnameal = document.querySelector ('#lastnameal')

/* Manejador de evento */
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente
    /* Almacenando la información del formulario, en un objeto de javascript */
    const student = {
        name: form.name.value,
        lastname: form.lastName.value,
        age: Number(form.age.value)
    };

    if (validateStudent(student)) {
        arregloestudiantes.push(student);
        localStorage.setItem("estudiantes", JSON.stringify(arregloestudiantes));
        updateStudentsList();
        
    } else {
        alert("Tienes un dato vacío, verificalo");
        event.stopPropagation();
    }
})

nameal.addEventListener ('click', (event) => {
    event.preventDefault();
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
    updateStudentsList();
})

lastnameal.addEventListener ('click', (event) => {
    event.preventDefault();
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
    updateStudentsList();
})


const validateStudent= ({ name = "", lastname = "", age = 0 }) => name !== "" && lastname !== "" && age !== 0; //Regresa un booleano

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

const home = document.querySelector('#Home');
const clases = document.querySelector('#AsignarClases');
const calificaciones = document.querySelector('#Calificaciones');
const finales = document.querySelector('#Finales');

home.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
})

clases.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'clases.html';
})

