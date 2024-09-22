
/*Objetivo 1 - quando o usuário clicar no botão de seleção de plataforma
deve abrir as caixas com botões de seleção de plataforma.*/

    /*Passo 1 - pegar  botão de seleção de plataforma no JS para poder verificar
    quando o usuário clicar em cima dele*/
    //const botao = document.querySelector(".btn-plataforma");

   // Passo 2 - pegar o elemento do conteudo que precisa ser mostrado
    //const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

    //Passo 3 - pegar o clieque do usuário no js
    /*botao.addEventListener("click", () => {
        console.log("O botão foi clicado");
    });*/

    /*Passo 4 - quando o usuário clicar, adcionar a classe ativo na listagem de
    plataformas dentro do botão para que o conteúdo apareça */

/*Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar
no botão de fechar, o conteúdo deve ser escondido.*/
    
   // const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

    /*Passo 1 - verificar se o botão já foi ativo pelo usuário, se sim, devemos
    remover a classe ativo pra que ele esconda o conteúdo novamente.*/
    
    const botao = document.querySelector(".btn-plataforma");
    const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

    botao.addEventListener("click", () => {
        elementoPlataformas.classList.toggle("ativo");
    });