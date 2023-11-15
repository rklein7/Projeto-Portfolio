function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i)=> {
        setTimeout (()=>{
            elemento.innerHTML += letra;
        }, 110 * i)
    })
}
const titulo = document.querySelector('.digitando')
ativaLetra(titulo);

document.addEventListener("DOMContentLoaded", function() {
    // Aguarde 500 milissegundos (ou o tempo desejado) antes de adicionar a classe
    setTimeout(function() {
      var apresentacaoEscritaHome = document.querySelector('.apresentacaoEscritaHome');
      apresentacaoEscritaHome.classList.add('slide-in');
    }, 500); // Tempo em milissegundos
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Aguarde 500 milissegundos (ou o tempo desejado) antes de adicionar a classe
    setTimeout(function() {
      var apresentacaoEscritaHome = document.querySelector('.linksContainer');
      apresentacaoEscritaHome.classList.add('slide-in');
    }, 500); // Tempo em milissegundos
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Aguarde 500 milissegundos (ou o tempo desejado) antes de adicionar a classe
    setTimeout(function() {
      var apresentacaoSobre = document.querySelector('.apresentacaoSobre');
      apresentacaoSobre.classList.add('slide-in');
    }, 500); // Tempo em milissegundos
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Aguarde 500 milissegundos (ou o tempo desejado) antes de adicionar a classe
    setTimeout(function() {
      var infosPessoais = document.querySelector('.infosPessoais');
      infosPessoais.classList.add('slide-in');
    }, 500); // Tempo em milissegundos
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Aguarde 500 milissegundos (ou o tempo desejado) antes de adicionar a classe
    setTimeout(function() {
      var interessesContainer = document.querySelector('.interessesContainer');
      interessesContainer.classList.add('slide-in');
    }, 500); // Tempo em milissegundos
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Aguarde 500 milissegundos (ou o tempo desejado) antes de adicionar a classe
    setTimeout(function() {
      var apresentacaoProjetos = document.querySelector('.apresentacaoProjetos');
      apresentacaoProjetos.classList.add('slide-in');
    }, 500); // Tempo em milissegundos
  });
  
