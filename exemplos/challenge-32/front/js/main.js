(function () {
    'user strict';


    // MÉTODO GET

    // var ajax = new XMLHttpRequest();
    // ajax.open('GET', 'http://localhost:3000/user/maria');
    // ajax.send();

    // ajax.addEventListener('readystatechange', function (e) {
    //     // metodo abort 
    //     // if (ajax.readyState === 2) {
    //     //     console.log('headers ok');
    //     //     ajax.abort();
    //     // }

    //     if (ajax.readyState === 4) {
    //         console.log(ajax.responseText, ajax.status);
    //     }
            
    // }, false); 


    // METODO POST

    var ajax = new XMLHttpRequest();
    ajax.open('POST', 'http://localhost:3000/user');
    ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    ajax.send('username=fernando&user=Fernando&age=30');

    console.log('Cadastrando user');
    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4) {
            console.log('usuario cadastrado', ajax.response);
        }
    };


    // METODO GET PARA VERIFICAR se O USUÁRIO EXISTE

    var get = new XMLHttpRequest(); 
    get.open('GET', 'http://localhost:3000/user/fernando');
    get.send();

    get.onreadystatechange = function () {
        if (get.readyState === 4) {
            console.log(JSON.parse(get.responseText));
        }
    };


})();