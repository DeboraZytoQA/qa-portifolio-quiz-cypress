# 🧠 Portifólio de QA. Testando um Jogo próprio com Cypress.



![Testes](https://github.com/DeboraZytoQA/qa-portifolio-quiz-cypress/actions/workflows/tests.yml/badge.svg)


Versão em Cypress do meu quiz de conhecimentos gerais, além de escrever os testes, também criei a aplicação sendo testada em HTML/CSS/JavaScript puro.

## 🎮 O jogo

Um quiz simples com 5 perguntas de múltipla escolha. A cada resposta, o jogo mostra se você acertou ou errou, soma a pontuação e, ao final, exibe uma mensagem de acordo com o resultado.

## 🛠️ Tecnologias

- *Cypress* — framework de testes end-to-end
- *http-server* — servidor local simples, usado só para servir o jogo durante os testes
- *JavaScript*
- *GitHub Actions* — roda os testes automaticamente a cada push

## 📁 Estrutura do projeto
qa-portfolio-quiz-cypress/
├── game/
│   └── index.html          # O jogo em si
├── cypress/e2e/quiz.cy.js  # Casos de teste
├── cypress.config.js
├── package.json
├── .github/workflows/tests.yml
└── README.md
## ✅ O que está sendo testado

| # | Caso de teste | Tipo |
|---|---|---|
| CT01 | Carregar o quiz exibe a primeira pergunta e 4 opções | Positivo |
| CT02 | Responder corretamente exibe mensagem de acerto | Positivo |
| CT03 | Responder incorretamente exibe a resposta certa | Negativo |
| CT04 | Concluir todas as perguntas exibe a tela de resultado | Positivo |
| CT05 | Acertar todas as perguntas exibe mensagem de nota máxima | Positivo |
| CT06 | Errar todas as perguntas exibe mensagem de incentivo | Negativo |
| CT07 | O botão "Jogar novamente" reinicia o quiz do zero | Positivo |

## ▶️ Como rodar na sua máquina

Pré-requisito: [Node.js](https://nodejs.org) instalado.

```bash
# 1. Clonar o repositório
git clone https://github.com/SEU-USUARIO/qa-portfolio-quiz-cypress.git
cd qa-portfolio-quiz-cypress

# 2. Instalar as dependências
npm install

# 3. Rodar os testes (sobe o servidor e roda o Cypress automaticamente)
npm test
