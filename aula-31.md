# DOM - innerHTML

* innerHTML - retorna a string do nó do DOM que eu chamar.

            (function(){
                'use strict'

                var $div = document.querySelector('[data-js="main"]'); // seleciona a div main
                console.log($div.innterHTML);
            })();

    - vai retornar o resultado do que tem dentro de main como string.
    - Estou utilizando como getter que é pra pegar o valor
    
    
    - Para utilizar como setter

             (function(){
                'use strict'

                var $div = document.querySelector('[data-js="main"]'); // seleciona a div main
                $div.innerHTML = '<h2> Titulo 2 </h2>' 
                $div.innerHTML += '<h2> Titulo 2 </h2>'  // mantém o conteúdo da div  que já tinha + a string que estou adicionando.
            })();

    - Vai substituir o conteúdo que tinha dentro da div main por um <h2>


# Problemas com o innerHTML

* EXEMPLO: Tenho no HTML um form com um textarea, button e a div main envolvendo tudo

            (function(){
                'use strict'

                var $div = document.querySelector('[data-js="main"]');
                var $textarea = document.querySelector('[data-js="textarea"]');
                var $form = document.querySelector('[data-js="form"]');

                $form.addEventListener('submit', function(){
                    e.preventDefault();
                    $div.innerHTML = $textarea.value;
                })

            })();


- Ocorre que, se eu inserir uma imagem no textarea e no src colocar um 'x' ao invés da url, <img src="x">. se você aguardar a entrada de usuário e aguardar a entrada no usuário sem guardar, ele vai poder passar qualquer script nessa área que recebe o código. 
O usuário pode colocar uma entrada de <script></script> e executar algumas coisas. Você precisa tratar a entrada do usuário e validar.
Você pode usar o innerHTML tranquilamente desde que você faça a entrada dos dados. Se deixar para o usuário fazer ele pode colocar qualquer coisa.


* insertAdjacentHTML - faz a mesma coisa que o innerHTML só que você vai poder escolher a posição que aquele HTML vai ser inserido.
    - insertAdjacentHTML(position, text) - text em formato string
        - beforebegin - coloca o HTML antes da abertura da tag
        - afterbegin - coloca depois da abertura da tag
        - beforeend - adiciona no final da tag antes do fechamento dela
        - beforeend - depois do fechamento da tag


            (function(){
                'use strict'

                var $form = document.querySelector('[data-js="form"]');
                $form.insertAdjacentHTML('beforebegin', '<h1> Fomulario </h1>'); // Adiciona antes da tag do form
                $form.inserAdjacentHTML('beforend', '<h1> Fomulario </h1>'); // Adiciona no final do form
                $form.inserAdjacentHTML('afterend', '<h1> Fomulario </h1>'); // Adiciona depois do form

            })();

     - console.dir($form) - mostra as propriedades daquele elemento, como um objeto.
     - A propriedade **outerHTML** - mostra o código em string, você pode fazer.

                $form.inserAdjacentHTML('afterend', $form.outerHTML);

# Documentação

- devdocs.io - tem tudo o que precisa de documentação.


# Date Object

- É um construtor e você utiliza instanciando uma nova data

            (function(){
                'use strict'

                var date = new Date();
                console.log(date); // vai imprimir o horário e a data.

            })();

    - Posso modificar a data


            (function(){
                'use strict'

                var year = 2015;
                var month = 10;
                var day = 7;
                var hour = 10;
                var min = 5;
                var sec = 0
                var milliseconds = 12;
                var date = new Date(year, month, day, hour, min, sec, milliseconds);

                console.log(date); // vai imprimir o horário e a data que eu setei.

            })();


    - Posso usar o mês em formato de array



            (function(){
                'use strict'

                var month = [
                    'Janeiro',
                    'Fevereiro',
                    ....
                ]

                var year = 2015;
                var month = month[1];
                var day = 7;
                var hour = 10;
                var min = 5;
                var sec = 0
                var milliseconds = 12;
                var date = new Date(year, month, day, hour, min, sec, milliseconds);

                console.log(date); // vai imprimir o horário e a data que eu setei.

            })();


    - Se eu colocar um dia por exemplo 30 de fevereiro que não existe ele vai para o próximo dia, ou seja, 1 de março.


* Date.now() - é o método estático do Date. Representa o número de milisegundos que se passaram entre um intervalo de 1970 pra cá

    - Date.now() - exibe em milissegundos que se passaram desde 1970 pra cá
    - Date.now() / 1000 - exibe os segundos que se passaram desde 1970 pra cá
    - Date.now() / 1000 / 60  - exibe os minutos que se passaram desde 1970 pra cá
    - Date.now() / 1000 / 60 / 24  - exibe as horas que se passaram desde 1970 pra cá


    - Quando quiser saber o intervalo que se passou depois que fiz um for

            var star = Date.now();
            for ( var i = 0; i = 100000; i++);
            var end = Date.now();
            console.log(end - start);

        - Você consegue ter uma média de tempo


* date.getDate() - traz o dia de 0 a 31
* date.getDay() - traz o dia da semana de 0 a 6
* date.getFullYear() - traz o ano de 
* date.getYear() - traz o ano 0 a 99 são de 1900 até 1999, o ano 100 é o ano de 2000. 
* date.getHours() - traz a hora
* date.getMilisecons() - consigo pegar a quantidade de milisegundos de 0 a 999
* date.getMinutes() - 0 a 59
* date.getMonth() - 0 a 11
* date.getSeconds() - de 0 a 59
* date.getTime() - miliseconds desde 1970


# Math Object - Fazer cálculos Matemáticos

* Math.PI - traz o número do PI, 3,14 - Serve pra fazer cálculo de circunferência.

* Math.abs(x) - traz o número de um valor absoluto - é o valor positivo daquele número.

            Math.abs(-10) - // exibe 10 - transforma o negativo em positivo também

* Math.ceil(x) - arredonda o valor sempre pra cima

            Math.ciel(10.2) // será 11

* Math.floor(x) - arredonda o valor sempre pra baixo

            Math.floor(10.9) // será 10

* Math.round(x) - respeita a regra de arredondamento.

            Math.round(10.3) // será 10
            Math.round(10.5) // será 11

* Math.sqrt(x) - calcula a raiz quadrada. Tira a raiz quadrada do número passado.
* Math.cbrt(x) - calcula a raiz cúbica

* Math.max([x1,x2, xN]) - traz o maior número entre aqueles valores que você passar por parâmetro

            Math.max(1,2,3,4,8,10) // exibe 8

* Math.min([x1,x2, xN]) - Qual o menor valor entre aqueles passados por parâmetro

        Math.max(1,2,3,4,8,-10) // exibe -10

    - Posso utilizar com array. Por exemplo:

            var numbers = [1,2,3,4,8,-10];
            Math.max.apply(Math, numbers); //Math vai ser o próprio this. Ele vai tirar o max ou o min que precisar.

* Math.random - tras um número aleatório entre 0 e 1. Maior que 0 e menor  que 1

    - Se quiser um número de 0 a 3.

            Math.random() * 3 // vai exibir um número de 0 a 3

    - Se quiser arredondar o número faço um floor.

            Math.floor( Math.random() * 3)