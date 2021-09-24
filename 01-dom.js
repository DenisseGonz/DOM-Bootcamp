/*Devuelve un arreglo de los elementos que tengan esa etiqueta */
/*const title=document.getElementsByTagName('h1');
console.log(title);
title[0].innerHTML='Titulo cambiado desde Javascript';

const texto =document.getElementById('text');
texto.innerHTML='Este texto esta escrito desde Javascript';
texto.style.background='blue';
texto.style.color='white';*/
/*Obtiene un elemento por id */
document.getElementById
/*Obtiene todos los elementos de una clase y devuelve un arreglo */
document.getElementsByClassName
/*Obtiene todos los elementos por nombre y devuelve un arreglo */
document.getElementsByName

const texto=document.querySelector('#text');
texto.textContent = 'Estoy escribiendo desde el javascript x2';

/* Crear elementos html */
const div = document.createElement('div');
const body = document.querySelector('body');
body.append(div);