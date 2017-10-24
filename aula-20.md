# JS no Browser -  Parâmetros na IIFE, Métodos do objeto window, Formulários

* if / while / for com uma linha sem chaves

        ( function (win){

            if (win === window)
                console.log ('win é igual a window');
        })(window);


# Métodos do objeto window -


* window.alert - exibe uma mensagem na tela.  Posso usar com ou sem window.
    Ex: window.alert ('mensagem');
* prompt - faz uma pergunta e espera a resposta

        var name = prompt('Qual seu nome');
        if (name ) // mesmo que name === true
            console.log('Ola', name);
        else
            console.log('Nao respondeu', name);

* confirm - método de confirmação

        var del = confirm ('Deseja excluir');
        if (dell) 
            console.log('Excluido com sucesso', name);
        else
            console.log('Ação cancelada', del);

* document - representa o HTML. Monta a estrutura do DOM.
* document.getElementById - selecionar um elemento pelo id

        document.getElementById('my-link');

* getElementsByClassName - pega o elemento a partir da classe

        document.getElementsByClassName('my-link');

* getElementsByTagName('a') - Vai trazer todas as tags de link

* getElementsByName('username') - no form quero pegar o campo setado pelo nome.

* querySelectorAll() - Seleciona todos os elementos. o Selector(), seleciona só o primeiro. Faz a seleção de elementos a partir de estrutura CSS. Uso no parametro exatamento o estilo do seletor CSS que vou utilizar. São estáticos
_Têm suporte desde o IE8_

        querySelectorAll('[type = text]') - seleciona todos os inputs com type=text
        querySelectorAll('.input') - captura os elementos com a class input


# Formulários

* method="get" - os parametros de ele vai passar eu vou pegar através da url por uma queryString

* value - método de input de formulário que trás os valores dos inputs.
    
        var $inputUserName = document.querySelector('#username');
        var $inputPassword = document.querySelector('#password');
        console.log( $inputUsername.value, $inputPassword); -
        
    vai trazer os valores preenchidos no campo username e password.  
    
    
    Posso setar um valor e posso pegar um valor do input

        $inputUserName.value = 'Fernando';
        $inputPassword.value = '123';
    
* addEventListener - adiciona eventos na propriedade.   
    -  click  - a partir do momento em que eu clicar no button ele vai fazer uma ação.

            var $inputUserName = document.querySelector('#username');
            var $inputPassword = document.querySelector('#password');
            var $button = document.querySelector( '#button');

            $button.addEventListener('click', function(event){ 
                event.preventDefault(); // não fazer nada/
                console.log('Click no botao');
            }, false); 
        
    - addEventListener - vai ficar ouvindo o que eu fizer com o o button;     Quando clicar no button o evento vai executar tudo o que estiver nesta função.
    - event- é um objeto relacionado ao button
    - event.preventDefault() - o botao de enviar tem uma ação padrão de fazer um reload na página e enviar os dados. Quando utilizo esse evento ele o botão não faz mas nada. Previne o evento padrão do botão. Evita que ele faça a ação principal; Nesse caso quando coloco essa linha ele para de enviar o formulário.

            $button.addEventListener('submit', function(event){ 
                event.preventDefault();
                console.log('Click no botao');

            }, false); 
    
    - submit** - depois que envio ele diz ao formulário o que ele vai fazer. Quando clico no enviar ele faz o envio do formulário e o evento submit é depois do envio.
    
* Posso colocar eventos em qualquer lugar da tela.
