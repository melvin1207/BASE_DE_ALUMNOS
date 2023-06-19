const arregloestudiantes = JSON.parse(localStorage.getItem("estudiantes"));
const home = document.querySelector('#Home');
const clases = document.querySelector('#AsignarClases');
const calificaciones = document.querySelector('#Calificaciones');
const finales = document.querySelector('#Finales');
const inscripciones = document.querySelector('#Inscripciones');
const namefilter = document.querySelector('#NameFilter');
const groupfilter = document.querySelector('#GroupFilter');
const form = document.querySelector('#inscripciones');

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