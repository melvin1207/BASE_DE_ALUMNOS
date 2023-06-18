const arregloestudiantes = JSON.parse(localStorage.getItem("estudiantes"));



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