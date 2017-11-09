# Aula 28 - AJAX - Asynchoronous JS and XML

* utilizo eventos para executar uma ação em uma thread secundária para manter a thread principal liberada.

* O AJAX, serve para fazer requisições assyncronas, na mesma url sem que precisar recarregar a tela. Essa resposta pode ser qualquer coisa.

* 3 passos  

    1. Instanciar o objeto. É um objeto global, não precisa ter o window;

            var ajax = new XMLHttpRequest();

    2. Abrir uma conexão e dizer o tipo de protocolo e a url que vai usar. Posso usar qualquer protocolo, ou seja, get, post, option. Qualquer protocolo http válido. Os que mais funcionam são  **get** e **post**

            ajax.open(<protocol>, <url>);
    
    3. Enviar os dados para o servidor. Se tiver que enviar, se não tiver você não envia nenhum dado.

            ajax.send(<data>);

    

    EXEMPLO:

            (function(){

               'use strict';

                var ajax = new XMLHttpRequest();
                ajax.open('GET', '/'); ou ajax.open('GET', '/js/main.js'); 
                ajax.send(); 
            })

    - como não tenho dados para enviar no send coloco 'null' ou deixo vazio;


* onreadystatechange - Para manipular os dados, as informações que nos são retornadas pelo servidor.
 
 
 EXEMPLO:

            (function(){

               'use strict';

                var ajax = new XMLHttpRequest();
                ajax.open('GET', '/'); ou ajax.open('GET', '/js/main.js'); 
                ajax.send(); 

                ajax.addEventListener('readystatechange', function(){
                    console.log('Terminou requisicao');
                }, false);
            })

- quando terminar de recarregar a tela ele vai entrar no readystatechange, e vai exibir a mensagem do console.

* ajax.readyState - para verificar o estado atual da tela. Vai dizer para o usuário em que ponto da requisição ele está.

        ajax.addEventListener('readystatechange', function(){
                    console.log('Terminou requisicao', ajax.readyState);
                }, false);

* ajax.status - você consegue verificar o status da requisição

        console.log('Terminou requisicao', ajax.readyState, ajax.status);

* Para verificar se a requisição está ok

EXEMPLO:

            (function(){

               'use strict';

                var ajax = new XMLHttpRequest();
                ajax.open('GET', '/'); ou ajax.open('GET', '/js/main.js'); 
                ajax.send(); 

                console.log('Carregando');

                ajax.addEventListener('readystatechange', function(){
                    if(isRequestOk()) {
                        console.log('requisicao ok');
                    } else {
                        console.log('requisicao com problema ou ainda carregando');
                    }
                    
                }, false);

                function isRequestOk() {
                    return ajax.readyState === 4 &&& ajax.status === 200;
                }
            })

- quando o readyState é igual a 4 e o status é igual a 200 quer dizer que tudo foi carregado corretamente. São os status ok de requisição da página.

* ajax.responseText - tras a resposta da requisição em string.
    - Se eu tiver um JSON por exemplo:    

            {
                message : 'ok';
            }
    - Posso pegar os dados desse JSON que nada mais é do que um objeto javascript com o responseText, da seguinte forma.
        1. Primeiro tenho que dar um **parse**, preciso parsear o dados transformando-os em javascript

            var data = JSON.parse(ajax.responseText);

        2. Chamo a propriedade do JSON como objeto javascript

            console.log('Requisicao ok', data.message);

* ajax.responseXML - converte a resposta que veio de um documento XML em documento.
    - Tenho que ter um documento XML e faço a requisiçao ao invés de JSON em XML


# Tratamento de erros

* quando a aplicação da um erro no JS a aplicação exibe esse erro.
* try / catch - é como se fosse um if. O try tenta executar o código que tá dentro dele. Se conseguir executar ele mandar para o catch para que não deixe o código parar. o Catch exibe o erro só como string e não para o carregamento da página.

        try {
            response = JSON.parse(ajax.responseText);
        }
        catch(e) {
            response = ajax.responseText;
        }
        console.log(response);