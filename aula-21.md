# Sync vs async

* Sync - quando tenho algo que esta acontecendo na sua aplicação que vem um comando após o outro em sequência.
* Async - quando se trabalha com eventos, quando se espera uma ação do usuário na tela.

* Event loop - coloca eventos na fila do javascript

* setTimeout() - adiciona alguns eventos async mas com um temporizador. É método de window. Recebe uma função com os segundo que ele vai contar para executar. A função abaixo mostra o início e após 1 segundo (1000)ele executa o setTimeout();

        setTimeout( function(){
            console.log('executou setTimeout);
        }, 1000);

* setInterval() -  funciona de forma semelhante, ele não para continua executando infinitamente até que mande ele parar. O código abaixo vai se executado a cada 100 milisegundos.

        setInterval( function(){
            console.log('executou setTimeout);
        }, 100);
    
    Posso fazer uma **função recursiva**. Ela precisa de uma forma de parar, no caso abaixo é com o if

        var counter = 0;

        function timer(){
            console.log('timer', counter++);
            if (counter > 10)
                return;
            setTimeout(timer, 1000);
        }

        timer();
    
A diferença para o setInterval é que o Timeout só roda uma vez, o setInterval roda infinitamente.

# Métodos para limpar o intervalo

* clearTimeout(id) / clearInterval - limpam o setTimeout ou setInterval

    var counter = 0;

        function timer(){
            console.log('timer', counter++);
            if (counter > 20)
                return;
            setTimeout(timer, 1000);
        }

        timer();