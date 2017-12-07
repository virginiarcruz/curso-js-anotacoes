# AJAX


# AJAX

* Utilizando o Node do lado do servidor.


* Exemplo de Rest API com Express [ver exemplos/challenge-32]

    - Rest API - é uma aplicação de servidor que responde através de rotas.
    - precisa ter instalado o Node na máquina
    - entrar na pasta rest-api e executar, o seguinte comando para subir o servidor.
    
                node index.js

    - Instalar o nodemon
    - Executar 'nodemon index.js' pra ele ficar ouvindo suas alterações e subir o servidor.
    - Adicionar um objeto em branco no package.json
    - Execute **npm install --save express**
    - Executar 'nodemon index.js'
    - No index.js adiconar os itens.
    - faz um get /, ou seja, pra quando acessar a raiz da aplicação mandar uma resposta
    - Para criar novas rotas (páginas)
    
                    app.get('/user', function (req, res) {
                        res.send('User');
                    });

                    app.get('/arroz', function (req, res) {
                        res.send('Arroz');
                    });

# Resolvendo o problema de Cors

* instalar o módulo cors
    - vai permitir que faça uma requisição para o servidor e que não tenha bloqueio.

            npm install --save cors
    
    Adicionar no código que criamos

    após o express no main.js


                ajax.open('GET', 'http://localhost:3000/user'); 
                ajax.send();

                var cors = require('cors');
                app.use(cors());



- Pra deixar as rotas com nomes dinamicos, sempre precisar criar uma rota pra cada página com nome diferente:

                app.get('/user/:username', function(req, res){
                    res.send(req.params.username);
                });

    Dessa forma, no frontend, main js posso chamar o nome que eu quiser. Por exemplo:

            ajax.open('GET', 'http://localhost:3000/user/jose');
            ajax.open('GET', 'http://localhost:3000/user/maria');



- Crio objetos com os nomes, no index.js

        var people = {
            joao : {
                nome: 'Joao',
                idade: 30
            },
            maria : {
                nome: 'Maria',
                idade: 35
            },
            francis : {
                nome: 'Francis',
                idade: 37
            },
        }

        app.get('/user/:username', function(req, res){
            var username = req.params.username;
                res.json(users[username]);
        });


    - Se no front eu acessar

        ajax.open('GET', 'http://localhost:3000/user/maria');
    
    - Vai exibir o objeto maria
    - Se eu acessar um usuário que não existe ele vai exibir um objeto em branco. Nesse caso posso fazer o seguinte

            app.get('/user/:username', function(req, res){
            var username = req.params.username;
            if(users[username]) {
                return res.json(users[username]);
            }
            res.status(404).json({erro: 'user nao cadastrado'});
        });

    - No front-end coloco:

        console.log(ajax.responseText, ajax.status);


# Exemplo de Rest API com Express

* ajax.open('GET', <url>, <async>) - posso usar 3 parametros no ajax.open.

* ajax.abort(); - quando você precisa pegar só uma informacão da requisicao.

* ajax.open('POST', <url>) - você vai abrir a requisicao.
    - tem que ter - ajax.setRequestHeader(<key>, <value>);

        ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

    - existem varios tipos de content type, mas esse é o que básico que vamos usar.

    - Feito isso iremos mandar o ajax.send, só que iremos mandar o valor para o servidor.

        ajax.send('key1=value1');

- o Post envia dados para o servidor, para que o servidor faça algo com aqueles dados.
- Então mando os dados no método send

        ajax.send('key1=value1&key2=value2');

- EXEMPLO PARA ENVIAR PARA O SERVIDOR COM O MÉTODO POST

        var ajax = new XMLHttpRequest();
        ajax.open('POST', 'http://localhost:3000/user');
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajax.send('username=roberto&age=32');

        ajax.onreadystatechange = function() {
            if(ajax.readyState === 4) {
                console.log('usuario cadastrado');
            }
        }

    - No back end tenho que criar o método POST
        - instalar  parser - npm install --save body parser

        var 
        app.post('/user', function(req, res){
            req.body
        });


**CORRIGIR ESTA AULA** 