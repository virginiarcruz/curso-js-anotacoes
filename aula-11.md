
# Laços / Loop

* do / While  
    Preciso ter um contador

            var counter = 1;

            while( counter < 10) {
                console.log( counter++);
            }
            console.log( 'counter não é mais menor que 10);

            do {
                console.log( counter++);
            } while ( counter < 10 );

* for / in - serve pra você percorrer propriedades de um objeto

        var car = {
            brand: volks;
            model: golf;
            ano: 2014;
        }

        for (var prop in car ) {
            console.log(prop);
            console.log(car[prop]); // vai mostrar o resultado das propriedades do objeto;
        }

        console.log( 'dooors in car?', 'doors' in car); // vai exibir false


* switch
        var number = 10;

        switch (number) {
            case 1:
                console.log(( '1');
                break;
            case 2:
                console.log(( '2');
                break;
            case 10:
                console.log(( '10');
                break;
            default:
                console.log('default');
        }
        console.log ('fim');

* continue -  passa para a próxima instrução
* break - para a instrução
    