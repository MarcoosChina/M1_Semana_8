const titulo = prompt("Digite o título da página: ");

const h1 = document.createElement("h1");
h1.textContent = titulo;

document.body.appendChild(h1);

for(let c = 0; c < 3; c++){
    let paragrafo = prompt("Digite o conteúdo do parágrafo: ");

    const p = document.createElement("p");
    p.textContent = paragrafo;

    document.body.appendChild(p);
}