const input = document.querySelector('#input');
const texto = document.querySelector('#display');

const displayEdad = () => {
    const valorEdad = parseInt(input.value);
    texto.textContent= (valorEdad>=18) ? 'Eres mayor de edad': 'Eres menor de edad';
}