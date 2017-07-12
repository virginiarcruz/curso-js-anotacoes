# Js no Browser, Escopo, Arguments

* Script no head carrega antes da página ser carregada. O recomendado é colocar script no final da página.
    * colocar o script em um novo arquivo que será carregado

* IIFE - faz o código tornar-se local. Utilizar sempre escopo local para otimizar o código.
           
            ( function () {
                _escopo_
            })();

* this - aponta para o objeto que ele está dentro. Aparece em:  
  **métodos de objetos** - faz uma referência ao objeto principal.  
  **funções** - pode ter 2 valores, no objeto global e quando faz referência ao objeto instaciado.

  Para criar um construtor posso fazer a função abaixo e o this vai apontar para 'constructor'
            
            function MyConstructor(){
                this.prop1 = 'prop1';
                this.prop2 = 'prop2';
            }
            var constructor = new MyConstructor();
            console.log( 'MyConstructor', constructor);

            function MyConstructor(name, lastName, age) {
                this.name = name;
                this.lastName = lastName;
                

                this.getFullName = function getFullName() { // método
                    return this.name + ' ' + this.lastName;
                };
            }

            var virginia = new Person('Virginia', 'Rodrigues', 35); // chama o construtor com 'new'

    * Construtor começa com letra maiúscula 
    
    _window : no browser é objeto global._

* arguments - é um objeto que funciona como um array mas não é um array. Representa todos os arqgumentos passados para a função.    