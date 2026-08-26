/// <reference types="cypress" />

// Casos de teste do Quiz de Conhecimentos Gerais.
// O Cypress acessa o jogo através de um servidor local (npm run start),
// que serve o arquivo game/index.html em http://localhost:8080.

describe('Quiz de Conhecimentos Gerais', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('CT01 - carregar o quiz deve exibir a primeira pergunta e 4 opções', () => {
    cy.get('#contador').should('have.text', 'Pergunta 1 de 5');
    cy.get('.resposta-btn').should('have.length', 4);
  });

  it('CT02 - responder corretamente deve exibir mensagem de acerto', () => {
    // A primeira pergunta é sobre a capital do Brasil; "Brasília" é a opção de índice 1
    cy.get('.resposta-btn').eq(1).click();

    cy.get('#feedback')
      .should('have.text', 'Correto!')
      .and('have.class', 'acerto');
  });

  it('CT03 - responder incorretamente deve exibir a resposta certa', () => {
    cy.get('.resposta-btn').eq(0).click(); // "Rio de Janeiro" é a opção errada

    cy.get('#feedback')
      .should('contain.text', 'Errado')
      .and('contain.text', 'Brasília')
      .and('have.class', 'erro');
  });

  it('CT04 - concluir todas as perguntas deve exibir a tela de resultado', () => {
    for (let i = 0; i < 5; i++) {
      cy.get('.resposta-btn').eq(0).click();
      cy.get('#proxima-btn').click();
    }

    cy.get('#tela-resultado').should('be.visible');
  });

  it('CT05 - acertar todas as perguntas deve exibir mensagem de nota máxima', () => {
    const respostasCertas = [1, 1, 2, 1, 2];

    respostasCertas.forEach((indiceCerto) => {
      cy.get('.resposta-btn').eq(indiceCerto).click();
      cy.get('#proxima-btn').click();
    });

    cy.get('#pontuacao-final').should('have.text', '5 / 5');
    cy.get('#mensagem-final').should('contain.text', 'Excelente');
  });

  it('CT06 - errar todas as perguntas deve exibir mensagem de incentivo', () => {
    for (let i = 0; i < 5; i++) {
      cy.get('.resposta-btn').eq(0).click(); // a primeira opção nunca é a correta neste quiz
      cy.get('#proxima-btn').click();
    }

    cy.get('#pontuacao-final').should('have.text', '0 / 5');
    cy.get('#mensagem-final').should('contain.text', 'estudando');
  });

  it('CT07 - o botão "Jogar novamente" deve reiniciar o quiz do zero', () => {
    for (let i = 0; i < 5; i++) {
      cy.get('.resposta-btn').eq(0).click();
      cy.get('#proxima-btn').click();
    }

    cy.get('#reiniciar-btn').click();

    cy.get('#contador').should('have.text', 'Pergunta 1 de 5');
    cy.get('#tela-quiz').should('be.visible');
  });
});
