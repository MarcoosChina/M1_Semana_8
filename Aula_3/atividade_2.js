//quando clicado o botão deve alterar a cor e o texto entre "curtir" e "curtido"

const button = document.querySelector('button');

//feito com onclick
button.onclick = function() {
  if (button.textContent === 'Curtir') {
    button.textContent = 'Curtido';
    button.style.backgroundColor = '#00a2ff';
    } else {
    button.textContent = 'Curtir';
    button.style.backgroundColor = '#646060';
  }
}
//feito com addEventListener
// button.addEventListener('click', function() {
//   if (button.textContent === 'Curtir') {
//     button.textContent = 'Curtido';
//     button.style.backgroundColor = '#00a2ff';
//   } else {
//     button.textContent = 'Curtir';
//     button.style.backgroundColor = '#646060';
//   }
// });