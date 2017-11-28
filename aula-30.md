# CLOSURE

* Cada função no JavaScript tem uma Closure, que significa escopo fechado.

EXEMPLO:

        (function(){
            'use strict'

            var scope = 'global escope';

            function checkScope() {
                var scope = 'local escope';

                function func() {  return scope  }
                return func();

            }
            console.log(checkScope()); // vai retornar, local scope.
            console.log(scope);

        })();
        
- Scope só vai ser acessado dentro da IIFE.

EXEMPLO 2:

        (function(){
            'use strict'

            var counter = 0;

            function increment(){
                return counter++;
            }

            function otherFunction() {
                counter = 150;
            }

            otherFunction();

            console.log(increment());
            console.log(increment());
            console.log(increment());
            console.log(increment());
            console.log(increment());

        })();

- Chamando várias vezes ele incrementa de 1 por um até 4, isso sem a function ohterFunction

- Executando a otherFunction(), antes do increment, vai começar do 150, porque o counter de fora, compartilha.
- Para manter o incremento de forma correta, você chama outra function dentro da IIFE

        (function(){
            'use strict'

            var counter = 0;

            var increment = (function (){
                var counter = 0;
                return function (){
                    return counter++;
                }
            })();

            function otherFunction() {
                counter = 150;
            }

            otherFunction();

            console.log(increment());
            console.log(increment());
            console.log(increment());
            console.log(increment());
            console.log(increment());

        })();
- agora vai incrementar baseado no counter que está dentro da IIFE. A function cria um escopo local e o counter ++ retorn o 0 1 2 3 4.


# Manipulando CSS

* element.style - é um elemento do DOM que você vai pegar e pode manipular aquele elemento.

EXEMPLO:

        var $div = document.querySelector('div');
        $div.style.width = '100px';
        $div.stye.height = '100px';
        $div.style.backgroundColor = '#fc0';

- Se quiser posso fazer direto

        $div.setAttribute('style', 'width: 100px; height: 100px; background: blue');

- Modificar classes do elemento usando o **ClassList**

        console.log($div.ClassList) 
        
    - traz um array com uma lista de classes que tem no elemento setado.

- Se tenho um elemento com várias classes e quero manipular essas classes, tenho: add, remove, toggle e contains

        $div.classList.add('blue'); // vai adicionar a class .blue
        $div.classList.contains('container'); // vai verificar se existe a class container na div.

        $div.addEventListener('click', function (){
                this.classList.toggle('blue');
        }, false);
    
    - Para o último caso o this é a $div, toda vez que clicar na div vai tirar e colocar a class blue.
