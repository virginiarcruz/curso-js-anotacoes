# TESTES


* TDD - Desenvolvimento guiado por testes. Todo código que você escrever vai ter um teste por trás dele.

## PASSOS

  - Criar um diretório /test-example e dentro dele uma pasta /src e outra /test
  - No /src criar um arquivo sum.js
  - Dentro do diretório test criar o arquivo sum.test.js
  - Instalar o **mocha** para executar os testes
          
            sudo npm install -g mocha
  - Começa sempre com o 'use strict'
  - tenho o describe que tenho que descrever o que vou criar. 
    - e cada it() vai ser um teste seu, utilizando 2 parametros: 1 descrevendo seu teste,  e 2 a função que vai ser executada.

          describe('# SUM', function () {
              it('');
          });

    - o it começa com Should de deveria
    - preciso identificar se o método é true ou false, vamos utilizar o módulo chamado shay, que vamos utilizar as acersões.
    - Criar o package-json, no diretório tests-example
            
            echo "{}" package.json

    - instalar o módulo chai, o --save-dev é pra salvar o modulo com dependencia de desenvolvimento

            npm install --save-dev chai

    - inclui no sum.test.js o modulo chai

            var expect = require('chai').expect;

    - Diz para o it que o sum, seja uma funçao

             expect(sum).to.be.a('function');

    - executar o mocha - comando 'mocha'
      - vai dar erro então vamos fazer um procedimento pra escrever um teste com o mínimo que código possível.
    - exportar um modulo usando o exports. Arquivo sum.js

            module.exports = function () {};

    - rodando o mocha novamente o teste vai passar
    - A premissa principal de testes é você utilizar as formas: RED, GREEN e REFACTORY
      - RED - é o teste que você vai escrever que vai quebrar
      - GREEN - o teste que vai passar
      - REFACTORY - o refactory que vai manter tudo funcionando.

    - Próximo passo é escrever um outro teste que quebre.
      - vou dizer que espero que retorne 10 quando passar 1 e 9 por parâmetro.

                expect(sum(1, 9)).to.be.equal(10);

    - executando o teste ele vai dar erro, então fazer a função que vai retornar 10.

                function sum() {
                    return 10;
                };

    - faço a mesma coisa pra 5
    - Preciso que os dois parametros passados sejam números

                it('Should SUM return an error if it receive just one parameter', function () {
                    expect(sum(1)).to.be.an('error');
                });

        e

                if (!num1 || !num2) {
                    return new Error('Passe dois numeros');
                }
    - Preciso que os 2 numeros passados por parametro seja de fato números.

                it('Should SUM return an error if the parameter has not a number', function () {
                      expect(sum('a', 'b')).to.be.an('error');
                  });
          e

                if (typeof num1 !== 'number' || typeof num2 !== 'number' ) {
                    return new Error('Os parâmetros devem ser números');
                }

    - Posso refatorar

      - FAzer a validação do if com isEmpty
      - Verificar o tipo com isNumber

  BDD é uma Evolução do TDD

      - TDD
            
                assert.equal(sum(20,30), 50, 'Message')

      - BDD

               expect(sum(20,30).to.be.equal(50));
