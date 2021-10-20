/*  eventos.js
    Ejercicios Guiados de POE
    Autor: Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
*/
'use strict'
//POE (Programación Orientada a Eventos)

window.onload = iniciar;
let mapa = null;

function iniciar(){

  mapa = document.getElementById('imgMapa');
  //Se pueden añadir eventos de las dos siguientes maneras:
  //img.onclick=manejadorClick;
  //Con .addEventListener() se van añadiendo, con onclick() se reemplaza
  //img.addEventListener('click', manejadorClick);
  //img.addEventListener('click', manejadorClick2);
  mapa.addEventListener('onclick', ponerSeta);
  mapa.addEventListener('contextmenu', quitarSeta);

}

function ponerSeta(evento){

  //SETA
  //Crear
  let seta = document.createElement('img');
  //Añadir
  document.body.appendChild(seta);
  //src
  seta.src = 'img/seta.png';
  //class
  seta.classList.add('seta');
  //Posicion
  seta.style.top = `${evento.clientY - 25}px`;
  seta.style.left = `${evento.clientX - 25}px`;

}

function quitarSeta(evento){

  

}
