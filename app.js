// PARTE 1: Lista de perguntas e respostas
const perguntas = [
    {
      pergunta: "Quem treinou Luke Skywalker para se tornar um Jedi?",
      respostas: [
        { opcao: "Mestre Yoda", correto: true },
        { opcao: "Obi-wan Kenobi", correto: false },
        { opcao: "Anakin Skywalker", correto: false },
        { opcao: "Qui-Gon Jin", correto: false }
      ]
    },
    {
      pergunta: "Qual a cor do sabre de luz de um Sith?",
      respostas: [
        { opcao: "Azul", correto: false },
        { opcao: "Vermelho", correto: true },
        { opcao: "Roxo", correto: false },
        { opcao: "Verde", correto: false }
      ]
    },
    {
      pergunta: "Qual o antigo nome de Darth Vader?",
      respostas: [
        { opcao: "Obi-Wan Kenobi", correto: false },
        { opcao: "Anakin Skywalker", correto: true },
        { opcao: "Mace Windu", correto: false },
        { opcao: "Luke Skywalker", correto: false }
      ]
    },
    {
      pergunta: "Qual o droide de protocolo construido por Anakin Skywalker?",
      respostas: [
        { opcao: "C-3PO", correto: true },
        { opcao: "R2-D2", correto: false },
        { opcao: "BB-8", correto: false },
        { opcao: "R4-P17", correto: false }
      ]
    },
    {
      pergunta: "Qual o nome da nave pilotada por Han Solo?",
      respostas: [
        { opcao: "X-Wing", correto: false },
        { opcao: "TIE Fighter", correto: false },
        { opcao: "Millennium Falcon", correto: true },
        { opcao: "Razor Crest", correto: false }
      ]
    },
    {
      pergunta: "Qual o mestre Jedi treinou Obi-Wan Kenobi?",
      respostas: [
        { opcao: "Mestre Yoda", correto: false },
        { opcao: "Qui-Gon Jinn", correto: true },
        { opcao: "Mace Windu", correto: false },
        { opcao: "Plo Koon", correto: false }
      ]
    },
    {
      pergunta: "Quem manipulou Anakin Skywalker para o lado sombrio?",
      respostas: [
        { opcao: "Darth Plagues", correto: false },
        { opcao: "Darth Maul", correto: false },
        { opcao: "Imperador Palpatine", correto: true },
        { opcao: "General Grievous", correto: false }
      ]
    },
    {
      pergunta: "Qual o planeta natal de Chewbacca?",
      respostas: [
        { opcao: "Naboo", correto: false },
        { opcao: "Tatooine", correto: false },
        { opcao: "Endor", correto: false },
        { opcao: "Kashyyyk", correto: true }
      ]
    },
    {
      pergunta: "Qual o planeta natal de Anakin Skywalker?",
      respostas: [
        { opcao: "Coruscant", correto: false },
        { opcao: "Naboo", correto: false },
        { opcao: "Tatooine", correto: true },
        { opcao: "Alderaan", correto: false }
      ]
    },
    {
      pergunta: "Qual droide astromecânico acompanha C-3PO em suas aventuras pela galáxia de Star Wars?",
      respostas: [
        { opcao: "R2-D2", correto: true },
        { opcao: "BB-8", correto: false },
        { opcao: "Chopper", correto: true },
        { opcao: "IG-11", correto: false }
      ]
    },
  ];
  
  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const textoForca = document.querySelector(".fim");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  const reiniciarBtn = document.querySelector("#refresh");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          acertos = acertos + 1;
          // Incrementa o contador de acertos
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
  
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }
  
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.innerHTML = `<br>Você acertou ${acertos} de ${perguntas.length} perguntas.<br><br><br>Que a força esteja com você!<br><br><br><br>`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
  }
  
  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();