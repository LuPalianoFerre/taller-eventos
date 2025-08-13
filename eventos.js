const button = document.querySelector('button[onclick]');
const div = document.createElement('div');

div.style.padding = '5px';
div.style.backgroundColor = 'green';

div.appendChild(button);

document.body.appendChild(div);

div.addEventListener('click', function() {
alert('Hola! Soy el div');
});