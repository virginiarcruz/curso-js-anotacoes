# Aula 229 - Modularizando o código

* quando separo o arquivo com libraries criadas, para chamar a função criada na lib tenho que exportar.

        window.NOMEDABIBLIOTECA = BIBLIOTECA;
        window.DOM = DOM; // no final da lib

    - Na IIFCE do arquivo js que chama a lib passo DOM como parâmetro da function e no final chamo window.DOM



# Module Pattern

* Para fazer eu crio uma função app e dentro dela coloco todo o conteúdo com as variaveis e functions, no final executa a funcao app.

        function app() {

        }
        app();
    - Cse precisar usar a funcao fora faco window.app = app;

* se precisar usar as funções fora. Por exemplo usar os métodos criados dentro da função principal.

    - crio no final da função app

            return {
                nomedometodo : nomedometodo;
                getMessage : getMessage;
                replaceCEP : replaceCEP
            }

