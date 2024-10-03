const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1. A legalização da cannabis para fins medicinais é benéfica?",
        alternativas: [
            {
                texto: "Sim, a cannabis medicinal pode ser eficaz no tratamento de condições como epilepsia, dor crônica e esclerose múltipla, oferecendo alívio a pacientes que não respondem bem a tratamentos convencionais.!",
                
            },
            {
                texto: "Não, o uso medicinal da cannabis ainda carece de mais estudos robustos, e há preocupações sobre os efeitos colaterais, como o risco de dependência e impactos psicológicos a longo prazo.!",
                
            }
        ]
    },
    {
        enunciado: "A liberação da cannabis para uso recreativo traria benefícios sociais?",
        alternativas: [
            {
                texto: "Sim, a legalização pode reduzir o tráfico de drogas e diminuir a sobrecarga do sistema penal, ao mesmo tempo em que gera receitas para o governo através de impostos.",
                
            },
            {
                texto: "Não, a liberação recreativa poderia aumentar o consumo de cannabis, especialmente entre jovens, potencialmente levando a problemas de saúde mental e acidentes relacionados ao uso.",
                
            }
        ]
    },
    {
        enunciado: "A liberação da cannabis poderia impactar a economia positivamente?",
        alternativas: [
            {
                texto: "Sim, a legalização da cannabis criaria novos mercados, empregos e oportunidades para pequenos e grandes empresários, além de aumentar a arrecadação de impostos.",
                
            },
            {
                texto: " Não, apesar de gerar receita, os custos de saúde pública relacionados ao tratamento de vícios e outros problemas sociais poderiam exceder os benefícios econômicos.",
                
            }
        ]
    },
    {
        enunciado: "A cannabis tem o mesmo nível de risco que outras drogas recreativas legalizadas, como o álcool e o tabaco?",
        alternativas: [
            {
                texto: "Sim, estudos indicam que os riscos de dependência e os danos à saúde da cannabis são comparáveis aos do álcool e tabaco, então faz sentido regulá-la de forma semelhante.",
                
            },
            {
                texto: "Não, a cannabis pode ter efeitos diferentes no cérebro e no comportamento, especialmente em jovens, e ainda há muita incerteza sobre seus efeitos a longo prazo, o que justifica uma regulação mais rígida.",
                
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "A cannabis é uma planta que, ao longo da história, tem despertado debates complexos sobre seu uso e impacto na sociedade. De um lado, ela possui propriedades medicinais comprovadas, sendo utilizada no tratamento de condições como epilepsia, dor crônica e ansiedade. De outro, seu uso recreativo levanta questões sobre saúde mental, dependência e seus efeitos no comportamento. A reflexão mais profunda sobre a cannabis passa pela necessidade de um olhar equilibrado, que considere tanto seus potenciais benefícios quanto os riscos envolvidos, e de políticas públicas que abordem sua regulação de maneira consciente e informada.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();