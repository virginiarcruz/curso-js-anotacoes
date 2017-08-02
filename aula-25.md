# Scripts e Eventos Inline

 * Existe, funciona, mas não é bom utilizar.
 * eventos inline, você coloca diretamente no elemento. Na tag HTML.

# Eventos

 * false no final da função de EventListener significa a forma como o evento será capturado. Quando o elemento estiver dentro de uma div por exemplo ele faz a captura de dentro pra fora. Ou seja, div > a, ele captura a e depois div.

            $a.addEventListener('click', function (){

            }, false);

 * função para atrelar eventos:

    _Função genérica_

            function on(element, event, callback) {
                document.querySelector(element)
                    .addEventListener(event, callback, false);
            }
    
    _Função chamando os eventos_

        on('[data-js...]', 'click', function(event){
            event.preventDefault();
            alert('clicou no a');
        })

 * .removeEventListener - remove o evento do clique. Deve ser feita a função de remove e ser chamada a função como parametro do evento. Ex: 

        function on(element, event, callback) {
                document.querySelector(element)
                    .addEventListener(event, callback, false);
            }

        function off(element, event, callback) {
                document.querySelector(element)
                    .removeEventListener(event, callback, false);
            }

        function handleClick(event) {
            event.preventDefault();
            alert('clicou no a');
        }
        
        on('[data-js...]', 'click', handleClick);
        off('[data-js...]', 'click', handleClick);
        })

 * input - mostra o valor que for digitado no input.

        on('[data-js="input"]', 'input', function(event){
            console.log(this.value) 
        });

    _Vai mostrar no console sempre que um novo valor for digitado dentro do input.

 * keyup - quando pressiona a tecla e solta.
 * keydown - quando aperta a tecla.
