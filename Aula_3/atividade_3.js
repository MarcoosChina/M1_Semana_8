// //ATIVIDADE - III
// Crie um documento HTML e um script JS:
// O documento HTML deve conter:
// Um título: "Escreva sobre você"
// Um <textarea> para o usuário digitar.
// Um texto, dentro de um <span>, informando: "Caracteres digitados: 0"
// Enquanto o usuário digitar no <textarea>, o contador deverá ser atualizado automaticamente.
// Dica: Utilize a seleção de elemento no <textarea> e um evento de teclado para "tratar" a digitação do usuário-->


//forma 1 de fazer
// const textarea = document.querySelector('textarea');
// let contador = 0;
// textarea.addEventListener('input', function(){
//     contador = textarea.value.length;
//     document.querySelector('span').textContent = 'Caracteres digitados: ' + contador;
//     // Exibir mensagem de aviso quando o limite for atingido
//     if (contador >= 100){
//         alert('Você atingiu o limite de caracteres!');
//     }
// })

//forma 2 de fazer

const textarea = document.querySelector('textarea');
const span = document.querySelector('span')

function atualizarContador(){
    const texto = textarea.value;
    span.innerText = `Caracteres digitados: ${texto.length}`;
}
textarea.addEventListener('input', atualizarContador);

//  const campo = document.getElementById('meu-texto');
//   const contador = document.getElementById('contador');

//   campo.addEventListener('input', function() {
//     contador.textContent = campo.value.length;
